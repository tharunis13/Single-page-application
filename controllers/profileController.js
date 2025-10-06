app.controller('ProfileCtrl', function($scope, $routeParams, UserService) {
  var userId = $routeParams.id;
  UserService.getUser(userId).then(function(response) {
    $scope.user = response.data;
  });
});
