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