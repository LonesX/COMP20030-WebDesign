<?php
$connection_var = new mysqli('localhost', 'student', 'comp20030',  'php2');
if(mysqli_connect_errno()){
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$result = mysqli_query($connection_var, "select * from coffees");

while($row = mysqli_fetch_array($result))
{
    echo("Coffee Name:");
    echo($row['COF_NAME']);
    echo("<br>");
    echo("Price:");
    echo $row['PRICE'];
    echo("<br>");
    echo("Number of sales:");
    echo $row['SALES'];
    echo("<br>");
    echo("Total:");
    echo $row['TOTAL'];
    echo("<br>");
    echo("<br>");
}


mysqli_close($connection_var);

?>