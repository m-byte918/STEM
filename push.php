<?php
$servername = "localhost";
$username = "u212332607_gay";
$password = "mynamejeff123";
$dbname = "u212332607_stem";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO `gas_sensors` (`residence_id`, `gas_level`, `node_active`, `time_updated`) VALUES ('".$_GET['residence_id']."', '".$_GET['gas_level']."', '1', CURRENT_TIMESTAMP)";
mysqli_query($conn, $sql);

mysqli_close($conn);
?>