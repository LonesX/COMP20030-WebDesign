<?php
$fullname = $_GET['fullname'];
$email = $_GET['email'];
$subject = $_GET['subject'];
$message = $_GET['message'];


$file = fopen("../InterfaceFiles/queries.txt" , "a");

//writing all the form info to the file
fwrite($file, $fullname . "\n" . $email . "\n" . $subject . "\n" . $message . "\n" . "\n");

fclose($file);

header("Location: ../contact.html");
?>