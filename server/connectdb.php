<?php



$servername = "localhost";
$username = "zoubir";
$password = "password2003";
$dbname = "guest_db";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>