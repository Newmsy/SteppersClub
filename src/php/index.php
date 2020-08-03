<?php
$servername = "ec2-54-75-229-28.eu-west-1.compute.amazonaws.com";
$username = "pyqqxaasyynsox";
$password = "4376c9b8e53255ad8b2c709c7c188641ede5fcea147f2f81f561afa59339ab25";
$db = "d4p5cmj616jlis";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $db);
// Check connection
if (!$conn) {
   die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>