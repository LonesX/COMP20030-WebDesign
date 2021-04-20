
    //when the window loads it will run this function
    window.onload =  function() {
    //date function gives all the time and date function.
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();

    //check to see if the store is open or not ( 12:00 - 22:00 )
    if(hour >= 12 && minute >= 0 && hour <= 22 ){
        text = document.getElementById("opening");
        text.style.color = "green";
        text.textContent = "OPEN";
        console.log("Open " + d.getHours() + ":" + d.getMinutes())
    }

    //If store is closed then it will change text to closed and turn red
    else
    {
        text = document.getElementById("opening");
        text.style.color = "red";
        text.textContent = "CLOSED";
    }
}