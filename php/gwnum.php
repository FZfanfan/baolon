<?php
/*
 * @Descripttion: 获取购物车数量php
 * @version: v1.0.0
 * @Author: 范钊
 * @Date: 2020-08-22 11:31:29
 * @LastEditors: 范钊
 * @LastEditTime: 2020-08-27 20:27:23
 */
  header("Content-Type: text/html;charset=utf-8");
  //接收前端数据
  $userid=$_GET["Userid"];
  //连接数据库
  $conn=mysql_connect("localhost","root","root");
  if(!$conn){
    echo("连接数据库出错".mysql_error());
  }else{
    //选择库
    mysql_select_db("baolon",$conn);
    //通过用id查询该用户的购物车所有商品
    $result = mysql_query("select * from good where user_id='$userid'",$conn);
      $arr = array();
      while($obj = mysql_fetch_assoc($result)){
        array_push($arr,$obj);
      }
      if(mysql_num_rows($result)>0){
        echo json_encode($arr);
      }else{
        echo "0";
      }
      mysql_close($conn);
    }
?>