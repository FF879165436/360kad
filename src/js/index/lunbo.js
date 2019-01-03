$(function(){
	var index = 0;
	var $li = $('#banner #lunbo li');
	$('#banner #right').click(function(){
		index ++;
		if(index == $li.length){
			index = 0;
		}
		$li.eq(index).fadeIn(1000).siblings().fadeOut(1000);
		$('#circle li').eq(index).addClass('current').siblings().removeClass('current');
	})
	$('#banner #right').mouseenter(function(){
		$('#right').css({'background':'gray','opacity':0.3});
	}).mouseleave(function(){
		$('#right').css({'background':"",'opacity':0.3});
	})
	$('#banner #left').click(function(){
		index--;
		if(index==-1){
			index = $li.length - 1;
		}
		$li.eq(index).fadeIn(1000).siblings().fadeOut(1000);
		$('#circle li').eq(index).addClass('current').siblings().removeClass('current');
	})
	$('#banner #left').mouseenter(function(){
		$('#left').css({'background':'gray','opacity':0.3});
	}).mouseleave(function(){
		$('#left').css({'background':"",'opacity':0.3});
	})
	var timer=null;
	timer = setInterval(function(){
		index++;
		if(index == $li.length){
			index = 0;
		}
		$li.eq(index).fadeIn(1000).siblings().fadeOut(1000);
		$('#circle li').eq(index).addClass('current').siblings().removeClass('current');
	},5000)
})
