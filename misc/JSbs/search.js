// copy and paste of search button + input html
// <input type="text" id="Search" placeholder="search" size="20" /> <button onclick="Find ();">&gt;</button>

function Find() {
    var str = document.getElementById("Search").value;

    if (str == "") {
        var SecondAttempt = prompt("Please enter a query");
        if (SecondAttempt != "") {
            var findQuery = window.find(SecondAttempt);
            document.getElementById(Search).innerText = SecondAttempt;
            if (!findQuery) {
                alert(`could not find: ${str}`);
            }
        } else {
            alert("nothing was input");
        } return;
    }

    else if (str != "") {
        var findQuery = window.find(str);
        if (!findQuery) {
            alert(`could not find: ${str}`);
        }
    }

    else {
        alert("an error occured");
    }
}
