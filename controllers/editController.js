app.controller('EditCtrl', function($scope, $routeParams, $location, UserService) {
  var userId = $routeParams.id;

  UserService.getUser(userId).then(function(response) {
    $scope.user = response.data;
  });

  $scope.updateUser = function() {
    UserService.updateUser($scope.user).then(function() {
      $location.path('/dashboard');
    });
  };
});
