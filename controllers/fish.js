angular.module('basicRouting').controller('FishCtrl', ['$scope', 'fish', '$route',
    function($scope, fish, $route) {
        $scope.message = "This is the fish ctrl!";
        $scope.myFish = _.find(fish, {name: $route.current.params.name});
    }
]);