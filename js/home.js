$(function(){
	
	//特效
	(function(){
		
       
//     新特性盒子特效
        $('.box').hover(function(){
       	var line=$(this).children('.box_demo').children('i');
       	$(this).children('img').stop().animate({'top':'-20px'});
       	line.eq(0).animate({'left':'0'},300,function(){
       		line.eq(1).animate({'top':'0'},300,function(){
       			line.eq(2).animate({'left':'0'},300,function(){
       				line.eq(3).animate({'top':'0'},300);
       			});
       		});
       	});
       },function(){
       	var line=$(this).children('.box_demo').children('i');
       	line.finish();
       	$(this).children('img').stop().animate({'top':'0px'});
       	line.eq(0).css({'left':'-402px'});
       	line.eq(1).css({'top':'-180px'});
       	line.eq(2).css({'left':'402px'});
       	line.eq(3).css({'top':'180px'});
       });

	})();
	

//  轮播图部分
	  (function(){
	  	        var line=$('.picLine');
	  	       	var len=$('.pic_box').length;
			  	var index=0;
	  	        line.eq(0).css({'left':'0px'});
		       	line.eq(1).css({'top':'0px'});
		       	line.eq(2).css({'left':'0px'});
		       	line.eq(3).css({'top':'0px'});
			  	$('.pic_box').eq(0).children('.commom_click').css('display','block');
			  	$('.right_click').click(function(){
			  		change(this,'right');
			  	});
		  		$('.left_click').click(function(){
		  			change(this,'left');
		     	});
		     	$('.left_btn').click(function(){
		     		change('left');
		     	});
		     	$('.right_btn').click(function(){
		     		change('right');
		     	});
	  	
	  	//按钮功能
	  	function change(that,direction){
	  		$('.pic_line').finish();
	  		$('.picLine').finish();
	  		$('.pic_line').css('opacity','0');
	  		line.eq(0).css({'left':'-740px'});
		  	line.eq(1).css({'top':'-410px'});
		    line.eq(2).css({'left':'740px'});
		    line.eq(3).css({'top':'410px'});
	  		$('.pic_box').children('.commom_click').css('display','none');
	  		$('.pic_box').removeClass('left_box mid_box right_box');
	  		if(arguments.length==2){
	  		index=$(that).parent('.pic_box').index();
	  		direction=arguments[1];
	  		}
	  		else{
	  		direction=arguments[0];	
	  		}
	  		if(direction=='right'){
		  		var beforeIndex=index+1;
		  		var lastIndex=index+2;
		  		if(beforeIndex>len-1){beforeIndex=0;}
		  		if(lastIndex>len-1 && beforeIndex!=0){lastIndex=0;}
		  		if(lastIndex>len-1 && beforeIndex==0){lastIndex=1;}
		  		if(arguments==2){
		  			$(that).parent('.pic_box').addClass('left_box');
		  		}
		  		else{
		  			$('.pic_box').eq(index).addClass('left_box');
		  		}
		  		$('.pic_box').eq(beforeIndex).addClass('mid_box');
		  		$('.pic_box').eq(lastIndex).addClass('right_box');
		  		$('.pic_box').eq(beforeIndex).children('.commom_click').css('display','block');
		  		index=beforeIndex;
	  		}
	  		else if(direction=='left'){
		  		var beforeIndex=index-1;
		  		var lastIndex=index-2;
		  		if(beforeIndex<0){beforeIndex=beforeIndex+len;}
		  		if(lastIndex<0){lastIndex+=len;}
		  		if(arguments==2){
		  			$(that).parent('.pic_box').addClass('right_box');
		  		}
		  		else{
		  			$('.pic_box').eq(index).addClass('right_box');
		  		}
		  		$('.pic_box').eq(beforeIndex).addClass('mid_box');
		  		$('.pic_box').eq(lastIndex).addClass('left_box');
		  		$('.pic_box').eq(beforeIndex).children('.commom_click').css('display','block');
		  		index=beforeIndex;
	  		}
	  		$('.pic_line').stop().animate({'opacity':'1'},1000);
	  		$('.picLine_top').stop().animate({'left':'0'},300,function(){
	  			$('.picLine_right').stop().animate({'top':'0'},300,function(){
	  				$('.picLine_bottom').stop().animate({'left':'0'},300,function(){
	  					$('.picLine_left').stop().animate({'top':'0'},300);
	  				});
	  			});
	  		});
	  	}
	  })()
	
});
