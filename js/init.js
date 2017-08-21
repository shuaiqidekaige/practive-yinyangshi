(function(){
	window.onload=function(){
		var timer=null,
		     emded=document.querySelector('#bg .bg1 object'),
			 header=document.querySelector('#header'),
			 top_animate=$('.top_animate'),
			 goIndex=$('.gotoIndex'),
			 swp=$('.swp'),
			 download=$('.download'),
			 box=$('.box'),
			 box_title=$('.title_box'),
			 banner=$('.banner');
		//检测flash是否加载完成
		timer=setInterval(function(){
			if(emded.IsPlaying()){
				//头部显示
				header.className+='show';
//				检测是否在第二背景
				isScroll();
				swp.animate({'top':'230px','opacity':'1'},1500);
				download.animate({'top':'750px','opacity':'1'},1500,function()
				{
					var video=$('.video_role');
            	    var close=$('.close');
					top_animate.animate({'left':'30px'},1500);
				    goIndex.animate({'right':'30px'},1500);
				    //	   	点击视频播放
			       video.click(function(){
			          $('html').css({'height':'100%','overflow':'hidden'});
			       	  $('body').css({'height':'100%','overflow':'hidden'});
			       	  $('#video_play').css({'display':'block'}).children('div').addClass('video_sp');
			       });
			       //     视频关闭
			        close.click(function(){
			       	$('html').css({'overflow':''});
			       	$('body').css({'overflow':'','oveflow-x':'hidden'});
			       	$('#video_play').css({'display':'none'});
			        });
					}
			);	
		   	//	第二背景初始化
		           $(document).scroll(isScroll);
		          function isScroll(){
			      	     if($(document).scrollTop()>350){
			                box_title.eq(0).animate({'top':'0','opacity':'1'},500,function(){
			                	box.eq(0).animate({'top':'0','opacity':'1'},300,function(){
			    				box.eq(1).animate({'top':'0','opacity':'1'},300,function(){
			    				 box.eq(2).animate({'top':'0','opacity':'1'},300,function(){
			    				  box.eq(3).animate({'top':'0','opacity':'1'},300,function(){
			    				   box.eq(4).animate({'top':'0','opacity':'1'},300,function(){
			    				    box.eq(5).animate({'top':'0','opacity':'1'},300);
			    			    });
			    			  });
			    			 });
			    			 });
			    			});
			                });
			               
			    		}
//			      	     第三背景初始化
			      	    if($(document).scrollTop()>1000){
			      	    	 box_title.eq(1).animate({'top':'-350px','opacity':'1'},500,function(){
			      	    	 	banner.eq(0).animate({'opacity':'1'},500);
			      	    	 });
			      	    	 
			      	    }
		       }
				clearInterval(timer);
			}
				
		},1500);	
	}
})();