var gulp = require('gulp'),
    path = require('path'),
    batch = require('gulp-batch'),

    // SCSS
    sass = require('gulp-sass'),
 
    // JS BUILD
    uglify = require('gulp-uglify'),
    // Exec
    exec = require('child_process').exec,

    // Publishing
    s3 = require('gulp-s3');

    // Import files
    pkg = require('./package.json')
;
var fs = require('fs');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

aws = JSON.parse(fs.readFileSync('./aws-staging.json'));

gulp.task('jekyll-build', function (done) {
  browserSync.notify('<span style="color: grey">Running:</span> $ jekyll build');
  return exec('jekyll build', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
});

gulp.task('jekyll', ['jekyll-build'], function() {
    gulp.src('assets/js/*.js')
        //.pipe(uglify())
        .pipe(gulp.dest('_deploy/assets/js'));

    gulp.src('bower_components/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('_deploy/assets/js'));

    gulp.src('assets/img/*')
        .pipe(gulp.dest('_deploy/assets/img'))
        .pipe(reload({stream:true}));

    return gulp.src('assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('_deploy/assets/css'))
        .pipe(reload({stream:true}));
});


gulp.task('scss', function() {
    return gulp.src('assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('_deploy/assets/css'))
        .pipe(reload({stream:true}));
});

gulp.task('images', function() {
    return gulp.src('assets/img/*')
        .pipe(gulp.dest('_deploy/assets/img'))
        .pipe(reload({stream:true}));
});

gulp.task('compress-js', function() {
    return gulp.src('assets/js/*.js')
        //.pipe(uglify())
        .pipe(gulp.dest('_deploy/assets/js'))
        .pipe(reload({stream:true}));
});

gulp.task('jquery', function() {
    return gulp.src('bower_components/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('_deploy/assets/js'));
});

gulp.task('publish-staging', ['jekyll'], function() {
    var options = { headers: {'Cache-Control': 'max-age=5, no-transform, public'} }
    return gulp.src('./_deploy/**')
        .pipe(s3(aws, options));
});

gulp.task('publish-production', ['jekyll'], function() {
    aws = JSON.parse(fs.readFileSync('./aws-production.json'));
    var options = { headers: {'Cache-Control': 'max-age=5, no-transform, public'} }
    return gulp.src('./_deploy/**')
        .pipe(s3(aws, options));
});

gulp.task('default', ['jekyll'], function() {
  browserSync.init({
        server: {
            baseDir: "./_deploy/"
        },
        port: 3000,
        ui: false,
        tunnel: false
    });

    gulp.watch('app/*', ['jekyll']);
    gulp.watch('app/*/*', ['jekyll']);
    gulp.watch('assets/scss/*.scss', ['scss']);
    gulp.watch('assets/js/*.js', ['compress-js']);
    gulp.watch('_deploy/*.html').on("change", browserSync.reload);
});