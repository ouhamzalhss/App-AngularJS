app.controller('ContactCtrl',['$scope','$location', function($scope, $location){

    $scope.sendMessage = function(){
        $location.path('contact-success');
    }
}]);