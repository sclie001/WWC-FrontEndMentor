const subscribeBtn = document.getElementById("subscribe-btn");

/**
 * Validate user input for email input element
 * @param {*} e 
 * @returns True: user entered valid email
 *          False: user entered invalid email
 */
function validateEmail(e) {
    e.preventDefault();
    const email = document.getElementById("email-address");
    const errorMessage = document.getElementById("error-msg");

    if(email.validity.valueMissing || email.validity.typeMismatch){
        console.log(email.validity.valid);
        errorMessage.innerHTML = setErrorMessage();
        // email.style.backgroundColor = "hsla(4, 100%, 67%, 0.2)";
        email.style.backgroundColor = setEmailBackgroundColor(email);
        email.style.border = setEmailBorder();
        return false;
    }
    else{
        //send user to success page
        location.replace("./success.html");
        return true;
    }
}

/**
 * Set error message when email element has invalid input
 * @returns errorText
 */
function setErrorMessage(){
    errorText = "Valid email required";
    return errorText;

}

/**
 * Set email input element's background color
 * @returns color
 */
function setEmailBackgroundColor(){
    color = "hsla(4, 100%, 67%, 0.2)";
    return color;
}

/**Set email input element's border styles
 * @returns border
 */
function setEmailBorder(){
    border = "1px solid hsl(4, 100%, 67%)";
    return border;
}

subscribeBtn.addEventListener("click", validateEmail);




