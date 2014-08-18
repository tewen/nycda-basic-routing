angular.module('basicRouting', ['ngRoute']).config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/fish/:name', {
            templateUrl: 'views/fish.html',
            controller: 'FishCtrl'
        }).when('/persons/:id', {
            templateUrl: 'views/person.html',
            controller: 'PersonCtrl'
        }).otherwise({
            templateUrl: "views/forbidden.html"
        });
    }
]);