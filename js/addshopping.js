/*
 * @Descripttion: 添加购物车详情页
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-08-25 16:37:58
 * @LastEditors: 范钊
 * @LastEditTime: 2020-08-27 20:35:39
 */
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
// --------------------------------------------
//放大镜
$("#small").mouseenter(function(){
  $("#mask,#big").show();
}).mouseleave(function(){
  $("#mask,#big").hide();
}).mousemove(function(e){
  let l = e.pageX - $(this).offset().left - $("#mask").width()*0.5;
  let t = e.pageY - $(this).offset().top - $("#mask").height()*0.5;
  if(l <= 0){
      l=0;
  }
  if(l >= $(this).width()-$("#mask").width()){
      l=$(this).width()-$("#mask").width();
  }
  if(t <= 0){
      t=0;
  }
  if(t >= $(this).height()-$("#mask").height()){
      t=$(this).height()-$("#mask").height();
  }

  $("#mask").css({
      left:l,
      top:t
  })
  
  let n = $("#big img").width()/$(this).width()
  $("#big img").css({
      left:-n*l,
      top:-n*t
  })
})
// --------------------------------
//点击添加边框
$(".flImg li").click(function (){
  $(this).addClass("smallYJ").siblings().removeClass("smallYJ");
  $(".small_img").attr("src",$(this).children().attr('src'));
  $(".big_img").attr("src",$(this).children().attr('src'));
})
//点击换对应的文字
$(".flImg li").eq(0).click(function (){
  $(".bl").html("BL3019 C10");
  $(".jcolor").html("蓝灰色全色");
  $(".price").html(868);
})
$(".flImg li").eq(1).click(function (){
  $(".bl").html("BL3019 C12");
  $(".jcolor").html("蓝灰色");
  $(".price").html(855);
})
$(".flImg li").eq(2).click(function (){
  $(".bl").html("BL3019 D11");
  $(".jcolor").html("暗黑色");
  $(".price").html(878);
})
$(".flImg li").eq(3).click(function (){
  $(".bl").html("BL3019 D20");
  $(".jcolor").html("浅蓝色");
  $(".price").html(850);
})
//切换上下拉箭头并显示隐藏
$(".icon-xiala2").click(function () {
  $(this).next().css("display","block");
  $(this).css("display","none");
  $(this).parent().next().css("display","block");
})
$(".icon-toTop").click(function () {
  $(this).prev().css("display","block");
  $(this).css("display","none");
  $(this).parent().next().css("display","none");
})
// ------------------------------------------
//点击获取相应的图片下标
let imgSrc="";
for(let i = 0;i<$(".flImg li").length;i++){
  $(".flImg li").find("img").eq(i).click(function(){
    imgSrc=$(this).attr("src");
  })
}

$(".addGwc").click(imgSrc,function(){
  console.log(imgSrc);
  if(imgSrc==""){
    alert("请选择商品属性")
  }else{
    let user_id=localStorage.getItem("user_id")
    $.ajax({
      type: "GET",
      url: "../php/addshopping.php",
      data: "shoppname="+$(".bl").html()+"&shoppcolor="+$(".jcolor").html()
      +"&shoppsrc="+imgSrc+"&shoppprice="+$(".price").html()+"&num=1"+"&Userid="+user_id,
      success: function(msg){
        if(msg==1){
          alert("添加成功");
          window.location.href ="shoppcart.html";
        }else{
          alert("添加失败");
        }
      }
   });
  }
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
