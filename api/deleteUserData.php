


<?php

    include 'config.php';

    $email = trim($_POST['email']);
    echo" trimed value: $email";

   if ( $email ) {

    $sql = "delete from `users` where email='".$_POST['email']."'";
    echo $sql;
    $deleteUserData = mysqli_query( $con, $sql);
    if( !$deleteUserData ){
        echo ( "A Fatal Error Occured" );
    }else {
        echo ( "Success" );
    } 

   } 

?>