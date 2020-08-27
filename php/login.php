<?php
/*
 * @Descripttion: 登录php
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-08-22 11:31:29
 * @LastEditors: 范钊
 * @LastEditTime: 2020-08-27 10:02:49
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
    $result = mysql_query("select * from user where username='$userName' and userpass='$userPass'",$conn);
    $arr = array();
    while($obj = mysql_fetch_assoc($result)){
      array_push($arr,$obj);
  }	
      if(mysql_num_rows($result)==1){
        echo json_encode($arr);
      }else{
        echo "0";
      }
      mysql_close($conn);
    }
?>