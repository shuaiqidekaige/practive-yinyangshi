
$(function(){
    
 //		bg特效
    
  (function(){
      var n=0;
      init();
      
//    初始化角色位置
      
      function init(){
      	$('.show-role').children().eq(0).addClass('active').delay(1000).queue(function(){$('.top-bar').css('display','block');$(this).dequeue();});
      	$('.show-role').children().eq(1).addClass('activeRight').delay(1000).queue(function(){
      		$('#header').css('display','block');
      		$(window).scroll(navScroll());
      		$('.btn a').animate({'left':'750px','opacity':'1'},1000,function(){
      			$('.left-ico').animate({'left':'50px','opacity':'1'},1000);
      		});
      		$(this).dequeue();
      	});
      	
      }

//	 滚动时候导航栏效果

     function navScroll(){
     	
        if ($(document).scrollTop()>=55){
        	$('.top-bar').css({'position':'fixed','top':'0','left':'0'});
        	$('.top-bar').addClass('scroll');
        	$('.top-bar').children('.sao').css('display','block');
        	$('.top-bar').children('a').css('display','block');
        	$('.left-ico').addClass('ico-change');
        }
        else{
        	$('.top-bar').css({'position':'absolute'});
        	$('.top-bar').removeClass('scroll');
        	$('.top-bar').children('.sao').css('display','none');
        	$('.top-bar').children('a').css('display','none');
        	$('.left-ico').removeClass('ico-change');
        }
        
        return navScroll;
     }
      
//   注册按钮事件

      $('.btn').click(btnClick);
     
//   按钮点击事件
   
      function btnClick(){
          if(n==0){
          	$('.hide-role').children().stop(); 
            $('.show-role').children().removeClass('active activeRight').delay(1200).queue(function(){
            	$('.hide-role').children().eq(0).addClass('active');
            	$('.hide-role').children().eq(1).addClass('activeRight');
            	$(this).dequeue();
            });
      		n=1;
          }
          else if(n==1){
          	$('.show-role').children().stop();
            $('.hide-role').children().removeClass('active activeRight').delay(1200).queue(function(){
            	$('.show-role').children().eq(0).addClass('active');
            	$('.show-role').children().eq(1).addClass('activeRight');
            	$(this).dequeue();
            });
      		n=0;
          }
      
      }
     
//    下拉导航栏

      $('.top-bar-ul').children().eq(6).find('a').hover(function(){
      	$(this).addClass('showArrow');
      	$('.hide-bar').stop().slideDown();
      	if ($(window).scrollTop()<=55){
      	$('.top-bar-ul').parent().addClass('scroll');
      	}
      },function(){
      	$(this).removeClass('showArrow');
      	$('.hide-bar').stop().slideUp();
      	if ($(window).scrollTop()<=55){
      	$('.top-bar-ul').parent().removeClass('scroll');
      	}
      });
      
       $('.hide-bar').hover(function(){
       	$('.top-bar-ul').children().eq(6).find('a').addClass('showArrow');
      	$(this).stop().slideDown();
      	if ($(window).scrollTop()<=55){
      	$('.top-bar-ul').parent().addClass('scroll');
      	}
      },function(){
      	$('.top-bar-ul').children().eq(6).find('a').removeClass('showArrow');
      	$(this).stop().slideUp();
      	if ($(window).scrollTop()<=55){
      	$('.top-bar-ul').parent().removeClass('scroll');
      	}
      });
      
//	    隐藏导航栏特效    
      
      $('.hide-bar-box ul li').eq(0).hover(function(){$(this).addClass('moveTop');},function(){$(this).removeClass('moveTop');});
      $('.hide-bar-box ul li').eq(1).hover(function(){$(this).addClass('moveTop');},function(){$(this).removeClass('moveTop');});
      $('.hide-bar-box ul li').eq(2).hover(function(){$(this).find('span').text('网易阴阳师手游');},function(){$(this).find('span').text('官方微博');});
      $('.hide-bar-box ul li').eq(3).hover(function(){$(this).find('span').text('网易阴阳师手游');},function(){$(this).find('span').text('官方微信');});
      
//	   全民平台

     $('.left-btn').on('click',btn_change);
     
     function btn_change(){
     	if ($('.btn-move')[0]){
	     	$('.left-btn').removeClass('btn-move');
	     	$('.gc-content').stop().animate({'left':'0px'});
        }
     	else{
     		$('.left-btn').addClass('btn-move');
	     	$('.gc-content').stop().animate({'left':'500px'});
     	}
     }
     
//   slider

     $('.slider-content li').hover(function(){
     	$(this).addClass('move-li');
     	$(this).find('.hide-a').stop().slideDown();
     },function(){
     	$(this).removeClass('move-li');
     	$(this).find('.hide-a').stop().slideUp();
     });
     
      })();

//		中间部分特效
        
        (function(){
        	
        	var timer=null;
        	var a= $('.banner').find('.banner-content').children('a');
        	var banner_content= $('.banner').find('.banner-content');
        	var len=a.length;
        	var li=$('.banner').find('.banner-btn').children('ul').find('li');
        	var j=1;
        	
//      	初始化	
            init();
            
            function init(){
            	
//            banner初始化
              li.eq(0).css('background-color','#e37b63');
//            新闻导航初始化
              $('.news-top ul li').eq(0).find('a').find('em').addClass('moveEm');
              banner_content.width(len*360+'px');
              for (var i=0;i<len;i++){
              	 a.eq(i).css('left',i*360+'px');
              }
               
   
            }
      
//      	banner轮播
            
            
            li.mouseenter(function(){
            	for (var i=0;i<li.length;i++){
            		$(li).eq(i).css('background-color','#e37b63');
            	}
            	j=$(this).index();
            	run(1000);
            });
            
            
            setInterval(function(){
            	if (j>=len){
            	   j=0;
            	}
            	run(1000);
            },5000);
            
            function run(times){
            	clearInterval(timer);
            	for (var i=0;i<li.length;i++){
            		$(li).eq(i).css('background-color','');
            	}
            	$(li).eq(j).css('background-color','#e37b63');
            	var oldTime=new Date();
            	var Left=parseInt(banner_content.css('left'));
            	var Width=parseInt(a.width());
            	timer=setInterval(function(){
            		var t_=new Date()-oldTime;
            		if (t_>=times){
            			t_=times;
            			sLeft=-((j*Width)+Left)/times*t_+Left+'px';
            			banner_content.css('left',sLeft);
            		  	clearInterval(timer);
            		  	j++;
            		}
            		else{
            		  sLeft=-((j*Width)+Left)/times*t_+Left+'px';
            		  banner_content.css('left',sLeft);
            		}
            	},30);
            }

//      	新闻部分
            var news_box=$('.news-box');
            var news_li=$('.news-top ul').children('li');
            var news_li_len=news_li.length;
            var index=0;
            
            news_li.find('a').mouseenter(function(){
            	for (var i=0;i<news_li_len;i++){
            		news_li.eq(i).children('a').find('em').removeClass('moveEm');
            	}
            	index=$(this).parent().index();
            	$(this).find('em').addClass('moveEm');
            	common_run(news_box,1000,index,540,30);
            });
        })();
 
     
//   	平安之旅
        
        (function(){
        	
//      	导航栏部分

//      	导航栏初始化
            $('.safe-travel-top ul li.sort_play').eq(0).find('.move-box').addClass('move-box-s');
            $('.safe-travel-top ul li.sort_play').eq(1).find('.move-box').addClass('move-box-z');
//          导航栏点击事件
            $('.safe-travel-top ul li.sort_play').find('a').click(function(){
            	var sort=$(this).data('sort');
            	var showDiv=$('.'+sort);
            	var len=showDiv.parent().children().length;
            	for (var i=0;i<len;i++){
            		showDiv.parent().children().eq(i).removeClass('exit_box');
            	}
            	showDiv.addClass('exit_box');
            	$(this).siblings().removeClass('move-box-z').addClass('move-box-s');
            	$(this).parent().siblings('.sort_play').find('.move-box').removeClass('move-box-s').addClass('move-box-z');
            });
//          式神部分
//         内容初始化

 		   var both_ss=$('.both_ss_content');
 		   var ss_ul_length=Math.ceil(both_ss.children('ul').length/6);
 		   var Width=780*Math.ceil(ss_ul_length);
 		   both_ss.width(Width);
 		   both_ss.index=0;
           $('.shishen_top ul li').eq(0).find('a').css('color','#cea441');
           
          
//        式神类别点击
          
          $('.shishen_top').children('ul').find('li').children('a').click(function(){
              var sort=$(this).data('sort');
              var len=$(this).parents('ul').children('li').length;
              var pre=$('.pre');
              var next=$('.next');
              for (var i = 0 ;i < len ;i++){
              	 $(this).parents('ul').children('li').eq(i).find('a').css('color','black');
              }
              $(this).css('color','rgb(206, 164, 65)');
              $('.shishen_content').children('div').css('display','none');
              both_ss=$('.'+sort);
              ss_ul_length=Math.ceil(both_ss.children('ul').length/6);
              Width=780*Math.ceil(ss_ul_length);
              both_ss.width(Width);
              both_ss.css({'display':'block','left':'0px'});
              both_ss.index=0;
              if(!pre.hasClass('disappear')){
              	$('.pre').addClass('disappear');
              }
              if(next.hasClass('disappear')){
              	$('.next').removeClass('disappear');
              }
          })
          
          
          
          
//         按钮点击事件

           $('.next').click(function(){ 
           	     both_ss.index++;
               if (both_ss.index >= 1 && both_ss.index <= ss_ul_length-1){
               	  $('.pre').removeClass('disappear');
               	  common_run(both_ss,'1000',both_ss.index,'756',50);
               }
               if (both_ss.index==ss_ul_length-1){
               	  $('.next').addClass('disappear');
               	  common_run(both_ss,'1000',both_ss.index,'756',50);
               }
             
           });
           $('.pre').click(function(){  
               both_ss.index--;
               if (both_ss.index <= ss_ul_length-1 && both_ss.index >=0 ){
               	  $('.next').removeClass('disappear');
               	  common_run(both_ss,'1000',both_ss.index,'756',50);
               }
               if (both_ss.index <= 0){
               	  $('.pre').addClass('disappear');
               	  common_run(both_ss,'1000',both_ss.index,'756',50);
               }
           });
         
//        主角部分
//        初始化
          var li=$('.zhujue_top').find('ul').children('li');
          var len=li.length;
          var js=$('.zhujue_content');
          var js_len=js.length;
          js.eq(0).addClass('show_zhujue');
          li.eq(0).css({'border': '2px solid black','background': 'white'});
          li.eq(0).find('em').css('display','block');
          
//        点击事件
          li.children('a').click(function(){
          	var sort=$(this).data('sort');
          	 for (var i=0;i<len;i++){
          	 	li.eq(i).css({'border': '2px solid white','background': ''});
          	 	li.eq(i).find('em').css('display','none');
          	 }
          	 for (var j=0;j<js_len;j++){
          	 	js.eq(j).removeClass('show_zhujue');
          	 }
          	 $('.'+sort).addClass('show_zhujue');
          	 $(this).parent().css({'border': '2px solid black','background': 'white'});
             $(this).siblings().css('display','block');
          });
        })();
     
        
//      攻略效果

        (function(){
        	
        	//      搜索框效果
        	var search=$('.search input[type=text]');
        	var search_btn=$('.search_btn');
        	search_btn.click(function(){
        		if (search[0].value==""){
        		     var cover=$('<div></div>').addClass('cover');
        		     var cover_box=$('<div></div>').addClass('cover_box');
        		     var cover_btn=$('<a></a>').addClass('cover_btn rotate_btn').prop('href','javascript:void(0)');
        		     cover_btn.click(function(){
        		     	cover.animate({'opacity':'0'},300,function(){
        		     		cover.remove();
        		     	})
        		     });
        		     var tip_text=$('<p></p>').text('请先输入关键字。').addClass('tip_text');
        		     cover_btn.appendTo(cover_box);
        		     tip_text.appendTo(cover_box);
        		     cover_box.appendTo(cover);
        		     cover.appendTo($('body')); 
        		     cover.animate({'opacity':'1'},300);
        		   }
        	});
        	
//      	攻略banner部分
            var index=0;
            var banner=$('.jq_banner_img ul');
            var banner_btn=$('.jq_banner_btn ul li');
            var len=banner.children('li').length;
            var Width=banner.find('li').find('a').children('img').width();
//          初始化
            banner_btn.eq(0).addClass('addBg');
            setInterval(function(){
            	 if (index<len-1)
            	    {
            	      index++;
            	    }
            	 else
            	   {
            	 	 index=0;
            	    };
            	 banner_change();
            },7000);
            
//         banner的鼠标事件
           banner_btn.mouseenter(function(){
           	  index=$(this).index();
           	  banner_change();
           });
        	
        	
//      	banner运动函数+变换按钮函数
            function banner_change(){
            	for(var i=0;i<banner_btn.length;i++){
            	 	banner_btn.removeClass('addBg');
            	 }
            	 banner_btn.eq(index).addClass('addBg');
            	 common_run(banner,'1000',index,Width,'50');
            }
            
            
            
//          攻略新闻部分
//          初始化
            var jq_right_move=$('.right_content_move');
            var jq_index=0;
            var jq_right_content=$('.right_content_move ul');
            var sort_play=$('.jq_box_right_header ul .sort_play');
            var sort_play_box=$('.jq_box_right_header ul .sort_play').find('.move-box');
            var sort_len=sort_play.length;
            var jq_right_content_len=jq_right_content.length;
            var jq_move_width=parseInt(jq_right_content.width());
            jq_right_content.parent().width(jq_move_width*jq_right_content_len);
//          攻略鼠标移入切换事件
            sort_play.mouseenter(function(){
            	for(var i=0;i<sort_len;i++){
            		if(!sort_play.eq(i).children('.move-box').hasClass('move-box-z')){
            			sort_play.eq(i).children('.move-box').addClass('move-box-z');
            		}
            		jq_index=$('.jq_box_right_header ul li.sort_play').index(this)+1;
            		$(this).children('.move-box').removeClass('move-box-z');
            		common_run(jq_right_move,'1000',jq_index,jq_move_width,'50');
            	}
            });
        })();
        
     
//      同人专区
        (function(){
        	var li =$('.person_top ul li.change_li');
        	var person_move=$('.person_content_move');
        	var a=person_move.find('ul li').children('a');
        	var ul_len=$('.person_content_move ul').length;
        	var ul_width=$('.person_content_move ul').outerWidth(true);
        	var span=li.find('span');
        	var span_len=span.length;
        	var i_=li.find('i');
        	var i_len=i_.length;
        	var index=0;
//      	初始化
            person_move.width(ul_len*ul_width);
            span.eq(0).addClass('moveTop');
            i_.eq(0).addClass('moveBottom');
//          导航栏事件
        	li.mouseenter(function(){
        		for (var i=0;i<span_len;i++){
        			span.eq(i).removeClass('moveTop');
        		}
        		for (var j=0;j<span_len;j++){
        			i_.eq(j).removeClass('moveBottom');
        		}
        		index=$('.person_top ul li.change_li').index(this);
        		common_run(person_move,'1000',index,ul_width,'50');
        		$(this).find('span').addClass('moveTop');
        		$(this).find('i').addClass('moveBottom');
        	});
//      	盒子移入移出事件
            a.hover(function(){
            	$(this).children('.cover_img').addClass('show_cover');
            },function(){
            	$(this).children('.cover_img').removeClass('show_cover');
            });
            
        })();
        
        
//      活动专区
        (function(){
//      	回跳回头
            var backTop=$('.activity_bottom .backTop');
            backTop.click(function(){
            	$(window).scrollTop(0);
            });
            
        })();
     
     
     
     
//		公共运动函数
        function common_run(obj,times,index,Width,speed,callback){  
        //第一个参数为对象，第二参数为运动所要时间，第三个参数表示索引值
        //第四个参数为一次运动多长,第四个参数为速度
            clearInterval(obj.timer);
        	var oldTime=new Date();
        	obj.timer=setInterval(function(){
        		var t_=new Date()-oldTime;
        		var left=parseInt(obj.css('left'));
        		var Left=0;
        		if (t_<times){
        		   Left=-(Width*index+left)/times*t_+left+'px';
        		   obj.css('left',Left);
        		}
        		else{
        			t_=times;
        			Left=-(Width*index+left)/times*t_+left+'px';
        		    obj.css('left',Left);
        		    if(callback){
        		    	callback();
        		    }
        			clearInterval(obj.timer);
        		}
        	},speed)
        }
        
    
  })
