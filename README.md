# Brewer

Brewer is an application based on Eater that contains guides to top breweries of different cities. Brewer was created with a React-Redux front-end and a Ruby on Rails back-end.

[![Inline docs](http://inch-ci.org/github/junnac/brewer.svg?branch=master)](http://inch-ci.org/github/junnac/brewer)  [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/junnac/brewer) 

<a href="https://junnac-brewer.herokuapp.com/#/">Brewer Live</a>

## Table of Contents

* [Installation](#installation)
* [Features](#features)
* [Technologies](#technologies)
* [Status](#status)
* [Inspiration](#inspiration)

## <a name="Installation">Installation</a>
### Clone
* Clone this to your local machine using `https://github.com/junnac/Brewer.git`
### Setup
> Install npm and bundle packages
```sh
$ npm install
$ bundle install
```

> Open your terminal and run these commands.

First Tab:
```sh
$ npm start
```

Second Tab:
```sh
$ rails s
```

## <a name="features">Features</a>
* User signup/login
* Navigation bar
* Splash page
* Index of guides created by demo users
* Guide show pages
* Index of breweries
* Index of top craft beer cities in America

## <a name="technologies">Technologies</a>
* React-Redux](#react-redux)
* Mapbox API](#mapbox)
* Ruby On Rails
* AWS
* jQuery
* PostgreSQL
* Heroku

Throughout the project's workflow, I learned about the <a name="react-redux">React-Redux</a> cycle and good ways of formatting state shape and obtaining desired state.

I decided to implement <a name="mapbox">Mapbox</a> in my application's guide show pages to render locations of a guide's breweries. I designed my backend database for my `Breweries` and `Cities` tables with map marker creation in mind. Each brewery and city has a latitute `:lat` and longitude `:lng`.  Saving this information in the database resulted in a smooth transition when rendering each guide's map. The map component pulls a brewery's location to render a corresponding marker. The map's center point was based on the city's longitude and latitude (`:cityLat` and `:cityLng`).

## <a name="status">Status</a>
* In progress
* Future Features
  * Search in brewery index page
  * City show page renders all guides and breweries of a city
  * User creation of brewery guides
  * User can favorite breweries
  * User profile (shows user's guides and favorite breweries)

## <a name="inspiration">Inspiration</a>
* Content organization based off of <a href="https://www.eater.com/">Eater.com</a>
* Color scheme inspired by <a href="https://lordhobobrewing.com/">Lord Hobo Brewing Co.</a>
* Guide show page based off of <a href="https://www.eater.com/maps/best-sao-paulo-restaurants">Eater Guide</a>
  * I was inspired by Eater's restaurant guide show page and their beautiful rendition of a map highlighting the relative coordination of each restaurant.
