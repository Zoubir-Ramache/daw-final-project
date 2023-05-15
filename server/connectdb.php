<?php


//don`t forget to change this 
$servername = "localhost";
$username = "zoubir";
$password = "zoubir3";
$dbname = "guest_db";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
