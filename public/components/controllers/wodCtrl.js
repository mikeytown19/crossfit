angular.module("crossfit").controller("wodCtrl", function($scope, wodService, settingsService) {

    settingsService.getCurrentUser().then(function(res) {

        $scope.currentUser = res.data
        $scope.admin = res.data.admin
        console.log($scope.currentUser)
    })


    $scope.getAllWods = wodService.getAllWods().then(function(res) {
        $scope.allWods = res.data;
    })


    $scope.custom = true;
        $scope.toggleComments = function(){
            $scope.custom = $scope.custom === false ? true: false;

        }


    $scope.postComment = function(userId, postId, newComment, showIndex) {
        wodService.postComment(userId, postId, newComment).then(function(res) {
            wodService.getAllWods()
        })
    }

    $scope.deleteComment = function(id, dailyId) {
        wodService.deleteComment(id, dailyId);
    }

});
