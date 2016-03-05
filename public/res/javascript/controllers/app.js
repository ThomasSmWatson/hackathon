var app = angular.module('tradeIt',['ngRoute','ngAnimate']);
var token =null;
app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'res/views/home.html'
	})
	.when('/home',{
		templateUrl:'res/views/home.html'
	})
	.when('/signin',{
		templateUrl:'res/views/signin.html',
		controller:'signinController'
	})
	.when('/login',{
		templateUrl:'res/views/login.html',
		controller:'loginController'
	})
	.when('/trade',{
		templateUrl:'res/views/trade.html',
		controller:'tradeController'
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

app.controller('loginController',['$scope','$http',function($scope,$http){
	$scope.login = function(){
		console.log($scope.user);
		if($scope.user.username && $scope.user.password){
			$scope.user.username = $scope.user.username.toLowerCase();
			$scope.user.password = $scope.user.password.toLowerCase();
			var response =$http.post('/authenticate',$scope.user).then(function(response){
				token = response.data.token;
				if(token){
					$scope.loggedIn= true;
				}
			});
		}

	}

}]);

app.controller('tradeController',['$scope','$http',function($scope,$http){
	$scope.checkLoginStatus = function(){
		console.log(token);
		var params = {token:token}
		$http.post('/verify',params).then(function(response){
			$scope.loggedIn = (params==true);
		});
	}
}]);

