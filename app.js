var app = angular.module('UserApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/dashboard', {
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl'
    })
    .when('/view-profile/:id', {
      templateUrl: 'views/view-profile.html',
      controller: 'ProfileCtrl'
    })
    .when('/edit-profile/:id', {
      templateUrl: 'views/edit-profile.html',
      controller: 'EditCtrl'
    })
    .otherwise({
      redirectTo: '/dashboard'
    });
});
