function myHeaders() {
    var header = document.createElement("HEADER");
    header.setAttribute("id", "top");
    header.innerHTML = '<section id="headingsec"><div id="JavaScriptHeaderContent"><p id="logo"> woe. </p><div class="descheadingnav"><a class="navHome" href="https://mir-woe.github.io/home/home.html">home</a><a class="navProfile" href="https://mir-woe.github.io/home/profile.html">profile</a><a class="navProjects" href="https://mir-woe.github.io/dev/list.html">projects</a><a id="lost" href="https://mir-woe.github.io/lost"> can\'t find the page you\'re looking for?</a></div><div class="headerTabOnlyFiller tabheadingnav"></div><div id="tabheadingnavmenu" class="tabheadingnav"><button onmouseover="showtabheadingnav()"> menu </button> </div><div class="tabheadingnav" id="tabheadingnav-popup" onmouseover="showtabheadingnav()" onmouseout="hidetabheadingnav()"><a class="navHome" href="https://mir-woe.github.io/home/home.html"> <button> home </button></a><a class="navProfile" href="https://mir-woe.github.io/home/profile.html"><button> profile </button></a><a class="navProjects" href="https://mir-woe.github.io/dev/list.html"> <button> projects </button></a><a id="lost" href="https://mir-woe.github.io/lost"> can\'t find the page you\'re looking for?</a></div></div></section>';
    document.body.appendChild(header);
    document.body.style.paddingTop = ("90px");
    
}

function showtabheadingnav(){
    document.getElementById("tabheadingnav-popup").style.display = "grid";
}

function hidetabheadingnav(){
    document.getElementById("tabheadingnav-popup").style.display = "none";
}
