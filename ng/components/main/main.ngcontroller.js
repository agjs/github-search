(function () {
    "use strict";

    angular.module('github_search').controller('mainController', controller);

    function controller(toastr, mainFactory) {
        var vm = this;
        vm.search = function () {
            mainFactory.getReposAsync(vm.user).then(function (repos) {
                if(repos.length) {
                    vm.repos = repos;
                    toastr.success(repos.length, 'Repositories Found: ');
                } else {
                    toastr.warning(repos.message, 'User ' + vm.user + ' has no repositories');
                }

            }).catch(function(error){
                toastr.error(error.data.message, 'Error');
            })

        }

    }

})();

