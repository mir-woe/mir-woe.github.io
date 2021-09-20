function myHeaders() {

    var header = document.createElement("HEADER");
    header.setAttribute("id", "top");
    header.innerHTML = '<section id="headingsec">          <div style="width:100%; height:90px;border-bottom:solid;border-color:#7eddd3;">       <div style="width:70%;float:left;height: -webkit-fill-available;" class="penis">           <section class="pp"> <p id="logo"> M·I·R </p> </section>       </div>              <div id="descheadingnav">                 <table style="width:30%; float:right; height:60px;">          <tr>             <th style="font-size:30px"><a href="../home/home.html">home</a></th>             <th style="font-size:30px"><a href="../dev/profile.html">dev profile</a></th>             <th style="font-size:30px"><a href="../dev/list.html">projects</a></th>          </tr>        <table style="width:30%; float:right; height:30px;">           <tr>              <th style="font-size:10px"> <a id="lost" href="index.html"> can\'t find the page you\'re looking for?</a></th>            </tr>          </table>       </table>       </div>    </div> </section>';
    document.body.appendChild(header);
}
