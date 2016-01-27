angular.module('nsi-app.services', [])

.factory('ArtisNagaswara', function($http) {
	return {
		getArtist: function(){
			return $http.get('https://randomuser.me/api/?results=50').then(function(response){
				return response.data.results;
			});
		}
	}
})

