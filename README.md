# Charmander

Charmander is a simple template for producing Jekyll static sites using Vagrant, Gulp, Bourbon, Neat, Bitters, and Bower.

![Charmander](charmander.gif "char! mander! charmander!")

## Getting Started

1. Clone this repository locally.
2. Ensure you have [Vagrant](https://www.vagrantup.com/) installed.
3. Bring up your virtual machine from the same directory you've cloned the repository to using `vagrant up`.
4. You'll need to edit the  aws.amazon.example file and replace it with your own AWS instance information.  Be sure to include this file in .gitignore before posting changes back to Github.  Once you've made your changes, rename the file to aws-staging.json.
5. From the directory you've cloned this repository in to, run `sh charmander.sh serve` to get started.

This will start a process which monitors both Jekyll and your static assets for changes, and will automatically generate everything any time a change is made and notify your browser to refresh the page. The command line will return something like this:

```
[BS] Access URLs:
 -------------------------------------------
    Local: http://localhost:3000
 	External: http://10.0.2.15:3000
    Tunnel: https://ocutmjjycu.localtunnel.me
```

Using the **tunnel** URL will allow you to view your site with changes being synced in real time.

## Layout

```
app/ # Where your jekyll site goes
assets/ # Where your static assets go
```

## Commands

- `sh charmander.sh serve`: Starts a live reload service that will automatically update browsers using the `localtunnel.me` URL when a change is made to any file.
- `sh charmander.sh build`: Builds everything and places the final static site in `_deploy`

## Todo
- Minify JS
