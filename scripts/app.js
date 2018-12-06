var app = angular
    .module('app', ['ngRoute'])
    .config(function ($routeProvider) {

        /* Routes */
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });