
var gitlink = "https://github.com/mir-woe"
var tglink = "https://t.me/LeMiri"
var spotlink = "https://open.spotify.com/user/jcjbe02uxml6wion3hjg6ss3p"
var ytlink = "https://www.youtube.com/channel/UCb-ILQ2PHkvyM9xxzNv7Q-Q/featured"
var ttvlink = "https://www.twitch.tv/woe_ikhlas"


var list = {
    ownername : "woe",
    webversion : "v3.2.1",
    gitname : "@mir-woe",
    ttvname : "@woe_ikhlas",
    ytname : "@ιкнļαѕ",
    spotname : "@MīR",
    discname : "@woe#1863",
    tgname : "@LeMiri"
};

for (var value in list) {
    try{
        if (list.hasOwnProperty(value)) {
            document.getElementById(value).textContent = list[value];
        }
    } catch (err){
        console.log(err)
    }
}
