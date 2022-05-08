for (const value of Object.entries(list)) {
    if (value[0] === "webversion") {
        var webv = value[1];

        var msg = `welcome to my site ${webv}`;
        var myArray = msg.split("");
        var speed = 80;
        var loopTimer;

        function frameLooper() {
            if (myArray.length > 0) {
                filling = document.getElementById("welcometext")
                filling.innerHTML += myArray.shift();
            } else {
                clearTimeout(loopTimer);
                return false;
            }
            loopTimer = setTimeout('frameLooper()', speed);
        }
        frameLooper();

    }
}



var chronological = document.getElementById("CLolder");

var i = 0;
var visibileItems = 3;
var changelog = document.getElementById("changelogs");
var changelogsInner = document.getElementById("changelogs-content")
var changelogsExpanded = document.getElementById("changelogsExpanded");
var revelation = document.getElementById("revealChangelog")
var secondEncompass = document.getElementById("secondEncompass");
// got lazy...
var x = document.getElementsByClassName("changelogUpdates");
var y = document.getElementById("revealChangelogVariable");
var z = document.getElementById("changelogOrder");

// calculates height of window and uses it to set the height of the collapsed changelogs on load 
var oneThird = (window.innerHeight / 3);
changelogsInner.style.height = oneThird + "px";

// function that checks to see if the height of the webpage changes
window.onresize = function () {
    // if changelogExpanded has the class centershi 
    if (changelogsExpanded.classList.contains("centershi")) {
        var oneThird = (window.innerHeight / 3);
        changelogsInner.style.height = oneThird + "px";
    }
}

var rightist = document.getElementById("rightist");
var rightistHeight = rightist.offsetHeight;
secondEncompass.style.transform = "translateY(" + rightistHeight + "px)";


function revealChangelog() {
    if (y.innerHTML == "expand") {
        y.innerHTML = "collapse";
        z.style.display = "flex";
        changelogsExpanded.classList.remove("centershi");
        revelation.href = "#changelogsExpanded";
        secondEncompass.style.transform = "translateY(0px)";
        changelogsInner.style.height = "fit-content";
    } else {
        y.innerHTML = "expand";
        z.style.display = "none";
        changelogsExpanded.classList.add("centershi");
        secondEncompass.style.transform = "translateY(" + rightistHeight + "px)";
        revelation.href = "#changelogs";
        changelogsInner.style.height = oneThird + "px";
    }
}

// func to change order of changelog
function mom() {
    var val = (chronological.options[chronological.selectedIndex].value)
    if (val == "OldToNew") {
        changelogsInner.style.flexWrap = "wrap-reverse"
    } else {
        changelogsInner.style.flexWrap = "wrap"
    }
}


window.onload = function () {
    var hash = window.location.hash;
    if (hash === "#changelogsExpanded") {
        revealChangelog();
    }
}