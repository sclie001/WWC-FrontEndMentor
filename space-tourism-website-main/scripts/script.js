navHamburger = document.getElementById("hamburger-menu");
closeIcon = document.getElementById("close-icon");

closeIcon.style.display = "none";

/**convert from hamburger to close icon */
function hamburgerToClose(){
    navHamburger.style.display = "none";
    displayCloseIcon();
    
}

/**convert from close icon to hamburger */
function closeToHamburger(){
    closeIcon.style.display = "none";
    displayHamburger();
}

/**display hamburger */
function displayHamburger(){
    navHamburger.style.display = "inline-block";
}

/**display close icon*/
function displayCloseIcon(){
    closeIcon.style.display = "inline-block";
}

navHamburger.addEventListener('click', hamburgerToClose);
closeIcon.addEventListener('click', closeToHamburger);