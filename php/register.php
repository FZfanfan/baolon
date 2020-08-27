<?php
/*
 * @Descripttion: 注册php
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-08-22 11:31:29
 * @LastEditors: 范钊
 * @LastEditTime: 2020-08-22 14:51:54
 */
  header("Content-Type: text/html;charset=utf-8");
  //接收前端数据
  $userName=$_POST["username"];
  $userPass=$_POST["userpass"];
  //连接数据库
  $conn=mysql_connect("localhost","root","root");
  if(!$conn){
    echo("连接数据库出错".mysql_error());
  }else{
    //选择库
    mysql_select_db("baolon",$conn);
    //查询用户名是否已存在
    $result = mysql_query("select * from user where username='$userName'",$conn);
    if(mysql_num_rows($result)>0){
      mysql_close($conn);//关闭数据库
      echo "-1";//用户名已存在
    }else{
      //将账号密码添加到数据库
      $result=mysql_query("insert into user(username,userpass) values ('$userName','$userPass')",$conn);
      //关闭数据库
      mysql_close($conn);
      if($result!=1){
        echo"0";//注册失败
      }else{
        echo "1";//注册成功
      }
    }
  }
?>