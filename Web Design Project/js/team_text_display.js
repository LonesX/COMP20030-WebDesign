//This function unhides each of the person's biographies
function unhide(x){
    event.preventDefault()
    if(x === "owner"){
        let owner_text = document.getElementById("owner_text")
        let head_chef_text = document.getElementById("head_chef_text")
        head_chef_text.style.display = "none";
        owner_text.style.display = "block";
    }

    else if(x === "head_chef"){
        let owner_text = document.getElementById("owner_text")
        let head_chef_text = document.getElementById("head_chef_text")
        head_chef_text.style.display = "block";
        owner_text.style.display = "none";

    }
}