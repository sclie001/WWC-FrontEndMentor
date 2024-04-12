const btn_req_access = document.getElementById('btn-req-access');

function validateEmail(e){
    e.preventDefault();
    console.log("IN Validate Email");

    const email = document.getElementById('email-addr');
    const error_msg = document.getElementById('error-msg');

    if(email.validity.valueMissing || email.validity.typeMismatch){
        console.log(email.validity.valid);
        error_msg.textContent = "Oops! Please, check your email";
        
        return false;
    }
    else{
        return true;
    }
}

btn_req_access.addEventListener('click', validateEmail);