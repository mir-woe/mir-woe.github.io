function myHeaders() {

    var header = document.createElement("HEADER");
    header.setAttribute("id", "top");
    header.innerHTML = '<section id="headingsec">   <div style="width:100%; height:90px;border-bottom:solid;border-color:#7eddd3;">   <div style="width:70%;float:left;height: -webkit-fill-available;" class="penis">      <section class="pp">         <p id="logo"> M·I·R </p>      </section>   </div>   <div id="tabheadingnav"> <button onclick="showtabheadingnav()"> menu </button> </div>   <div id="tabheadingnav-popup">      <div> <button id="close-tabheadingnav-popup" onclick="hidetabheadingnav()"> close </button> </div>      <div><a href="https://mir-woe.github.io/home/home.html"> <button> home </button></a> </div>      <div>   <a  href="https://mir-woe.github.io/dev/profile.html"><button> about </button></a>  </div>      <div><a href="https://mir-woe.github.io/dev/list.html"> <button> respos </button></a> </div>      <div> <a href="https://mir-woe.github.io/lost"> can\'t find the page you\'re looking for? </a> </div> </div>            <div id="descheadingnav">         <table style="width:30%; float:right; height:60px;padding-top: 26px;">            <tr>               <th style="font-size:30px"><a href="https://mir-woe.github.io/home/home.html">home</a></th>               <th style="font-size:30px"><a href="https://mir-woe.github.io/dev/profile.html">about</a></th>               <th style="font-size:30px"><a href=https://mir-woe.github.io/dev/list.html">respos</a></th>            </tr>            <table style="width:30%; float:right; height:30px;">               <tr>                  <th style="font-size:10px; padding-bottom:13px"> <a id="lost" href="https://mir-woe.github.io/lost" style="color:#6f7276 !important;"> can\'t find the page you\'re looking for?</a></th>               </tr>            </table>         </table>      </div>   </div></section>';
    document.body.appendChild(header);
}

function showtabheadingnav(){
    document.getElementById("tabheadingnav-popup").style.display = "grid";
}

function hidetabheadingnav(){
    document.getElementById("tabheadingnav-popup").style.display = "none";
}
