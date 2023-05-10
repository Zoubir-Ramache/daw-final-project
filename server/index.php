<?php

include "headers.php";
include "connectdb.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Collect the data submitted through the form
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    //!sing up
    if ($data->method == 'sing-up') {
        if (!preg_match("/^[a-zA-Z]{2,}$/", $data->name)) {
            echo json_encode(" Invalid name: must contain only letters and be at least 2 characters long");
          }else if (!preg_match("/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/", $data->password)) {
            echo json_encode(" Invalid password: must be at least 8 characters long and contain at least one letter and one number");
          }else{

              
              $singupquery = "insert into customer(name , password) values ('$data->name' , '$data->password');";
              $result = mysqli_query($conn, $singupquery);
              echo json_encode( "good");
            }
        //! login
    } else if ($data->method == 'login') {
        $loginquery = " select id from customer where name='$data->name' and password ='$data->password' ;";
        $result = mysqli_query($conn, $loginquery);
        if (mysqli_num_rows($result) >0) {
            $data = array();
            $row= mysqli_fetch_assoc($result);
            array_push($data, $row);
            echo json_encode($data);
        } else {
            echo json_encode("failed");
        }
    }
}



// //? menu and ordering 
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
$myquery = "select * from food ";
$result=mysqli_query($conn , $myquery);
if (mysqli_num_rows($result)>0) {
    $data=array();
    while($row =mysqli_fetch_assoc($result)){
        array_push($data , $row);
    }
    echo json_encode( $data);
    
}else{
    echo "failed ";
}
}
