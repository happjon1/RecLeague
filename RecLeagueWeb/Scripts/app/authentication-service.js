recLeagueApp.factory('authenticationService', ['$http','serviceHelperSvc' ,function ($http,serviceHelper) {
    var authenticationServiceFactory = {};
    var _registerUser = function (registeredUserInfo) {
        //var Account = serviceHelper.Account;
        //Account.register(registeredUserInfo);
        var Values = serviceHelper.Values;
        Values.GetValues();
        //var req = {
        //    method: "POST",
        //    url: 'api/Account/Register/',
        //    data: registeredUserInfo
        //}

        //return $http.post(req).then(function (response) {
        //});
    };

    authenticationServiceFactory.RegisterUser = _registerUser;
    return authenticationServiceFactory;

}]);