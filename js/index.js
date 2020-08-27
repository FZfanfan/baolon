/*
 * @Descripttion: 暴龙官网js
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-08-17 17:12:23
 * @LastEditors: 范钊
 * @LastEditTime: 2020-08-27 20:33:10
 */
// 回到顶部
$(".upper").click(function(){
  // $("body,html").scrollTop(0);
  $('body,html').animate({
    scrollTop: 0
  },500)
})
// 购物车图标效果
let flag = false;
$(".icon-suo").click(function(){
  if(flag==false){
    $(".gwc").css("display","block");
    flag=true;
  }else{
    $(".gwc").css("display","none");
    flag=false;
  }
})
$(".gwcBut").mouseenter(function(){
  $(this).css("background","black");
  $(this).css("color","white");
}).mouseleave(function(){
  $(this).css("background","none");
  $(this).css("color","black");
})
//nav效果
let OLinav = $(".nav").children(); 
for(let i=0;i<OLinav.length;i++){
  OLinav.eq(i).mouseover(function(){
    $(this).css("border-bottom","2px solid black");
  })
  OLinav.eq(i).mouseout(function(){
    $(this).css("border-bottom","none");
  })
}
//nav下拉框效果
//男士
OLinav.eq(0).mouseover(function(){
  $(".manBoX").stop().fadeIn("800");
})
OLinav.eq(0).mouseout(function(){
  $(".manBoX").stop().fadeOut("800");
})
$(".manBoX").mouseover(function(){
  $(".manBoX").stop().fadeIn("800");
})
$(".manBoX").mouseout(function(){
  $(".manBoX").stop().fadeOut("800");
})
//女士
OLinav.eq(1).mouseover(function(){
  $(".womanBox").stop().fadeIn("800");
})
OLinav.eq(1).mouseout(function(){
  $(".womanBox").stop().fadeOut("800");
})
$(".womanBox").mouseover(function(){
  $(".womanBox").stop().fadeIn("800");
})
$(".womanBox").mouseout(function(){
  $(".womanBox").stop().fadeOut("800");
})
//儿童
OLinav.eq(2).mouseover(function(){
  $(".childrenBox").stop().fadeIn("800");
})
OLinav.eq(2).mouseout(function(){
  $(".childrenBox").stop().fadeOut("800");
})
$(".childrenBox").mouseover(function(){
  $(".childrenBox").stop().fadeIn("800");
})
$(".childrenBox").mouseout(function(){
  $(".childrenBox").stop().fadeOut("800");
})
//品牌
OLinav.eq(4).mouseover(function(){
  $(".brandBox").stop().fadeIn("800");
})
OLinav.eq(4).mouseout(function(){
  $(".brandBox").stop().fadeOut("800");
})
$(".brandBox").mouseover(function(){
  $(".brandBox").stop().fadeIn("800");
})
$(".brandBox").mouseout(function(){
  $(".brandBox").stop().fadeOut("800");
})
//轮播图
let index=0;
let time = null;
time = setInterval(autoPlay,2000);
function autoPlay(){
  let outIndex = index;
  index++;
  if(index==5){
    index=0;
  }
  $(".bannerImg li").eq(outIndex).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
  $(".numIdex li").eq(outIndex).addClass("current").siblings().removeClass("current");
}
//减（向左切换）
function reduce(){
  let outIndex = index;
  index--;
  if(index==-1){
    index=4;
  }
  $(".bannerImg li").eq(outIndex).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
  $(".numIdex li").eq(outIndex).addClass("current").siblings().removeClass("current");
} 
//2、停止播放
  function stop(){
    window.clearInterval(time);
  }
  //向右切换
  $(".rightBut").click(function(){
    autoPlay();
  })
  //向右切换
  $(".leftBut").click(function(){
    reduce();
  })
  //页面加载完执行
  $(document).ready(function(){
    autoPlay();
    let user_id=localStorage.getItem("user_id")
    $.ajax({
      type: "GET",
      url: "../php/gwnum.php",
      data: "&Userid="+user_id,
      success: function(msg){
        let arr = JSON.parse(msg);
        for(let i=0;i<arr.length;i++){
          $(".num").html(arr.length);
        }
      }
    })
  });
  
  $(".bannerBox").mouseenter(function(){
    stop();
  });
  
  $(".bannerBox").mouseleave(function(){
    autoPlay();
  })
  //首页图片 鼠标移动上去改变透明度
  $(".homeimg").mouseover(function(){
    $(this).css("opacity",0.7);
  })
  $(".homeimg").mouseout(function(){
    $(this).css("opacity",1);
  })
  // -----------------------------------------------
  // 滑动轮播图
  $(".right").click(function(){
    if($(".main_main").css("left",0)){
      $(".main_main").css("left",-384)
    }
  })
  $(".left").click(function(){
    if($(".main_main").css("left",-384)){
       $(".main_main").css("left",0);
    }
  })
  // -----------------------------------
  // 小轮播图
let indexLB=0;
function main_add(Obut){
  indexLB++;
  if(indexLB==3){
    indexLB=0;
  }
  let imgOli = Obut.prev().prev().prev().children();
  let douOli = Obut.prev().prev().children();
  imgOli.eq(indexLB).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
  douOli.eq(indexLB).addClass("main_current").siblings().removeClass("main_current");
}
function main_reduce(Obut){
  let outIndexLB = indexLB;
  indexLB--;
  if(indexLB==-1){
    indexLB=2;
  }
  let imgOli = Obut.prev().prev().children();
  let douOli = Obut.prev().prev().children();
  imgOli.eq(outIndexLB).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
  douOli.eq(outIndexLB).addClass("main_current").siblings().removeClass("main_current");
}
$(".main_right").click(function(){
  main_add($(this));
})
$(".main_left").click(function(){
  main_reduce($(this));
})
  // ----------------------------------------------
  // 改变picture透明度
  $(".picture").mouseover(function(){
    $(this).css("opacity",0.7);
  })
  $(".picture").mouseout(function(){
    $(this).css("opacity",1);
  })

  //获取用户名显示到页面
    function load_data(){
      var user=localStorage.getItem("username");
      if(user==null||user==""){
        $(".LRtext").show();
        $(".userShow").hide();
      }else{
        $(".LRtext").hide();
        $(".userShow").html(user+"欢迎您");
      }
    }
 
  //显示隐藏退出登录按钮；
  let exitflag = false;
  $(".userShow").click(function (){
    if(exitflag == false){
      $(".exitLoginBox").css("display","block");
      exitflag=true;
    }else if(exitflag==true){
      $(".exitLoginBox").css("display","none");
      exitflag=false;
    }
  })
  //点击退出登录清楚localStorage
  $(".exitLogin").click(function(){
    localStorage.removeItem("username"); 
    localStorage.removeItem("userpass");
    localStorage.removeItem("user_id");
    $(".exitLoginBox").css("display","none");
    load_data();
  })
  


