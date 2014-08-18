angular.module('basicRouting').controller('HeaderCtrl', ['$scope', 'fish', 'people',
    function ($scope, fish, people) {
        $scope.fish = fish;
        $scope.people = people;
    }
]);