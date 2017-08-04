var app = angular.module('myApp', []);

app.factory('MyCalService', function () {
    fact = {};
    fact.add = function (a, b) { return parseInt(a) + parseInt(b); };
    return fact;
});

app.controller('svcController', function ($scope, MyCalService) {
    $scope.Add = function (a, b) {
        $scope.res = MyCalService.add(a, b);
    }
});