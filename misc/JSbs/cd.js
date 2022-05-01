function ccc() {
    // get the local time of page viewer
    var localTime = new Date();

    // event day
    var currentYear = localTime.getFullYear();
    var eventDate = new Date(currentYear, 10, 4);

    // page viewers local time offset with UTC
    var localTimeOffset = localTime.getTimezoneOffset();
    var diff = ((eventDate - localTime) / 1000 / 60) - localTimeOffset;

    if (diff < 0) {
        // if event has already passed in this year
        var currentYear = localTime.getFullYear + 1;
        eventDate = new Date(currentYear, 10, 4);
        diff = ((eventDate - localTime) / 1000 / 60) - localTimeOffset;
    } else {
        diff = diff;
    }
    
    var currentAge = currentYear - 2004 - 1;
    var newAge = currentYear - 2004;

    var d = Math.floor(diff / (24 * 60));
    var h = Math.floor(diff / 60) % 24;
    var m = Math.floor(diff) % 60;
    var s = Math.floor(diff * 60) % 60;

    var IDs = {
        dayss : d,
        hourss : h,
        minutess : m,
        secondss : s,
        age : currentAge,
        newage : newAge,
        dob : "november 4th 2004", 
        dob2 : "nov 4th 2004", 
        dob3 : "2004-11-04",
    };

    for (var value in IDs) {
        try{
            document.getElementById(value).textContent = IDs[value];
        } catch (err){
            console.log(err)
        }
    }
    
    var percentageCompletedUntilBirthday = (diff / (365.25 * 24 * 60)) * 100;
    var completion = document.getElementById("percentRemaining")
    completion.setAttribute("value", percentageCompletedUntilBirthday);

    setTimeout(ccc, 1000);
}
ccc();

function showagebutton(){
    document.getElementById("birthday").style.display = "inline-grid";
}

function hideagebutton(){
    document.getElementById("birthday").style.display = "none";
}


var fullscreenElem = document.getElementById("fullscreenCountdown");

// make a function that requests full screen on button press called fullscreen
function fullscreen() {
    if (fullscreenElem.requestFullscreen) {
        fullscreenElem.requestFullscreen();
    } else if (fullscreenElem.mozRequestFullScreen) {
        fullscreenElem.mozRequestFullScreen();
    } else if (fullscreenElem.webkitRequestFullscreen) {
        fullscreenElem.webkitRequestFullscreen();
    } else if (fullscreenElem.msRequestFullscreen) {
        fullscreenElem.msRequestFullscreen();
    }
}

// make an event listener for when someone exits full screen
document.addEventListener("fullscreenchange", function() {
    if (document.fullscreenElement) {
        fullscreenElem.classList.add("fullpageCountdown");
        document.getElementById("fullscreenCountdownInner").classList.add("fullpageCountdownInner")
    } else {
        fullscreenElem.classList.remove("fullpageCountdown");
        document.getElementById("fullscreenCountdownInner").classList.remove("fullpageCountdownInner")
    }
});