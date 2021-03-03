const express = require("express");
const app = express();
const timeRoute = require("./timeRouter")

app.use("/", timeRoute);

app.get("/about", (req, res) => {
    res.send
    res.send({version: "v1.0.0"});
});

app.get("/header", (req, res) =>{
    res.send("<header>Welcome</header>")
});

app.listen(8080);