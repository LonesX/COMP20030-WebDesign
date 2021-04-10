<?php
$fullname = $_GET['fullname'];
$email = $_GET['email'];
$subject = $_GET['subject'];
$message = $_GET['message'];


$file = fopen("../contactQueries/queries.txt" , "a");

fwrite($file, $fullname . "\n" . $email . "\n" . $subject . "\n" . $message . "\n" . "\n");

fclose($file);

header("Location: ../contact.html");
?>