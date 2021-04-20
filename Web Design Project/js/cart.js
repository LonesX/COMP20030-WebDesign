function addCart(id) {
    console.log("Adding id:" + id);
    // 1. Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // 2. GET the JSON file (must be specified)
    xhr.open('GET', "./InterfaceFiles/prices.json");
    // 3. Send the request over the network
    xhr.send();
    // 4. This will be called after the response is received
    xhr.onload = function () {
        if (xhr.status != 200) { // analyze HTTP status of the response
            alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found

        } else { // show the result
            let parsedObj = JSON.parse(xhr.responseText);
            console.log(parsedObj);
            // This function is defined below and deals with the JSON data parsed from the file.
            put_your_code_in_this_function(parsedObj, id);
        }
    };
}
function put_your_code_in_this_function(parsedObj, id) {
            // parsedObj.name-within-JSON-for-values-you-want-to-access
    console.log(parsedObj);

    if(id >= 1 && id <= 5 ){
        var j = "pizza";
    }
    else if(id >= 6 && id <= 10){
        var j = "sides";
    }
    else if(id >= 11 && id <= 14){
        var j = "drinks";
    }

    var i;
    var object = parsedObj[j];
    for(i = 0; i < object.length;i++ ) {
        var x = object[i];
        console.log("test");


        let tableRef = document.getElementById("cartTable");

        // Insert a row at the end of the table
        let newRow = tableRef.insertRow(-1);

        // Insert a cell in the row at index 0
        let newCell = newRow.insertCell(0);
        let newCell2 = newRow.insertCell(1);
        let newCell3 = newRow.insertCell(2);



        // Append a text node to the cell
        let newText = document.createElement("INPUT");
        newText.setAttribute("type", "hidden");
        newText.setAttribute("name", "item[]");
        newText.setAttribute('value', x[id]['name'])
        newCell.appendChild(newText);
        newText = document.createTextNode(x[id]['name']);
        newCell.appendChild(newText);

        // Append a text node to the cell
        let newText2 = document.createElement("INPUT");
        newText2.setAttribute("type", "hidden");
        newText2.setAttribute("name", "price[]");
        newText2.setAttribute("value", x[id]['price'])
        newCell2.appendChild(newText2);
        newText2 = document.createTextNode(x[id]['price']);
        newCell2.appendChild(newText2);

        // Append a text node to the cell
        let newText3 = document.createElement("BUTTON");
        newText3.innerHTML = "X";
        newText3.id = 'delete';
        newText3.onclick = function(){
        deleteRow(this);
        }
        newCell3.appendChild(newText3);

        //this function updates the total overall
        updateTotal();
        console.log(x[id]['name']);
        console.log(x[id]['price']);
        alert("Added " + x[id]['name'] );

    }}

//This function displays the checkoutTable
function reveal(x) {
    console.log("calling reveal()\n");
    let tableRef = document.getElementById(x);
    let checkoutBut = document.getElementById('checkoutSubmit');
    if(tableRef.style.display == "none" || tableRef.style.display === "" && checkoutBut.style.display == "none" || checkoutBut.style.display === "" ){
        tableRef.style.display = "block";
        checkoutBut.style.display = "block";
        document.getElementById("cartIMG").classList.remove('fa', 'fa-shopping-cart');
        document.getElementById("cartIMG").classList.add('fa', 'fa-times');

    }

    else {
        tableRef.style.display = "none";
        checkoutBut.style.display = "none";
        document.getElementById("cartIMG").classList.remove('fa', 'fa-times');
        document.getElementById("cartIMG").classList.add('fa', 'fa-shopping-cart');


    }
}

//This function deletes a row when it is clicked
function deleteRow(element){
    let tableRef = document.getElementById("cartTable");
    tableRef.deleteRow(element.parentNode.parentNode.rowIndex);

    console.log("Deleted row " + element.parentNode.parentNode.rowIndex);
    updateTotal();
}

//function calculates and displays the new total.
function updateTotal() {
    let tableRef = document.getElementById("cartTable");
    let cartTotal = document.getElementById("cartTotal");
    var total = 0.00;
    cartTotal.innerHTML = "Total:&nbsp;&euro;" + total;
    for (var i = 1; i < tableRef.rows.length; i++) {
        total += parseFloat(tableRef.rows[i].cells[1].innerText);
    }

    console.log("Total : " + total);
    cartTotal.innerHTML = "Total:&nbsp;&euro;" + Math.round((total + Number.EPSILON) * 100) / 100;


}