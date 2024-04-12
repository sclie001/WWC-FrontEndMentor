const btn_req_access = document.getElementById('btn-req-access');

/**validate email entered by user
 * @param {*} e :prevent defualt action of event
 * @returns false: if email entered is invalid
 *          true: otherwise
 */
function validateEmail(e){
    e.preventDefault();
    console.log("IN Validate Email");

    const email = document.getElementById('email-addr');
    const error_msg = document.getElementById('error-msg');

    if(email.validity.valueMissing || email.validity.typeMismatch){
        error_msg.textContent = setErrorMessage();
        
        
        return false;
    }
    else{
        return true;
    }
}

/**set error message */
function setErrorMessage(){
    errorText = "Oops! Please, check your email";
    return errorText;
}

btn_req_access.addEventListener('click', validateEmail);