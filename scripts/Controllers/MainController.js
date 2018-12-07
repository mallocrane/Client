app.controller('MainController', function ($scope, $rootScope, HttpService) {

    $scope.getWeather = function() {
        HttpService.getWeather(1).then(function(data){
            $scope.currentData = data[0];
        }, function(msg){
            console.log('fail');
        });
    }

    $scope.getWeather();

});