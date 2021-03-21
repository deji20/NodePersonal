const express = require("express");
const app = express();

app.use("/", express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome/welcome.html");
});

app.get("/pizza", (req, res) => {
    res.sendFile(__dirname + "/public/pizzaPage.html");
});

app.get("/pub", (req, res) => {
    if(req.param.mo)
    res.redirect("/whiskey")
})

app.get("/candle", (req, res) => {
    let lightsOn = true;
    if(req.query.blow){
        lightsOn = false;
    }
    res.send({lightsOn: lightsOn});
});

app.listen(8080);