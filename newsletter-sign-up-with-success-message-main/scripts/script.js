const subscribeBtn = document.getElementById("subscribe-btn");

function validateEmail(e) {
    e.preventDefault();
    const email = document.getElementById("email-address");
    const errorMessage = document.getElementById("error-msg");

    if(email.validity.valueMissing || email.validity.typeMismatch){
        console.log(email.validity.valid);
        errorMessage.innerHTML = "Valid email required";
        email.focus();
        return false;
    }
}


subscribeBtn.addEventListener("click", validateEmail);




