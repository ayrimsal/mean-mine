'use strict';

//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/users', {
            templateUrl: 'views/users/list.html'
        }).
        when('/users/:userId', {
            templateUrl: 'views/users/view.html'
        }).
        when('/users/:userId/edit', {
            templateUrl: 'views/users/edit.html'
        }).
        when('/articles', {
            templateUrl: 'views/articles/list.html'
        }).
        when('/articles/create', {
            templateUrl: 'views/articles/create.html'
        }).
        when('/articles/:articleId/edit', {
            templateUrl: 'views/articles/edit.html'
        }).
        when('/articles/:articleId', {
            templateUrl: 'views/articles/view.html'
        }).
        when('/egitim-merkezleri', {
            templateUrl: 'views/egitimMerkezis/list.html'
        }).
        when('/egitim-merkezleri/create', {
            templateUrl: 'views/egitimMerkezis/create.html'
        }).
        when('/egitim-merkezleri/:egitimMerkeziId/edit', {
            templateUrl: 'views/egitimMerkezis/edit.html'
        }).
        when('/egitim-merkezleri/:egitimMerkeziId', {
            templateUrl: 'views/egitimMerkezis/view.html'
        }).
        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);