var recLeagueApp = angular.module('RecLeagueApp', []);

recLeagueApp.factory('authenticationService', ['$http', function ($http) {
    var authenticationServiceFactory = {};
    var _registerUser = function (registeredUserInfo) {

        var req = {
            method: "POST",
            url: 'api/Account/Register',
            data: registeredUserInfo
        }

        return $http.post(req).then(function (response) {
        });
    };

    authenticationServiceFactory.RegisterUser = _registerUser;
    return authenticationServiceFactory;

}]);