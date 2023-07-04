


<?php
    include 'config.php';

    //* Get the posted data.
    $postdata = file_get_contents("php://input");

    if( isset($postdata) && !empty($postdata) )
    {
        //* Extract the data.
        $request = json_decode($postdata);
       
        //* Sanitize.
        $email = mysqli_real_escape_string($con, trim($request->email));
        $password = mysqli_real_escape_string($con, trim($request->password));

        echo $email;
        echo $password;

        //* set sql query 
        $sql = "select * from `users` where email='".$email."'";

        //* vaildating the sql query
        $result = mysqli_query($con, $sql);
        if(!$result)
        {
            echo 'Query failed';
        }

        $row = mysqli_fetch_assoc($result);
        $db_email = $row['email'];
        $db_password = $row['password'];
        $res = password_verify($password, $db_password);

        echo $res;

        if(!$res){
            $response = 'Access Denied';
            // $data = [ 'response' => 'Access Denied' ];
            //echo json_encode($data);
            echo $response;
        }
        else{
            $response = 'Redirecting...';
            // $data = [ 'response' => 'Redirecting...' ];
            //echo json_encode($data);
            echo $response;
        }
    }
    
?>