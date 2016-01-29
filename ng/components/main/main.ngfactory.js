(function () {
    "use strict";

    angular.module('github_search').factory('mainFactory', factory);

    function factory($http, $q) {
        return {
            getReposAsync: function (user) {
                var deferred = $q.defer();
                $http.get('https://api.github.com/users/' + user + '/repos')
                    .then(function (repos) {
                        deferred.resolve(repos.data);

                    }).catch(function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            }
        }
    }

})();

