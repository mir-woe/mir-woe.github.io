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