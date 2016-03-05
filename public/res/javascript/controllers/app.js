var app = angular.module('tradeIt',['ngRoute','ngAnimate']);
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'res/views/home.html'
	})
	.when('/home',{
		templateUrl:'res/views/home.html'
	})
	.when('/signin',{
		templateUrl:'res/views/signin.html'
	})
	.when('/login',{
		templateUrl:'res/views/login.html'
	})
	.when('/trade',{
		templateUrl:'res/views/trade.html'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);
app.controller('tradeItController',['$scope','$http',function($scope,$http){
	$scope.title = "TradeIt!";
	
}]);
app.controller('signinController',['$scope','$http',function($scope,$http){
	$scope.user = {};
	$scope.persist = function(){
		$scope.user.username=$scope.username;
		$scope.user.password=$scope.password;
		$scope.user.postcode = $scope.postcode;
		var user = $scope.user;
		if(user.username && user.password && user.postcode){
			$http({
			  method: 'GET',
			  url: "http://maps.googleapis.com/maps/api/geocode/json?address="+user.postcode
			}).then(function successCallback(response) {
				var location = response.data.results[0].geometry.location;
				$scope.user.lat = location.lat;
				$scope.user.lng = location.lng;
				var user = $scope.user;
				$http.post('/user',user);
				$scope.formComplete = true;
			  }, function errorCallback(response) {
					console.log("Postcode can't be found FUCK I NEED TO HANDLE THIS!");
			 });
		}
	}

}]);

function getLatAndLongFromAddress($http){

}

