app.factory('UserService', function($http) {
  const API_URL = "http://localhost:3000/users";

  return {
    getUsers: function() {
      return $http.get(API_URL);
    },
    getUser: function(id) {
      return $http.get(`${API_URL}/${id}`);
    },
    updateUser: function(user) {
      return $http.put(`${API_URL}/${user.id}`, user);
    },
    deleteUser: function(id) {
      return $http.delete(`${API_URL}/${id}`);
    }
  };
});
