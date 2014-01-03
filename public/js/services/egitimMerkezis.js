'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.egitimMerkezis').factory('EgitimMerkezis', ['$resource', function($resource) {
    return $resource('egitim-merkezleri/:egitimMerkeziId', {
        egitimMerkeziId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);