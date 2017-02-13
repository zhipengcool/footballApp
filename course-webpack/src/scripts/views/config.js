
angular.module('myApp')
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('guide')
	$stateProvider
	.state('guide',{
		url:'/guide',
		templateUrl:"./tpls/guide.html",
		controller:'guideCtrl'
	})
	.state('home',{
		url:'/home',
		templateUrl:"./tpls/home.html",
		controller:'homeCtrl'
	})
	.state('home.football',{
		url:'/football',
		templateUrl:"./tpls/football.html",
		controller:'footballCtrl'
	})
	.state('search',{
		url:'/search',
		templateUrl:"./tpls/search.html",
	})
	.state('my',{
		url:'/my',
		templateUrl:"./tpls/my.html",
	})
	.state('exits',{
		url:'/exits',
		templateUrl:"./tpls/exits.html",
	})

})