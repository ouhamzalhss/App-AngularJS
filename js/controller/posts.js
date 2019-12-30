app.controller('PostCtrl',['$scope','$rootScope','PostFactory', function($scope, $rootScope, PostFactory){
    
    
    $rootScope.loading = true;
    $scope.number = 1.254;
    $scope.posts = PostFactory.getPosts().then(function(posts){
          $rootScope.loading = false;
          $scope.posts = posts;
    }, function(msg){
          alert(msg);
    })
}]);