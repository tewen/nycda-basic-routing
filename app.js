angular.module('basicRouting', ['ngRoute']).config(['$routeProvider',
    function ($routeProvider) {

        $routeProvider.when('/casestudy/:id', {
            templateUrl: 'views/case-study.html',
            controller: 'CaseStudyCtrl'
        });

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

angular.module('basicRouting').config(['$routeProvider',
    function ($routeProvider) {
        console.log("This is the second config block!");
    }]);

angular.module('basicRouting').config(['$routeProvider',
    function ($routeProvider) {
        console.log("This is the third config block!");
    }]);