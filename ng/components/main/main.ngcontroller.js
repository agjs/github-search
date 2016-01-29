(function () {
    "use strict";

    angular.module('github_search').controller('mainController', controller);



    function controller($scope, toastr, mainFactory) {

        $scope.search = function () {
            mainFactory.getReposAsync($scope.user).then(function (repos) {
                if(repos.length) {
                    $scope.repos = repos;
                    toastr.success(repos.length, 'Repositories Found: ');
                } else {
                    toastr.warning(repos.message, 'User ' + $scope.user + ' has no repositories');
                }

            }).catch(function(error){
                toastr.error(error.data.message, 'Error');
            })

        }

    }

})();

