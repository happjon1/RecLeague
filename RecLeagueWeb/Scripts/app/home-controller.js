var recLeagueApp = angular.module('RecLeagueApp', ['ngResource']);

recLeagueApp.controller('RecLeagueCtrl',['$scope','authenticationService','$http' , function ($scope,authenticationService,$http) {
    var self = this;

    self.HelloWorld = "Hello World";

    $scope.userInfo = {
        Email: "",
        Password: "",
        ConfirmPassword:""
    };

    $scope.signUp = function () {
        $scope.userInfo.ConfirmPassword = $scope.userInfo.Password;
        console.log($scope.userInfo);
        authenticationService.RegisterUser($scope.userInfo);
    };

    $scope.getValues = function () {
        $http.get('api/values').success(function (results) {
            console.log(results);
        });
    }
}]);
