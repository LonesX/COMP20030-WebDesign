<?php

$amount = $_GET['amount'];

$connection_var = new mysqli('localhost', 'student', 'comp20030',  'php2');
if(mysqli_connect_errno()){
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$coffee = mysqli_query($connection_var, "select * from coffees");

while($row = mysqli_fetch_array($coffee))
{
    if($row['COF_NAME'] == "Columbian_Decaf") {
        $value = $row['PRICE'];
    }
}

echo("The cost of 1 Columbian Decaf is: " . $value ."<br>"
      . "Your overall total for " . $amount .
      " Columbian Decafs is:" . "<br>" . "$" . $amount * $value);


mysqli_close($connection_var);

?>