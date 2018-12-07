app.controller('MainController', function ($scope, $rootScope, HttpService) {

    $scope.getWeather = function() {
        HttpService.getWeather(1).then(function(data){
            console.log(data);
            $scope.loading = false;
        }, function(msg){
            console.log('fail');
        });
    }

    $scope.getWeather();

});