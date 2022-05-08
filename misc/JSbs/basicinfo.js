// idk why i did it like this but yeah
// ill change it to this later when i can be bothered to change any subsidary code in other files

// basicInfo = [
//     {
//         webInfo : [
//             {
//                 ownername : "woe",
//                 webversion : "v..."
//             }
//         ],
//         telegram: [
//             {
//             name: "telegram name",
//             link: "https://telegram.org"
//             }
//         ],
//         discord: [
//             {
//             name: "discord name",
//             link: "https://discord.com"
//             }
//         ],
//         etc....
//         ]
//     }
// ]

var gitlink = "https://github.com/mir-woe"
var tglink = "https://t.me/LeMiri"
var spotlink = "https://open.spotify.com/user/jcjbe02uxml6wion3hjg6ss3p"
var ytlink = "https://www.youtube.com/channel/UCb-ILQ2PHkvyM9xxzNv7Q-Q/featured"
var ttvlink = "https://www.twitch.tv/woe_ikhlas"
var cashlink = "https://cash.app/hungryikhlas"
var paylink = "https://paypal.me/hungrymiri"
var gdevlink = "https://developers.google.com/profile/u/mir_woe"
var allink = "https://anilist.co/user/LeWoe/"
var personlink = "https://www.16personalities.com/profiles/7bee0a04595ad"

var list = {
    ownername: "woe",
    webversion: "v3.7.0",
    gitname: "@mir-woe",
    gdevname: "@mir-woe",
    ttvname: "@woe_ikhlas",
    ytname: "@ιкнļαѕ",
    spotname: "@MīR",
    discname: "@woe#1863",
    tgname: "@LeMiri",
    revoltname: "@mir_woe",
    ppname: "@hungrymiri",
    caname: "£hungryikhlas",
    alname: "@LeWoe",
    personname: "woe"
};

for (var value in list) {
    try {
        document.getElementById(value).textContent = list[value];
    } catch (err) {
        console.log(err)
    }
}