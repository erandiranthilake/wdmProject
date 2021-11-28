<?php include 'db.php';?>
<?
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
header('Content-type: application/json');

$obj = json_decode(file_get_contents('php://input')); 

$orderid = $obj->order;
$eid = $obj->e_id;
$payment = $obj->payment;
$amount = $obj->amount;

$sql = "INSERT INTO checkout values ('$orderid', '$eid', '$amount', '$payment', 'successfull')";
$sql2 = "UPDATE orders SET o_status = 'complete' WHERE O_ID = '$orderid'";
$sql3 = "UPDATE equipment e INNER JOIN eq_tracking e1 ON e.Eq_ID = e1.Eq_ID SET e.e_availability = 'available' WHERE e1.O_ID = '$orderid'";
echo $sql3;
$sql4 = "DELETE FROM eq_tracking WHERE O_ID = '$orderid'";

$result1 = mysqli_query($conn, $sql);
$result2 = mysqli_query($conn, $sql2);
$result3 = mysqli_query($conn, $sql3);
$result4 = mysqli_query($conn, $sql4);

try { 
    if ($result1 && $result2 && $result3 && $result4) {
       // output data of each row
       echo json_encode(true);
    }
  }
  //catch exception
  catch(Exception $e) {
    throw new Exception('There is an error with this rating.');
}
?>