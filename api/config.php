


<?php
    header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json, charset=utf-8');

    $host = "localhost";
    $user = "root";
    $password = "";
    $db = "imagistix_crm";

    $con = new mysqli( $host, $user, $password, $db );

    if ( $con->connect_error ) {
        die( "Connection Failed:". $con->connect_error );
    }

?>