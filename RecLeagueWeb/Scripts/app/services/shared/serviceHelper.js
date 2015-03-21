recLeagueApp.factory('serviceHelperSvc', ['$http', '$resource', function ($http, $resource) {
    var baseUrl = {
        "apiurl": "http://localhost:58789/",
        "weburl": "http://localhost:63072/"
    }
    var buildUrl = function (resourceUrl) {
        return baseUrl.apiurl + resourceUrl;
    };

    return {
        Account: $resource(buildUrl('api/Account/Register/'), null,
            {
                register: { method: 'post' }
            }),
    };
}]);