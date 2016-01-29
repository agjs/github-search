(function(){
"use strict";

    angular.module('github_search').config(router);

    function router($stateProvider, $urlRouterProvider) {
        //
        $urlRouterProvider.otherwise("/home");
        //
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "ng/components/main/main.view.html",
                controller: 'mainController',
                controllerAs: 'mainCtrl'
            });
    }

})();

