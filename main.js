let express = require('express');

let app = express();

app.listen(8080, process.env.IP, function() {
    console.log("SERVER IS RUNNING...");
});

app.get("/", function(req, res) {
    res.render("index.ejs");
});

app.get("/web", function (req, res) {
    res.render("web.ejs")
});

function navBurger() {
    let x = document.getElementById("topnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }

}