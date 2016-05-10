angular.module("crossfit").controller("wodCtrl", function($scope, wodService) {





    $scope.getAllWods = wodService.getAllWods().then(function(res){
            $scope.allWods = res.data;
    })


});
