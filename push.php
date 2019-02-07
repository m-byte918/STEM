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

$sql = "INSERT INTO `gas_sensors` (`residence_id`, `gas_level`, `node_active`, `time_updated`) VALUES ('".$_GET['residence_id']."', '".$_GET['gas_level']."', '1', CURRENT_TIMESTAMP)";
mysqli_query($conn, $sql);

mysqli_close($conn);

$file = fopen("dangerThreshold.txt", "r") or die("Unable to open file!");
// Output one line until end-of-file
while(!feof($file)) {
  echo fgets($file);
}
fclose($file);
?>