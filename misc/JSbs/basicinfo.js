var gitlink = "https://github.com/mir-woe"
var tglink = "https://t.me/LeMiri"
var spotlink = "https://open.spotify.com/user/jcjbe02uxml6wion3hjg6ss3p"
var ytlink = "https://www.youtube.com/channel/UCb-ILQ2PHkvyM9xxzNv7Q-Q/featured"
var ttvlink = "https://www.twitch.tv/woe_ikhlas"
var cashlink = "https://cash.app/%C2%A3hungryikhlas"
var paylink = "https://paypal.me/hungrymiri"
var gdevlink = "https://developers.google.com/profile/u/mir_woe"


var list = {
    ownername: "woe",
    webversion: "v3.6.1",
    gitname: "@mir-woe",
    gdevname: "@mir-woe",
    ttvname: "@woe_ikhlas",
    ytname: "@ιкнļαѕ",
    spotname: "@MīR",
    discname: "@woe#1863",
    tgname: "@LeMiri",
    revoltname: "@mir_woe",
    ppname: "@hungrymiri",
    caname: "£hungryikhlas"
};

for (var value in list) {
    try {
        document.getElementById(value).textContent = list[value];
    } catch (err) {
        console.log(err)
    }
}