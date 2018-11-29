<?php
$servername = "localhost";
$username = "u212332607_tchs";
$password = "pickering";
$dbname = "u212332607_stem";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "DELETE FROM `gas_sensors`";
mysqli_query($conn, $sql);
mysqli_close($conn);
echo "Table cleared!"
?>