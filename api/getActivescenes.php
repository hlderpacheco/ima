



<?php
  
  include 'config.php';
  header("Access-Control-Allow-Origin: *");
  $sel = mysqli_query($con,"select * from activescenes");
  $data = array();
  while ($row = mysqli_fetch_array($sel)) {
   $data[] = array
   (
        "trainee_id"=>$row['trainee_id'],
        "trainee_name"=>$row['trainee_name'],
        "exercise_name"=>$row['exercise_name'],
        "instructor"=>$row['instructor'],
        "date"=>$row['date'],
        "number_of_civilians_hit"=>$row['number_of_civilians_hit'],
        "number_of_enemy_hit"=>$row['number_of_enemy_hit'],
        "precision_percentage"=>$row['precision_percentage'],
        "number_of_rounds_used"=>$row['number_of_rounds_used']
    );
  }
  echo json_encode($data);

?>