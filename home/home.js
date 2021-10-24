
var myText = "Hello! Welcome to my website!";
var myArray = myText.split("");
var speed = 80;
var loopTimer;

function frameLooper() {
    if (myArray.length > 0) {
        document.getElementById("welcometext").innerHTML += myArray.shift();
    } else {
        clearTimeout(loopTimer);
        return false;
    }
    loopTimer = setTimeout('frameLooper()', speed);
}
frameLooper();