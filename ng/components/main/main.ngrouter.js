(function(){
"use strict";

    angular.module('github_search').config(router);

    function router($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "ng/components/main/main.view.html",
                controller: 'mainController',
                controllerAs: 'mainCtrl'
            })

    }



})();

