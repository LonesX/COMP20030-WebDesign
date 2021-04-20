<?php
//if there is actually anything in the cart
if ( isset( $_GET["item"] ) && isset( $_GET["price"] ) ){

//    wait 3 seconds
    sleep(3);
//    opens the file for append
    $file = fopen("../InterfaceFiles/orders.txt" , "a");
    $total = 0;
    $i = 0;
    $time = date("F j, Y, g:i a");
    fwrite($file, "New order made at : " . $time . "\n");
//    gets the total of each item and also writes the item name to the file
    foreach($_GET["item"] as $item) {
            fwrite($file, $item . "\n");
            $total += (float)$_GET["price"][$i];
        $i++;

    }

//Writes the total total the file
    fwrite($file, "Total Price : " . $total . "\n" );

    fclose($file);

//    uses javascrip to redirect
    echo "<script> alert('Your order has successfully been submitted!. (Now in InterfaceFiles/orders.txt)'); window.location.replace('../order.html'); </script>";


}
//if nothing in cart redirect back to order
else
{
    echo "<script> alert('Your cart is empty.'); window.location.replace('../order.html'); </script>";

}


?>