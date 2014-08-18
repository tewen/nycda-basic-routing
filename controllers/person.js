angular.module('basicRouting').controller('PersonCtrl', ['$scope', 'people', '$route',
    function ($scope, people, $route) {
        $scope.message = "This is the person ctrl!";
        $scope.myPerson = _.find(people, {id: parseInt($route.current.params.id)});
    }
]);