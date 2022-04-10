// could literally hard code this since it is only gonna be used in one page but yes. Let's jus define this pain as "practice".

var IDs = {
    // respo : description , link, images....
    // if images provided link must be set as "null"
    GitHub_Pages: ['literally this site you\'re on currently. <br>Primarily used for hosting css for other projects', 'https://github.com/mir-woe/mir-woe.github.io'],
    Aliucord_Theme: ['My theme for Aliucord, a discord mobile client. <br>Consist of pink and purple accents with a gray background.', 'https://github.com/mir-woe/woe-mode-mobile'],
    Powercord_Theme: ['My theme for Powercord. <br>Has a gray background and alternating accents: Dark = Pink + Purple, Light = Red', 'https://github.com/mir-woe/PC-WoeMode'],
    Matsaki: ['Private discord bot in exclusive servers. That\'s the entire description for now...'],
    Demonstation: ['demonsration of if I had images on any of these :sob:', 'null', '../misc/images/misc/cocit.gif', '../misc/images/icons/pfp.png', '']
}

// stop being lazy and make .innerhtml into actual js dumb bitch ;-;

for (let [key, value] of Object.entries(IDs)) {
    var titleshit = key.replace('_', ' ')
    document.getElementById("contentsReplace").style.display = "none";

    mother = document.getElementById("PageContentEncompass");
    section = document.createElement("SECTION");
    mother.appendChild(section);
    section.setAttribute("class", "child");
    section.setAttribute("id", key);
    section.style.marginBottom = "20px"

    section.innerHTML = `
    <div class="subheadings">${titleshit}</div>
    <div Id="description"><p>${value[0]}</p></div>
    `;

    if (value.length != 2) {
        imgparent = document.createElement("DIV")
        section.appendChild(imgparent);
        imgparent.style.display = "flex";
        imgparent.style.overflow = "scroll";
        for (var i = 2; i < value.length; i++) {
            image = document.createElement("IMG")
            image.setAttribute("src", value[i]);
            image.style.margin = "10px"
            imgparent.appendChild(image)
        }
    }

    GitHubLink = document.createElement("DIV")
    section.appendChild(GitHubLink);

    if (value[1] != "null" && value[1] != undefined) {
        GitHubLink.innerHTML += `
        <a class="socials" target="blank" href="${value[1]}"><img src="../misc/images/socials/github.png" alt="${key}_Link" class="brandimg"></a>
        `
    } else {
        GitHubLink.innerHTML += `<p style="text-align:center"> This respository is private </p>`
    }
}


//  my fucked stupid ass mess :>

// // var GitHub_Pages = {
// //     link: 'https://github.com/mir-woe/mir-woe.github.io'
// // }

// // var Aliucord_Theme = {
// //     link: 'https://github.com/mir-woe/woe-mode-mobile'
// // }

// // var Powercord_Theme = {
// //     link: 'https://github.com/mir-woe/PC-WoeMode'
// // }

// for (var value in IDs) {
//     try {
//         if (IDs.hasOwnProperty(value)) {
//             section = document.createElement("SECTION")
//             document.body.appendChild(section);
//             section.setAttribute("class", "child");
//             section.setAttribute("id", value);
//             if (document.getElementById(value).innerHTML = `
//             <div class="subheadings">${value}</div><div><p>${IDs[value]}</p></div>
//             `) {
//                 document.getElementById("contentsReplace").style.display = "none";
//                 loopnumbertwo = value.toString();

//                 for (var subvalues in loopnumbertwo) {
//                     if (loopnumbertwo.hasOwnProperty(subvalues)) {
//                         try {
//                             if (document.getElementById(value).innerHTML += `<div><a class="socials" target="blank" href="${loopnumbertwo[subvalues]}"><img src="../misc/images/socials/github.png" alt="github" class="brandimg    "></a></div>`) {
//                             }

//                         } catch (err) {
//                             console.log(err)
//                         }
//                     }
//                 }
//             } else {
//                 document.getElementById("contentsReplace").style.display = "block";
//             }
//         }
//     } catch (err) {
//         console.log(err)
//     }
// }