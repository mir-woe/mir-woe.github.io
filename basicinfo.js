var ownername = "woe"
var tgname = "@LeMiri"
var discname = "@woe#1863"
var gitname = "@mir-woe"
var spotname = "@MīR"
var ytname = "@ιкнļαѕ"
var ttvname = "@woe_ikhlas"
var webversion = "v3.2.1"
// to change links go to misc/{filename}.html

// probably a very inefficient way to do this but it works LMAO
try {
    document.getElementById("webversion").textContent = webversion
} catch (err) {
    console.log(err.message);
}

try {
    document.getElementById("ownername").textContent = ownername
} catch (err) {
    console.log(err.message);
}

try {
    document.getElementById("gitname").textContent = gitname;
} catch (err) {
    console.log(err.message);
}

try {
    document.getElementById("spotname").textContent = spotname;
} catch (err) {
    console.log(err.message);
}

try {
    document.getElementById("discname").textContent = discname;
} catch (err) {
    console.log(err.message);
}

try {
    document.getElementById("ytname").textContent = ytname;
} catch (err) {
    console.log(err.message);
}

try {
    document.getElementById("ttvname").textContent = ttvname;
} catch (err) {
    console.log(err.message);
}

try {
    document.getElementById("tgname").textContent = tgname;
} catch (err) {
    console.log(err.message);
}
