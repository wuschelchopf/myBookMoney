var bmApp = angular.module('bmApp', ['ngRoute']);

bmApp.config(function($routeProvider) {
  $routeProvider.when('/books/:isbn', {
    templateUrl: 'templates/book_details.html',
    controller: 'BookDetailsCtrl'
  });
});
