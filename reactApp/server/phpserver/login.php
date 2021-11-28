<?php include 'db.php';?>

<?
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
header('Content-type: application/json');

$obj = json_decode(file_get_contents('php://input')); 

$email = $obj->email;
$password = $obj->password;    

// $email = "ha@gmail.com";
// $password = "Sample2";


$sql = "SELECT * FROM customer WHERE C_Email = '$email' and C_Pass = '$password'";

$sql2 = "SELECT * FROM employees WHERE E_Email = '$email' and E_Pass = '$password'";

$result1 = mysqli_query($conn, $sql);
$result2 = mysqli_query($conn, $sql2);

   if ($result1) {
      // output data of each row
      if($row = mysqli_fetch_assoc($result1)) echo json_encode($row);
   }

   else if ($result2) {
      // output data of each row
      if($row = mysqli_fetch_assoc($result2)) echo json_encode($row);
   }
?>