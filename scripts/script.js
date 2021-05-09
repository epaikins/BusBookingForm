let username = document.querySelector("#username");
let date = document.querySelector("#datePicker");
let comment = document.querySelector("#comment");
let trip = document.getElementsByName("trip");
let nop = document.querySelector(".nop");

let dateError = document.querySelector(".dateError");
let tripError = document.querySelector(".tripError");
let textError = document.querySelector(".textError");
let nopError = document.querySelector(".nopError");

let success = document.querySelector(".success");
let tripType;

function onSubmit(){
    for (var i = 0; i < trip.length; i++) {
        if (trip[i].checked) {
            tripType = trip[i].value;
            break;
        }
    }

    validate();
    if(tripType !== undefined && username.value.length > 0 && date.value !== "" && comment.value.length <=200 && (nop.value>0 && nop.value <=20)){
        success.classList.remove('hidden');
        setTimeout(()=>{success.classList.add('hidden');}, 3000)
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
    nop.value = "";

    username.placeholder = "";
    username.style.borderColor = "purple"
    dateError.classList.add("hidden");
    tripError.classList.add("hidden");
    nopError.classList.add("hidden");

}


function validate(){
    if(username.value === "" && date.value === "" && tripType === undefined && nop.value === "" ){
        username.style.borderColor = "red";
        setTimeout(()=>{username.style.borderColor = "purple";}, 3000)

        username.placeholder = "Enter username...";

        dateError.classList.remove("hidden");
        setTimeout(()=>{tripError.classList.add("hidden");}, 3000)

        tripError.classList.remove("hidden");
        setTimeout(()=>{dateError.classList.add("hidden");}, 3000)

        nopError.classList.remove("hidden");
        setTimeout(()=>{nopError.classList.add("hidden");}, 3000)
    }
    else if(username.value === ""){
        username.style.borderColor = "red";
        setTimeout(()=>{username.style.borderColor = "red";}, 3000)

        username.placeholder = "Enter username...";
        
    }
    else if(tripType === undefined){
        tripError.classList.remove("hidden");
        setTimeout(()=>{tripError.classList.add("hidden");}, 3000)
    }
    else if(date.value === ""){
        dateError.classList.remove("hidden")
        setTimeout(()=>{dateError.classList.add("hidden");}, 3000)
    }
    else if(comment.value.length>200){
        textError.classList.remove("hidden");
        setTimeout(()=>{textError.classList.add("hidden");}, 3000)
    }
    else if(nop.value === "" || nop.value<1 || nop.value > 20){
        nopError.classList.remove("hidden");
        setTimeout(()=>{nopError.classList.add("hidden");}, 3000)
    }

}