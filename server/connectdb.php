<?php


//don`t forget to change this 
$servername = "localhost";
$username = "your username ";
$password = "password2003";
$dbname = "your db name ";
 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>
