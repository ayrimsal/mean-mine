'use strict';
angular.module('mean.accounts').controller('AccountsController', ['$scope', '$routeParams', '$location', 'Global', 'Accounts', function ($scope, $routeParams, $location, Global, Accounts) {
    $scope.global = Global;

    $scope.find = function() {
        Accounts.query(function(accounts) {
            $scope.accounts = accounts;
        });
    };
// user yerine account kullanalim, karismasin logged in user ile
    $scope.findOne = function() {
        Accounts.get({
            userId: $routeParams.userId
        }, function(account) {
            $scope.account = account;
        });
    };

    $scope.update = function() {
        var account = $scope.account;
        if (!account.updated) {
            account.updated = [];
        }
        account.updated.push(new Date().getTime());

        account.$update(function() {
            $location.path('users/' + account._id);
        });
    };

}]);