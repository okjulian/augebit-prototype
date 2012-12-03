'use strict';

// Declare app level module which depends on filters, and services
var augebitPrototypeApp = angular.module('augebitPrototypeApp', ['HNServices'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'MainCtrl'
      })
      .when('/links', {
        templateUrl: 'views/links-list.html',
        controller: 'LinksCtrl'
      })
      .when('/books', {
        templateUrl: 'views/books-list.html',
        controller: 'BooksCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
