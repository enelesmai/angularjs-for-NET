var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);

app.controller('departmentController', function($scope,$http){
    $scope.GetDepartments=function(){
        $http.get('/Department/Index').then(function (response) {
            $scope.Depts = response.data;
        });
    };
});

app.controller('employeeController', function ($scope, $http) {
    $scope.GetEmployees = function () {
        $http.get('/Employee/Index').then(function (response) {
            $scope.Emps = response.data;
        });
    };
    $scope.GetEmployeesByDid = function (did) {
        $http.get('/Employee/GetByDid/' + did).then(function (response) {
            $scope.Emps = response.data;
        });
    };
    $scope.Sort = function (col) {
        $scope.key = col;
        $scope.AscOrDesc = !$scope.AscOrDesc;
    }
});