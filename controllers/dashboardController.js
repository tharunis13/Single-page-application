app.controller('DashboardCtrl', function($scope, UserService) {
  UserService.getUsers().then(function(response) {
    $scope.users = response.data;
  });

  $scope.deleteUser = function(id) {
    UserService.deleteUser(id).then(function() {
      $scope.users = $scope.users.filter(user => user.id !== id);
    });
  };
});
