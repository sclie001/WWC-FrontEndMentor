const btn_req_access = document.getElementById('btn-req-access');

function validateEmail(e){
    e.preventDefault();
    console.log("IN Validate Email");
}

btn_req_access.addEventListener('click', validateEmail);