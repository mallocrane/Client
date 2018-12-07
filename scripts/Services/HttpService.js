app.factory('HttpService', function($http, $q, $rootScope){

	var factory = {
		getWeather: function(nb_dates){
			var deferred = $q.defer();

			$http.get("../API/weather.php?info=report&nb_date=" + nb_dates)
			.success(function(data, status, headers, config){
				deferred.resolve(data);
			})
			.error(function(data, status, headers, config){
				deferred.reject('Erreur');
			});
			return deferred.promise;
		}
	}
	return factory;
});
