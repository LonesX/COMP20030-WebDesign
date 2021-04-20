<?php
$connection_var = new mysqli('localhost', 'student', 'comp20030',  'php2');
if(mysqli_connect_errno()){
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$coffee = mysqli_query($connection_var, "select * from coffees");
$suppliers = mysqli_query($connection_var, "select * from suppliers");

echo("<table border = 1>
      <tr>
      <th>COF_NAME</th>
      <th>SUPPLIER NAME</th>
      <th>TOTAL</th>
      </tr>
    ");



while($row = mysqli_fetch_array($coffee))
{
    echo "<tr>";
    echo "<td>" . $row['COF_NAME'] . "</td>";

    foreach ($suppliers as $supp) {

        if($supp['SUP_ID'] == $row['SUP_ID'])
        {
            echo "<td>" . $supp['SUP_NAME'] . "</td>";
            break;
        }
    }
    echo "<td>" . $row['TOTAL'] ."</td>";
    echo "</tr>";


    }

mysqli_close($connection_var);


?>