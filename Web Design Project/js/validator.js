//this function checks if the form inputed was all correct info
function validation() {
    var x = document.forms["contactForm"]["fullname"].value;
    var y = document.forms["contactForm"]["email"].value;

    //if both fullname and email are blanks
    if (x === y ) {
        event.preventDefault()
        alert("Fullname AND Email must be filled out");
        return false;
    }

    //if fullname or email is blank
    else{
        if (x === "") {
            event.preventDefault()
            alert("Fullname must be filled out");
            return false;
        }

        if (y === ""){
            event.preventDefault()
            alert("Email must be filled out");
            return false;
        }
    }

    //if email doesnt include @ then it is invalid
    if(y.includes("@") === false)
    {
        event.preventDefault()
        alert("Your email is not valid.")
        return false;
    }



    alert("Your form has successfully been submited (InterfaceFiles/queries.txt/)");
    return true;
}

