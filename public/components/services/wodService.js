angular.module("crossfit").service("wodService", function($http) {



    this.getAllWods = function(){
        return $http({
            method:"GET",
            url:"/api/wod"
        }).then(function(res){
            console.log(res.data)
            return res;
        })
    }

    this.postComment = function (userId, postId, newComment) {
  return $http({
    method: "POST",
    url: "/api/wod/comment/",
    data: {
      postId: postId,
      userId: userId,
      newComment: newComment
    }
  })
}
    this.deleteComment = function(id, daily) {
        return $http({
            method: 'DELETE',
            url: 'api/wod/' + id +'/'+ daily
        })
    }

});
