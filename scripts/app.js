var app = angular
    .module('app', ['ngRoute'])
    .config(function ($routeProvider) {

        /* Routes */
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainController'
            })
            .when('/todo', {
                templateUrl: 'views/todo.html',
                controller: 'TodoController'
            })
            .when('/error', {
                templateUrl: 'views/404.html',
                controller: 'ErrorController'
            })
            .otherwise({
                redirectTo: '/error'
            });
    });