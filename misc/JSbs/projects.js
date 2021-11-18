var IDs = {
    website : 'https://github.com/mir-woe/mir-woe.github.io',
    aliucord : 'https://github.com/mir-woe/woe-mode-mobile',
    powercord : 'https://github.com/mir-woe/PC-WoeMode'
}

for (var value in IDs) {
    try{
        // document.getElementById("contentsReplace").innerHTML = `<section class="child"> <div class="subheadings"> <p>${value}</p> </div> <div><p>${IDs[value]}</p></div></section>`;
        if (IDs.hasOwnProperty(value)) {   
            
            section = document.createElement("SECTION")
            document.body.appendChild(section);
            section.setAttribute("class", "child");
            section.setAttribute("id", value);
        
            if (document.getElementById(value).innerHTML = `<div class="subheadings"> <p>${value}</p> </div> <div><p><a href="${IDs[value]}">github</a></p></div>`) {

                document.getElementById("contentsReplace").style.display = "none";
                document.getElementById("value").style.textAlign = "centre";

            } else {
                document.getElementById("contentsReplace").style.display = "block";
            }
        }
    } catch (err){
        console.log(err)
    }
}




