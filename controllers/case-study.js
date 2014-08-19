angular.module('basicRouting').
    value('caseStudies', [
        {id: 19, description: "The people liked the Banana flavor!"},
        {id: 20, description: "The people liked the Blueberry flavor!"},
        {id: 21, description: "The people liked the Nutella flavor!"},
        {id: 22, description: "The people liked the Spam flavor!"}
    ]).
    controller('CaseStudyCtrl',
    ['$scope', '$route', 'caseStudies', function ($scope, $route, caseStudies) {
        for (var i = 0; i < caseStudies.length; i++) {
            var study = caseStudies[i];
            if (study.id === parseInt($route.current.params.id)) {
                $scope.myCaseStudy = study;
                break
            }
        }
    }]);