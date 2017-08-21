
$(function(){
	//头部logo显隐藏
        var left_down=$('.logo_down');
        var menu=$('.menu_li').eq(2);
        var box=$('.box');
		left_down.hover(function(){
			$(this).children().eq(0).addClass('hide_logo');
			$(this).children().eq(1).removeClass('hide_logo');
		},function(){
			$(this).children().eq(0).removeClass('hide_logo');
			$(this).children().eq(1).addClass('hide_logo');
		});
		
//		游戏目录出现
       menu.hover(function(){
       	$(this).children('.oBox').addClass('appear');
       },function(){
       	$(this).children('.oBox').removeClass('appear');
       });
});
