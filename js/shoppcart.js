/*
 * @Descripttion: 购物车详情页
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-08-25 16:37:58
 * @LastEditors: 范钊
 * @LastEditTime: 2020-08-27 16:34:36
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
// ---------------------------------------


$(document).ready(function(){
  let user_id=localStorage.getItem("user_id")
  $.ajax({
    type: "GET",
    url: "../php/shoppcart.php",
    data:"&Userid="+user_id,
    success: function(msg){
      if(msg==0){
         alert("该用户购物车为空");
      }else{
        let arr = JSON.parse(msg);
        for(let i=0;i<arr.length;i++){
          $(".gwcshu").html(i);
          let GWCxinXi=
          `
          <div class="cart">
          <div class="cartImgBoX">
            <img class="cartImg" src="${arr[i].img}" alt="" srcset="">
          </div>
          <div class="shuxing">
            <p class="shoppName">${arr[i].name}</p>
            <p>镜框 镜框材质|其它</p>
            <p>镜片 <span>${arr[i].color}</span></p>
            <p class="del">删除</p>
          </div>
          <div class="NumBox">
            <p>数量</p>
            <button class="jian">-</button>
            <input class="numtext" type="text" value="${arr[i].num}">
            <button class="add">+</button>
          </div>
          <div class="danprice">
            <p>单价</p>
            <b>RMB&nbsp;<span class="shoppprice">${arr[i].Price}</span></b>
          </div>
          <div class="zongprice">
            <p>总价</p>
            <b>RMB&nbsp;<span class="zongjia">886</span></b>
          </div>
          <div class="checkBox">
            <input class="dancheck" type="checkbox" name="" id="">
          </div>
        </div>
          `
          $(".cartBox").append(GWCxinXi);
          event();
        }
      }
    }
 });
})

// ------------------------------------------
//购物车
// 数量加加
function event(){
function addgoods(but) {
  //获取商品数量
  let num=parseInt(but.prev().val());
  //获取单价
  let Dj=but.parent().next().children().eq(1).children().html();
  //获取总价
  let Zj=but.parent().next().next().children().eq(1).children();
  num++;
  but.prev().val(num);
  //调用计算小计
  Zj.html(Subtotal(num,Dj));
  }
// 数量减减
  function goodsMin(but){
     //获取商品数量
    let num=parseInt(but.next().val());
    //获取单价
    let Dj=but.parent().next().children().eq(1).children().html();
     //获取总价
    let Zj=but.parent().next().next().children().eq(1).children();
    if(num==1){
      but.next().val(1);
    }else{
      num--;
      but.next().val(num);
      Zj.html(Subtotal(num,Dj));
    }
  }
 //计算小计
  function Subtotal(num,price){
   return num * price;
  }

  //删除
  // function dele(but){
  //   //获取cart盒子
  //   let cartBox=but.parent().parent();
  //   cartBox.remove();
    
  //   $.ajax({
  //     type: "GET",
  //     url: "../php/del.php",
  //     data: "username="+$("#loginPhone").val()+"&userpass="+$("#loginPass").val(),
  //     success: function(msg){
  //       console.log(msg);
  //     }
  //   })
  // }

  // 页面刷新后,会保持小计
  for(let i = 0;i<$(".zongjia").length;i++){
    $(".zongjia").eq(i).html($(".numtext").eq(i).val() * $(".shoppprice").eq(i).html());
  }
  addTotal();


//默认全选
for(let j = 0;j<$("[type='checkbox']").length;j++){
  $("[type='checkbox']").eq(j).prop('checked',true);
}

//点击加号
  $(".add").click(function(){
    addgoods($(this));
    // 这里是找到点击的这一行后面的checkbox元素
    if($(this).parent().next().next().next().find(".dancheck").prop('checked')){
      Sum_check();
}
   
  })
//点击减号
  $(".jian").click(function(){
    goodsMin($(this));
      if($(this).parent().next().next().next().find(".dancheck").prop('checked')){
        Sum_check();
    }
  })
//  //点击删除
//   $(".del").click(function(){
//     dele($(this))
//   })
 
//点击全选事件  点击全选为负值 需要打断点进行调试 能改好
console.log($("[name='ck']"))//这个全选的按钮和总价没有获取到 我给你的全选加了name=ck
  $("[name='ck']").click(function(){
     if($("[name='ck']").prop('checked')){
      $(".Total").html(0);
      addTotal();
      for(let j = 0;j<$(".dancheck").length;j++){
        $(".dancheck").eq(j).prop('checked',true);
      }
    }else{
      reduceTotal();
        for(let j = 0;j<$(".dancheck").length;j++){
          $(".dancheck").eq(j).prop('checked',false);
        }
      }
  })

  //单击每一行后面的checkbox 如果选中那么Total会动态获取 如果没选中Total则会相减
  for(let k = 0;k<$(".dancheck").length;k++){
  $(".dancheck").eq(k).click(function(){
    if($(this).prop('checked')){
      $(".Total").html(Number($(".zongjia").eq(k).html())+Number($(".Total").html()))
    }else{
      $("[name='ck']").prop('checked',false);
      $(".Total").html($(".Total").html()-$(".zongjia").eq(k).html());
    }
  })
}

function Sum_check(){
    $(".Total").html(0);
    for(let i = 0;i<$(".dancheck").length;i++){
      if($(".dancheck").eq(i).prop('checked')){
        $(".Total").html(Number($(".zongjia").eq(i).html())+Number($(".Total").html()));
      }
    }
}
function addTotal(){
  for(let i = 0;i<$(".zongjia").length;i++){
    $(".Total").html(Number($(".zongjia").eq(i).html())+Number($(".Total").html()));
  }
}

function reduceTotal(){
  for(let i = 0;i<$(".zongjia").length;i++){
    $(".Total").html($(".Total").html()-$(".zongjia").eq(i).html());
  }
}
}