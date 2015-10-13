var app = angular.module('ProxyDebbuger', ['ngMaterial', 'ngRoute', 'ngAnimate', 'ngResource']);

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('blue')
        .warnPalette('red');
});

// configure our routes
app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'app/home/view/home.html',
            controller  : 'HomeController'
        })
});