<?php
$fname = "Lones";
$sname = "Xheladini";

$fullname = $fname . ' ' . $sname;
echo $fullname;

if(substr_compare($fname,$sname,0,1,true) == 0 ){
    echo "<p>That name is alliterative</p>";
}

if(strlen($fullname) <= 7){
    echo "<p>That's a short name</p>";
}

elseif (strlen($fullname) == 8){
    echo "<p>That's a moderately long name</p>";
}


else {
    for ($i = 0; $i < 3; $i++) {
        echo "<p>That's a long name!</p>";
    }
}


?>

<!DOCTYPE html>

<html lang="en">

<head>
    <Title>Q1</Title>
    <meta charset="UTF-8">
</head>

<body>
</body>
</html>