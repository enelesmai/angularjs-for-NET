var app = angular.module('MyApp', []);

app.controller('MyController', function ($scope) {
    $scope.MyVal = true;

    $scope.myFun = function () {
        alert('Welcome to the World of Angular JS ' + $scope.MyVal );
    };

    $scope.myFun2 = function (val) {
        alert('Welcome to the World of Angular JS ' + val);
    };
});