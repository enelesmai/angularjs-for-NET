var app = angular.module('MyApp', ['angularUtils.directives.dirPagination']);

app.factory('crudServiceEmployees', function ($http) {
    crudEmpObj = {};

    crudEmpObj.getAll = function () {
        var Emps;

        Emps = $http({ method: 'Get', url: '/Employees/Index' }).
        then(function (response) {
            return response.data;
        });

        return Emps;
    }

    crudEmpObj.getByEid = function (eid) {
        var Emp;

        Emp = $http({ method: 'Get', url: '/Employees/Details', params: {id:eid} }).
        then(function (response) {
            return response.data;
        });

        return Emp;
    }

    return crudEmpObj;
});

app.controller('employeesController', function ($scope, crudServiceEmployees) {

    crudServiceEmployees.getAll().then(function (result) {
        $scope.Emps = result;
    });

    $scope.GetByEid = function (eid) {
        crudServiceEmployees.getByEid(eid).then(function (result) {
            $scope.Emp = result;
        });
    }
    
});