
angular.module('myApp')
	.directive('footBall',function(){
		return {
			restrict:'E',
			replace:true,
			template:'<footer class="footer">'+
					'<ul>'+
						'<li ui-sref-active="act" ui-sref="home.football"><i class="yo-ico" >&#xe6bb;</i><b >首页</b></li>'+
						'<li ui-sref="search" ui-sref-active="act"><i class="yo-ico" >&#xe65c;</i><b >发现</b></li>'+
						'<li><i class="yo-ico">&#xe664;</i><b ></b></li>'+
						'<li ui-sref="my" ui-sref-active="act"><i class="yo-ico" >&#xe735;</i><b >我的</b></li>'+
						'<li ui-sref="exits" ui-sref-active="act"><i class="yo-ico" >&#xe603;</i><b >退出</b></li>'+
					'</ul>'+
				'</footer>'
		}
	})