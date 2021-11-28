<?php
$servername = "sxa8728.uta.cloud";
$username = "sxa8728_wp2";
$password = "Srajan@12345";
$db = "sxa8728_wp2";

// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>