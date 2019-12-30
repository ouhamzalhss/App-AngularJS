var app = angular.module('myApp', ['ngRoute','ngAnimate']);
          
app.config(function($routeProvider,$locationProvider){
    
   

    $routeProvider
      .when('/home', {templateUrl: 'partials/home.html', controller: 'PostCtrl' })
      .when('/contact', {templateUrl: 'partials/contact.html', controller:'ContactCtrl' })
      .when('/contact-success', {templateUrl: 'partials/contact-success.html', controller:'ContactCtrl' })
      .when('/comments/:id', {templateUrl: 'partials/comments.html',controller: 'CommentsCtrl'})
      .otherwise({redirectTo: '/home'});

      $locationProvider.html5Mode(true);
});

app.filter('round', function(){
    return function(input, precision){
        console.log(precision);
        return Math.round(input * Math.pow(10, precision)) / Math.pow(10, precision);
    }
});