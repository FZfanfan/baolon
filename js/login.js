/*
 * @Descripttion: 登录注册js
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-08-20 16:25:27
 * @LastEditors: 范钊
 * @LastEditTime: 2020-08-27 10:37:33
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
//注册按钮
$(".regBut").mouseenter(function(){
  $(this).css("background","black");
  $(this).css("color","white");
}).mouseleave(function(){
  $(this).css("background","none");
  $(this).css("color","black");
})

//注册弹出框
let regflag = false;
$(".regBut").click(function(){
  if(regflag == false){
    $(".tanBody").css({display: "block", height: $(document).height() });
    regflag=true;
  }else{
    $(".tanBody").css("display","none");
    regflag=false;
  }
})
$(".cuo").click(function(){
  $(".tanBody").css("display","none");
  regflag=false;
})
//================================
//注册    点击按钮发送ajax
  
  let xyflag = false;
  $("#regCheck").click(function(){//解决用户协议复选框选中与否问题
    if(xyflag==false){
      xyflag=true;
    }else{
      xyflag = false;
    }
  })

  let JZflag = false;
  $(".checkInput").click(function(){//解决记住密码复选框选中与否问题
    if(JZflag==false){
      JZflag=true;
    }else{
      JZflag = false;
    }
    console.log(JZflag)
  })
$(".regButt").click(function(){
  if($(".phone").val().length==0||$(".newpass").val().length==0||$(".qpass").val().length==0){
    alert("手机号、密码、输入密码框不能为空");
    return;
  }
  if(xyflag==false){
    alert("请勾选用户注册协议");
    return;
  }
  
  let username = /^1(3|5|7|8|9)\d{9}$/;
  if(!username.test($(".phone").val())){
    alert("请输入正确的手机号");
    return;
  }
  let password = /^.{6,18}$/
  if(!password.test($(".newpass").val())){
    alert("密码只能由6~8位字符组成");
    return;
  }
  if($(".newpass").val()!=$(".qpass").val()){
    alert("两次密码输入不一样,请重新输入");
    return;
  }
  $.ajax({
    type: "POST",
    url: "../php/register.php",
    data: "username="+$(".phone").val()+"&userpass="+$(".newpass").val(),
    success: function(msg){
      if(msg==-1){
        alert("该手机号码已经注册，请登录！");
        return;
      }else if(msg==0){
        alert("注册失败，请重新注册");
      }else{
        alert("注册成功,请登录");
        window.location.href="login.html";
      }
    }
 });
})
//登录  发ajax
$(".loginBut").click(function(){
  if($("#loginPhone").val().length==0||$("#loginPass").val().length==0){
    alert("手机号、密码不能为空");
    return;
  }
  let username = /^1(3|5|7|8|9)\d{9}$/;
  if(!username.test($("#loginPhone").val())){
    alert("请输入正确的手机号");
    return;
  }
  let password = /^.{6,18}$/
  if(!password.test($("#loginPass").val())){
    alert("密码只能由6~8位字符组成");
    return;
  }

  //记住密码

 
    $.ajax({
      type: "POST",
      url: "../php/login.php",
      data: "username="+$("#loginPhone").val()+"&userpass="+$("#loginPass").val(),
      success: function(msg){
        if(msg==0){
          alert("用户名和密码不存在，请注册");
        }else{
          if(JZflag==false){
              localStorage.setItem("username",$('#loginPhone').val());
              localStorage.setItem("userpass","");
            }else if(JZflag==true){
              localStorage.setItem("username",$('#loginPhone').val());
              localStorage.setItem("userpass",$('#loginPass').val());
            }
          let arr = JSON.parse(msg);
          localStorage.setItem("user_id",arr[0].Id)  
          window.location.href="index.html"; 
        }
      }
  }); 
})


$(document).ready(function(){
  $("#loginPhone").val(localStorage["username"]);
  if(localStorage["userpass"]!=undefined){
    $("#loginPass").val(localStorage["userpass"]);
  }
});
