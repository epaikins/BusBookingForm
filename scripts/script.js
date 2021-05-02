let username = document.querySelector("#username");
let date = document.querySelector("#date");
let comment = document.querySelector("#comment");
let trip = document.getElementsByName("trip");
let dateError = document.querySelector(".dateError");
let tripError = document.querySelector(".tripError");
let tripType;

function onSubmit(){
    for (var i = 0; i < trip.length; i++) {
        if (trip[i].checked) {
            tripType = trip[i].value;
            break;
        }
    }

    validate();
    if(tripType !== undefined && username.value.length > 0 && date.value !== "" && comment.value.length <200){
        console.log("done");

        reset();

        return true;
    }
    
    
    return false
}

function reset(){
    for (var i = 0; i < trip.length; i++)
    trip[i].checked = false;

    username.value = "";
    comment.value = "";
    date.value = "";
    tripType = undefined;

    username.placeholder = "";
    username.style.borderColor = "purple"
    dateError.classList.add("hidden");
    tripError.classList.add("hidden");

}


function validate(){
    if(username.value === "" && date.value === "" && tripType === undefined){
        username.style.borderColor = "red";
        username.placeholder = "Enter username...";

        dateError.classList.remove("hidden");

        tripError.classList.remove("hidden");
    }
    else if(username.value === ""){
        username.style.borderColor = "red";
        username.placeholder = "Enter username...";
    }
    else if(date.value === ""){
        dateError.classList.remove("hidden");
    }
    else if(tripType === undefined){
        tripError.classList.remove("hidden");
    }

}