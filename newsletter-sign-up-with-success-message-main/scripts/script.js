const subscribeBtn = document.getElementById("subscribe-btn");

function validateEmail(e) {
    e.preventDefault();
    const email = document.getElementById("email-address");
    const errorMessage = document.getElementById("error-msg");

    if(email.validity.valueMissing || email.validity.typeMismatch){
        console.log(email.validity.valid);
        errorMessage.innerHTML = setErrorMessage();
        // email.style.backgroundColor = "hsla(4, 100%, 67%, 0.2)";
        email.style.backgroundColor = setEmailBackgroundColor(email);
        email.style.border = "1px solid hsl(4, 100%, 67%)";
        return false;
    }
    else{
        //send user to success page
        return true;
    }
}

function setErrorMessage(){
    errorText = "Valid email required";
    return errorText;

}

function setEmailBackgroundColor(){
    color = "hsla(4, 100%, 67%, 0.2)";
    return color;
}

subscribeBtn.addEventListener("click", validateEmail);




