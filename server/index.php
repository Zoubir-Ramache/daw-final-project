<?php

include "headers.php";
include "connectdb.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Collect the data submitted through the form
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    //!sing up
    if ($data->method == 'sing-up') {
        echo json_encode($data);
        $singupquery = "insert into customer(name , password) values ('$data->name' , '$data->password');";
        $result = mysqli_query($conn, $singupquery);

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
