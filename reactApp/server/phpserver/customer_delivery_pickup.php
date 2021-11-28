<?php include 'db.php';?>
<?
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
header('Content-type: application/json');

$obj = json_decode(file_get_contents('php://input')); 

$c_id = $obj->session;

$sql = "SELECT O_ID, o_status, o_type FROM orders WHERE C_ID = '$c_id' ORDER BY o_status asc, o_id desc";

$result1 = mysqli_query($conn, $sql);

try { 
    while($r = mysqli_fetch_assoc($result1)){
      $rows[] = array('data' => $r);
    } 
}
//catch exception
catch(Exception $e) {
 throw new Exception('There is an error with this rating.');
}
echo json_encode($rows);
?>