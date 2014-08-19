angular.module('basicRouting').controller('HeaderCtrl', ['$scope', 'fish', 'people', 'caseStudies',
    function ($scope, fish, people, caseStudies) {
        $scope.fish = fish;
        $scope.people = people;
        $scope.caseStudies = caseStudies;
    }
]);