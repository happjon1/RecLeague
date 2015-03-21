var recLeagueApp = angular.module('RecLeagueApp', []);

recLeagueApp.controller('RecLeagueCtrl', ['authenticationService',function ($scope,authenticationService) {
    var self = this;

    self.HelloWorld = "Hello World";

    self.userInfo = {
        Email: "",
        Password: "",
        ConfirmPassword:""
    };

    self.signUp = function () {
        authenticationService.RegisterUser(self.userInfo);
    };
}]);
