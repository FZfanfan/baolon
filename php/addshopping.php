<?php
/*
 * @Descripttion: 添加购物车php
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-08-22 11:31:29
 * @LastEditors: 范钊
 * @LastEditTime: 2020-08-27 10:34:45
 */
  header("Content-Type: text/html;charset=utf-8");
  //接收前端数据
  $shoppname=$_GET["shoppname"];
  $shoppcolor=$_GET["shoppcolor"];
  $shoppsrc=$_GET["shoppsrc"];
  $shoppprice=$_GET["shoppprice"];
  $num=$_GET["num"];
  $userid=$_GET["Userid"];
  //连接数据库
  $conn=mysql_connect("localhost","root","root");
  if(!$conn){
    echo("连接数据库出错".mysql_error());
  }else{
    //选择库
    mysql_select_db("baolon",$conn);
    //添加数据
      $result=mysql_query("insert into good(name,color,img,Price,num,user_id) values ('$shoppname','$shoppcolor','$shoppsrc','$shoppprice','$num','$userid')",$conn);
      if($result!=1){
        echo"0";//添加购物车失败
      }else{
        echo "1";//添加购物车成功
      }
      mysql_close($conn);
    }
?>