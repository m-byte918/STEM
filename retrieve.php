<?php
$servername = "localhost";
$username = "u212332607_tchs";
$password = "pickering";
$dbname = "u212332607_stem";

$nodesWithHistoricalData = 0;
$gasLevel1 = 0;
$gasLevel2 = 0;
$gasLevel3 = 0;
$timeUpdated1 = 0;
$timeUpdated2 = 0;
$timeUpdated3 = 0;

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {die("Connection failed: " . mysqli_connect_error());}
$sql = "SELECT DISTINCT residence_id FROM gas_sensors";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $nodesWithHistoricalData++;
    }
}
mysqli_close($conn);

$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {die("Connection failed: " . mysqli_connect_error());}
$sql = "SELECT * FROM gas_sensors WHERE residence_id=1 ORDER BY time_updated DESC LIMIT 1";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $gasLevel1 = $row["gas_level"];
        $timeUpdated1 = $row["time_updated"];
    }
}
mysqli_close($conn);
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {die("Connection failed: " . mysqli_connect_error());}
$sql = "SELECT * FROM gas_sensors WHERE residence_id=2 ORDER BY time_updated DESC LIMIT 1";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $gasLevel2 = $row["gas_level"];
        $timeUpdated2 = $row["time_updated"];
    }
}
mysqli_close($conn);
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {die("Connection failed: " . mysqli_connect_error());}
$sql = "SELECT * FROM gas_sensors WHERE residence_id=3 ORDER BY time_updated DESC LIMIT 1";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $gasLevel3 = $row["gas_level"];
        $timeUpdated3 = $row["time_updated"];
    }
}
mysqli_close($conn);

echo '{"networkData":{"nodesWithHistoricalData":'.$nodesWithHistoricalData.',"nodes":{"node":[{"residenceId":"1","gasLevel":'.$gasLevel1.',"timeUpdated":"'.$timeUpdated1.'"},{"residenceId":"2","gasLevel":'.$gasLevel2.',"timeUpdated":"'.$timeUpdated2.'"},{"residenceId":"3","gasLevel":'.$gasLevel3.',"timeUpdated":"'.$timeUpdated3.'"}]}}}';
?>