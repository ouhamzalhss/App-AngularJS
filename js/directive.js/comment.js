app.directive('ngComment', function(){
    return {
        scope: {
            comment : '='
        },
        replace: true,
        transclude: true,
        restrict : 'E',
        templateUrl: 'partials/_comment.html'
    }
});


app.directive('time', function(dateFilter, $interval){
    return {
        scope: {},
        restrict: 'C',
        template: '{{ time }}',
        link: function(scope, element, attrs){
            
            scope.time = dateFilter(new Date(), 'hh:mm:ss')
            
            element.on('$destroy', function(){
                $interval.cancel(interval);
            });

            interval = $interval(function(){
                scope.time = dateFilter(new Date(), 'hh:mm:ss');
            }, 1000);
        }
        
    }
});


app.directive('datepicker', function(){
    return {
    restrict: 'C',
    scope: {
            options: "=datepickerOptions"
    },
    link: function(scope, element, attrs){
            $(element).pickadate(scope.options)
        }
    }
       
});