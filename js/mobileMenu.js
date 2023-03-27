var mobileMenuDisplayed = false; // used by overlay HTMLElement click event handler

function hideMobileSidebar() {
    overlay.remove();
    sidebar.style.transform = "translate(0px, -100vh)";
    menuButton.classList.remove('open');

    // remove sidebar after it reaches top
    setTimeout(function () {
        sidebar.style.display = "none";
        sidebar.style.transform = "";
        menuButton.style.transform = "";
    }, 300);

    mobileMenuDisplayed = false;
}


function toggleMenu() {
    if(menuButton.classList.contains('open')) {
        hideMobileSidebar();

    } else  {
        menuButton.classList.add('open');

        document.body.appendChild(overlay);
        
        sidebar.style.display = "flex";

        // setting translate property after some time for transition animation to work
        setTimeout(function () {
            sidebar.style.transform = "translate(0px, 100vh)";
            const translateMenuButtonX = sidebar.offsetWidth;
            menuButton.style.transform = "translate(-" + translateMenuButtonX + "px, 0px)";
        }, 5);
        
        mobileMenuDisplayed = true;
    }
}