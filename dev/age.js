function ccc(){
    var now = new Date();
    var eventDate = new Date(new Date().getFullYear(), 10, 4);

    var currentYear = new Date(new Date().getFullYear());

    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTiime;
    
    if(remTime > 1){
        var s = Math.floor(remTime / 1000);
        var y = Math.floor(currentYear - 2004 - 1);
        }


    if(remTime < -1){
    
        var rn = new Date();
        var nexteventDate = new Date(new Date().getFullYear() + 1	, 10, 4);

        var currentTiime = rn.getTime();
        var eventTime = nexteventDate.getTime();

        var newremTime = eventTime - currentTiime;
        var s = Math.floor(newremTime / 1000);
        var y = Math.floor(currentYear - 2004);
} 		

    
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("dayss").textContent = d;
    document.getElementById("hourss").textContent = h;
    document.getElementById("minutess").textContent = m;
    document.getElementById("secondss").textContent = s;
    
    document.getElementById("age").textContent = y;

    setTimeout(ccc, 1000);
}
ccc();


function showagebutton(){
    document.getElementById("birthday").style.display = "inline-grid";
}

function hideagebutton(){
    document.getElementById("birthday").style.display = "none";
}