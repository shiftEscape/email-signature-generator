angular
  .module('signGenerator', ['ngRoute', 'ngclipboard'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .otherwise({redirectTo: '/'});
  });
