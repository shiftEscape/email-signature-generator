angular
  .module('signGenerator', ['ngRoute', 'ngclipboard', 'colorpicker.module'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .otherwise({redirectTo: '/'});
  });
