
app.controller('CommentsCtrl', function($scope, $rootScope, PostFactory, $routeParams) {
//console.log($scope);
// console.log($routeParams);


   $rootScope.loading = true;
   $scope.newComment = {};

    PostFactory.getPost($routeParams.id).then(function(post){
        $rootScope.loading = false;
        $scope.title = post.name;
        $scope.comments = post.comments;

    }, function(msg){
        alert(msg);
    })

    $scope.addComment = function(){
        $scope.comments.push($scope.newComment)
        console.log($scope.newComment);
        PostFactory.add($scope.newComment).then(function(){

        }, function(){
            alert('impossible de sauvegarder le commentaire!');
        })
        $scope.newComment = {};
    }


    $scope.searchComment= function(value, index, array){
        if(value.email == 'rosaliebush@fishland.com'){
            return true;
        }
        return false;
    }

    $scope.deleteComment = function(comment){
        let indexComment = $scope.comments.indexOf(comment);
        $scope.comments.splice(indexComment, 1);
    }

    $scope.removeAll = function(){
        $scope.comments = [];
    }


});