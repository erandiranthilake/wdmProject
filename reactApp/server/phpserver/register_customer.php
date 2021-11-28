<?php include 'db.php';?>
<?
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
header('Content-type: application/json');

$obj = json_decode(file_get_contents('php://input'));  

$fname = $obj->fname;
$lname = $obj->lname;
$addr1 = $obj->addr1;
$addr2 = $obj->addr2;
$city = $obj->city;
$postal = $obj->postal;
$email = $obj->email;
$number = $obj->phone;
$states = $obj->state;
$mname = $obj->mname;
$password = "customer";   


$sql = "INSERT INTO customer (C_Email,F_Name,M_Init,L_Name,C_Pass,C_Phone,Street1,Street2,City, states,Zip) VALUES ('$email', '$fname', '$mname', '$lname', '$password', '$number', '$addr1', '$addr2', '$city', '$states', '$postal') ";

$result = mysqli_query($conn,$sql);

try { 
    if ($result) {
       // output data of each row
       echo json_encode(true);
    }
  }
  //catch exception
  catch(Exception $e) {
    throw new Exception('There is an error with this rating.');
}

?>