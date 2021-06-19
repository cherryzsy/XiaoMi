<?php
    
  
    include('./library/conn.php');
header('content-type:text/html;charset=utf8');
$link = mysqli_connect('localhost','root','root','project1');
    $phone = $_REQUEST['phone'];
    $password = $_REQUEST['password'];

    // $select = "select * from user where phone='$phone' and password='$password'";

    // $res =$mysqli->query($select);

    // $mysqli->close();


    // if($result->num_rows>0){
    //     // echo '<script>alert("登陆成功");</script>';
    //     // echo '<script>location.href="./index.html";</script>';
    //     echo 'success';
    // }else{
    //     echo 'false';
    //     // echo '<script>alert("用户名或密码错误");</script>';
    //     // echo '<script>location.href="../eg03.login.html";</script>';
    // }

// $res = mysqli_query($link,"select * from user where username='$username'");
 $res = mysqli_query($link,"select * from user where phone='$phone'");
//  print_r($res);
//  die;
$row = mysqli_fetch_assoc($res);
if($row){
    if($row['password']===$password){
        $arr = [
            "meta"=>[
                "status"=>0,
                "msg"=>"登陆成功"
            ]
        ];
    }else{
        $arr = [
            "meta"=>[
                "status"=>1,
                "msg"=>"用户名或密码错误"
            ]
        ];
    }
}else{
    $arr = [
        "meta"=>[
            "status"=>2,
            "msg"=>"用户名不存在"
        ]
    ];
}
echo json_encode($arr);

?>
