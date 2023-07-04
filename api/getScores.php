



<?php
  include 'config.php';
  header("Access-Control-Allow-Origin: *");
  //user score data from *score
  $sel = mysqli_query($con,"select * from score");
  $data = array();
  
  while ($row = mysqli_fetch_array($sel)) {
   $data[] = array
    (
        "id"=>$row['id'],
        "name"=>$row['name'],
        "exercise"=>$row['exercise'],
        "table_name"=>$row['table_name'],
        "weapon"=>$row['weapon'],
        "score"=>$row['score'],
        "comment"=>$row['comment'],
        "instructor"=>$row['instructor'],
        "time"=>$row['time'],
        "date"=>$row['date'],
        "targetResult"=>$row['targetResult'],
    );
  }
  echo json_encode($data);
?>