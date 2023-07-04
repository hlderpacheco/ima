



<?php
  
  include '../config.php';
  header("Access-Control-Allow-Origin: *");
  $sel = mysqli_query($con,"select trainee_name,number_of_rounds_used from activescenes");
  $data = array();
  while ($row = mysqli_fetch_array($sel)) {
   $data[] = array
   (
        "trainee_name"=>$row['trainee_name'],
        "number_of_rounds_used"=>$row['number_of_rounds_used']
    );
  }
  echo json_encode($data);

?>