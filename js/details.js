/*
 * @Descripttion:详情页js 
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-08-24 19:31:33
 * @LastEditors: 范钊
 * @LastEditTime: 2020-08-27 20:35:55
 */
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
$(".exitLoginBox").css("display","none");
load_data();
})

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
  // ------------------------
  //下拉箭头
  $(".icon-xiala2").click(function(){
    $(this).css("display", "none");
    $(".icon-toTop").css("display", "block");
    $(".fenlei").hide(500);
  })
  //上拉箭头
  $(".icon-toTop").click(function(){
    $(this).css("display", "none");
    $(".icon-xiala2").css("display", "block");
    $(".fenlei").show(500);
  })
  //风格
  $(".fengGe li").click(function(){
    $(this).addClass("fGli").siblings().removeClass("fGli");
    // $(".fGli").css("background","gray");
    $(".aaa a").eq(0).html("X"+$(".fGli").html());
    $(".main_one").hide();
    $(".main_Last").hide();
  })
  //框型
  $(".kuangXin li").click(function(){
    $(this).addClass("kXli").siblings().removeClass("kXli");
    // $(".kXli").css("background","gray");
    $(".aaa a").eq(1).html("X"+$(".kXli").html());
    $(".main_one").hide();
    $(".main_Last").hide();
  })
   //材质
   $(".caiZhi li").click(function(){
    $(this).addClass("cZli").siblings().removeClass("cZli");
    // $(".cZli").css("background","gray");
    $(".aaa a").eq(2).html("X "+$(".cZli").html());
    $(".main_one").hide();
    $(".main_Last").hide();
  })
//眼镜颜色
$(".yjColor li").click(function(){
  $(this).addClass("yJli").siblings().removeClass("yJli");
  // $(".yJli").css("background","gray");
  $(".aaa a").eq(3).html("X "+$(".yJli").html());
  $(".main_one").hide();
  $(".main_Last").hide();
})
//镜片
$(".jingPian li").click(function(){
  $(this).addClass("jPli").siblings().removeClass("jPli");
  // $(".jPli").css("background","gray");
  $(".aaa a").eq(4).html("X "+$(".jPli").html());
  $(".main_one").hide();
  $(".main_Last").hide();
})
//点击a让它消失
$(".aaa a").eq(0).click(function(){
  $(this).html("");
  $(".fengGe li").css("background","none");
})
$(".aaa a").eq(1).click(function(){
  $(this).html("");
  $(".kuangXin li").css("background","none");
})
$(".aaa a").eq(2).click(function(){
  $(this).html("");
  $(".caiZhi li").css("background","none");
})
$(".aaa a").eq(3).click(function(){
  $(this).html("");
  $(".yjColor li").css("background","none");
})
$(".aaa a").eq(4).click(function(){
  $(this).html("");
  $(".jingPian li").css("background","none");
})
//清除全部
$(".clear").click(function(){
  $(".aaa a").html("");
  $(".fengGe li").css("background","none");
  $(".kuangXin li").css("background","none");
  $(".caiZhi li").css("background","none");
  $(".yjColor li").css("background","none");
  $(".jingPian li").css("background","none");
})
$(document).ready(function(){
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
})