navHamburger = document.getElementById("hamburger-menu");
closeIcon = document.getElementById("close-icon");

closeIcon.style.display = "none";

/**convert from hamburger to close icon */
function hamburgerToClose(){
    navHamburger.style.display = "none";
    displayCloseIcon();

    //show menu links
    toggleNavigationLinks();
    
}

/**convert from close icon to hamburger */
function closeToHamburger(){
    closeIcon.style.display = "none";
    displayHamburger();
    
    //hide menu links
    toggleNavigationLinks();
}

/**display hamburger */
function displayHamburger(){
    navHamburger.style.display = "inline-block";
}

/**display close icon*/
function displayCloseIcon(){
    closeIcon.style.display = "inline-block";
}

/**Toggle between showing and hiding navigation menu links */
function toggleNavigationLinks(){
    navMenu = document.getElementById("nav-menu");

    if(navMenu.style.display === 'block'){
        navMenu.style.display = 'none';
    }
    else{
        navMenu.style.display = 'block';
    }
}


navHamburger.addEventListener('click', hamburgerToClose);
closeIcon.addEventListener('click', closeToHamburger);