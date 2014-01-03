'use strict';

angular.module('mean.egitimMerkezis').controller('EgitimMerkezisController', ['$scope', '$routeParams', '$location', 'Global', 'EgitimMerkezis', function ($scope, $routeParams, $location, Global, EgitimMerkezis) {
    $scope.global = Global;

    $scope.create = function() {
        var egitimMerkezi = new EgitimMerkezis({
            ad: this.ad,
            kisaltma: this.kisaltma,
            icerik: this.icerik,
            adres: this.adres,
            telefon: this.telefon,
            fax: this.fax,
            email: this.email,
            url: this.url
        });
        egitimMerkezi.$save(function(response) {
            $location.path('egitim-merkezleri/' + response._id);
        });

        this.ad = '';
        this.kisaltma = '';
        this.icerik = '';
        this.adres = '';
        this.telefon  = '';
        this.fax  = '';
        this.email  = '';
        this.url  = '';
        };

    $scope.remove = function(egitimMerkezi) {
        if (egitimMerkezi) {
            egitimMerkezi.$remove();

            for (var i in $scope.egitimMerkezis) {
                if ($scope.egitimMerkezis[i] === egitimMerkezi) {
                    $scope.egitimMerkezis.splice(i, 1);
                }
            }
        }
        else {
            $scope.egitimMerkezi.$remove();
            $location.path('egitim-merkezleri');
        }
    };

    $scope.update = function() {
        var egitimMerkezi = $scope.egitimMerkezi;
        if (!egitimMerkezi.updated) {
            egitimMerkezi.updated = [];
        }
        egitimMerkezi.updated.push(new Date().getTime());

        egitimMerkezi.$update(function() {
            $location.path('egitim-merkezleri/' + egitimMerkezi._id);
        });
    };

    $scope.find = function() {
        EgitimMerkezis.query(function(egitimMerkezis) {
            $scope.egitimMerkezis = egitimMerkezis;
        });
    };

    $scope.findOne = function() {
        EgitimMerkezis.get({
            egitimMerkeziId: $routeParams.egitimMerkeziId
        }, function(egitimMerkezi) {
            $scope.egitimMerkezi = egitimMerkezi;
        });
    };
}]);