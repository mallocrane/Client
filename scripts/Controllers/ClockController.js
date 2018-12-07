app.controller('ClockController', function ($scope, $rootScope, $interval ) {

    $scope.hour = 16;
    $scope.minute = 0;

    $scope.increment = function() {
        //return;
        $scope.minute++;
        if ($scope.minute > 59) {
            $scope.minute = 0;
            $scope.hour++;
        }

        if ($scope.hour > 23) {
            $scope.hour = 0;
        }

        $scope.selectMode();
    }

    $scope.selectMode = function() {
        if ($scope.hour >= 20 || $scope.hour <= 8) {
            // Night
            if (!$("html").hasClass("night")){
                console.log("0");
                $("html").addClass("night");
            }
            
        } else {
            // Day
            if ($("html").hasClass("night")){
                console.log("1");
                $("html").removeClass("night");
            }
           
        }
    }
    //$scope.selectMode();
    var stop = $interval(function() {
        $scope.increment();
    }, 50);

    $scope.$on("$destroy", function() {
        $interval.cancel(stop);
        stop = undefined;
    });
});