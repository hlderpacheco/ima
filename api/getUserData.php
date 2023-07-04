



<?php
  include 'config.php';

  header("Access-Control-Allow-Origin: *");

  //* user data from *user
  $sel = mysqli_query($con,"select * from users");
  $data = array();
  
  while ($row = mysqli_fetch_array($sel)) {
   $data[] = array("name"=>$row['name'],"email"=>$row['email'],"title"=>$row['title'],"phone_no"=>$row['phone_no'],"role"=>$row['role']);
  }
  echo json_encode($data);
?>