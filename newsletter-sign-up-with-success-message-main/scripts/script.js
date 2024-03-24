const subscribeBtn = document.getElementById("subscribe-btn");

function validateEmail(e) {
    e.preventDefault();
    const email = document.getElementById("email-address");
    const errorMessage = document.getElementById("error-msg");

    if(email.validity.valueMissing || email.validity.typeMismatch){
        console.log(email.validity.valid);
        errorMessage.innerHTML = setErrorMessage();
        email.focus();
        return false;
    }
}

function setErrorMessage(){
    errorText = "Valid email required";
    return errorText;

}
subscribeBtn.addEventListener("click", validateEmail);




