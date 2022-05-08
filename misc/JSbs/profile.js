var aboutButton = document.getElementById('profile_tab_about')
var socialsButton = document.getElementById('profile_tab_socials')
var about = document.getElementById('about')
var socials = document.getElementById('socials')
var drawings = document.getElementById('drawings')
var drawingsButton = document.getElementById('drawings_button_variable')

function showDrawings() {
    if (drawings.style.display == "none") {
        drawingsButton.textContent = "hide";
        drawings.style.display = "flex";
    } else {
        drawingsButton.textContent = "show";
        drawings.style.display = "none";
    }
}

function socialsshow() {
    socials.style.display = "flex";
    about.style.display = "none";
    socialsButton.style.color = "var(--accent1)";
    aboutButton.style.color = "var(--white1)";
    socialsButton.style.borderBottom = "2px solid var(--accent1)";
    aboutButton.style.borderBottom = "2px solid transparent";
}

function aboutshow() {
    about.style.display = "block";
    socials.style.display = "none";
    socialsButton.style.color = "var(--white1)";
    aboutButton.style.color = "var(--accent1)";
    socialsButton.style.borderBottom = "2px solid transparent";
    aboutButton.style.borderBottom = "2px solid var(--accent1)";
}


window.onload = function () {
    myFooters();
    myHeaders();
    var hash = window.location.hash;
    if (hash === "#socials") {
        socialsshow();
    } else if (hash === "#about") {
        aboutshow();
    } else if (hash === "#drawings") {
        showDrawings();
    }
}