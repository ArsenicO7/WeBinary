<?php
    $id = $_GET["id"];
    $servername = "localhost";
    $username = "zinthapanya2016";
    $password = "SAZH84DJNB";

    $dbname = "zinthapanya2016";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT answer FROM L2PRACTICE WHERE ID = $id";
    $result = $conn->query($sql);
    $row = mysqli_fetch_assoc($result);
    echo $row["answer"];
?>