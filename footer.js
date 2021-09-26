function myFooters() {

    var currentYear = new Date(new Date().getFullYear());
    var y = Math.floor(currentYear);

    var footer = document.createElement("FOOTER");
    footer.setAttribute("id", "bottom");
    footer.innerHTML = '<button style="display: inline-block;" id="expand-btn" onclick="myFootersExpand()">menu</button> <div style="display: none; border-bottom: solid #2d2e30 !important" id="shrink-btn"> <button onclick="myFootersShrink()">&darr;</button> <button> ididd </button> </div>    <div id="noshow"><p id="leftist">&#169; 2020 - <span id="cpyear">n</span> ikhlas / All rights reserved.</p> <p><a id="rightist" target=blank href="https://github.com/mir-miri/mir-miri.github.io">source code</a></p></div>';
    document.body.appendChild(footer);

    document.getElementById("cpyear").textContent = y;
}

function myFootersExpand(){
    document.getElementById("expand-btn").style.display = "none";
    document.getElementById("shrink-btn").style.display = "grid";
    document.getElementById("noshow").style.display = "block";
}

function myFootersShrink(){
    document.getElementById("shrink-btn").style.display = "none";
    document.getElementById("expand-btn").style.display = "inline-block";
    document.getElementById("noshow").style.display = "none";

}

