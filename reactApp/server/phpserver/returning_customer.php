<?php include 'db.php';?>
<?
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
header('Content-type: application/json');

$obj = json_decode(file_get_contents('php://input')); 

$c_id = $obj->c_id;
$weight = $obj->weight;
$rate = $obj->rate;
$service = $obj->service;
$type = $obj->type;
$comments = $obj->comments;
$e_id = $obj->e_id; 
$amount = $rate*$weight;

$sql = "INSERT INTO orders (E_ID, C_ID, o_weight, services, Amount, o_status, o_type, Miscellaneous) VALUES ('$e_id', '$c_id', '$weight', '$service', '$amount', 'pending', '$type', '$comments') ";

$sql2 = "UPDATE services SET rate = '$rate' WHERE name='$service'";

$result1 = mysqli_query($conn, $sql);
$result2 = mysqli_query($conn, $sql2);

try { 
    if ($result1 && $result2) {
       // output data of each row
       echo json_encode(true);
    }
  }
  //catch exception
  catch(Exception $e) {
    throw new Exception('There is an error with this rating.');
}
?>