

 function guideCtrl(){
 	var swiper = new Swiper('.swiper-container')
 }

 function homeCtrl($scope){
 	var arr = ["足球现场","足球生活","足球美女"];
 	$scope.data = arr;
 }

 function footballCtrl($scope,$http,$timeout){
 	$timeout(function() {
 		var myScroll = new IScroll('#cont');
 	}, 10);
 	
 	$http.get('./livelist.json')
 		.then(function(data){
 			var rs = data.data.data;
 			$scope.mock = rs;
 		})
 	var swiper = new Swiper('.swiper-container',{
 		onSlideChangeStart:function(swiper){
 			$('#title li').eq(swiper.activeIndex).addClass('active').siblings().removeClass('active');
 		}
 	})


 	
 }


angular.module('myApp')
	.controller('guideCtrl',guideCtrl)
	.controller('homeCtrl',homeCtrl)
	.controller('footballCtrl',footballCtrl);