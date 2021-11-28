<?php include 'db.php';?>
<?
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
header('Content-type: application/json');

$obj = json_decode(file_get_contents('php://input')); 

$sql = "SELECT Eq_ID, e_availability, Eq_Type FROM equipment";

$result = mysqli_query($conn,$sql);

$rows = array();

try { 
       while($r = mysqli_fetch_assoc($result)){
         $rows[] = array('data' => $r);
       } 
  }
  //catch exception
  catch(Exception $e) {
    throw new Exception('There is an error with this rating.');
 }
 echo json_encode($rows);
?>