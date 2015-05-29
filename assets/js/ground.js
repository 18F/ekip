var numberOfTrees = 15;

var forest = $('.object__forest');
var tree = $('.object__tree').first();

for(var i = 0; i < numberOfTrees; i++) {
    $(tree).clone().appendTo(forest);
}