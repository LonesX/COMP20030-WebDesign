<?php
foreach($_GET as $_value)
{
    echo ($_value);
    echo "<br>";

    if(strtolower($_value) == "date")
    {
        echo(date("Y-m-d"));
        echo "<br>";
    }
}
?>