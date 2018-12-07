app.factory('HttpService', function($http, $q, $rootScope){

	var factory = {
		getWeather: function(nb_dates){
			var deferred = $q.defer();

			$http.get("../API/weather.php?info=report&nb_date=" + nb_dates)
			.then(function (response) {
                data = response.data;
                deferred.resolve(data);
            },function (error){
                console.log(error, 'can not get data.');
            });
			return deferred.promise;
		}
	}
	return factory;
});
