const express = require("express");
const app = express();

const wine = require("./wine.json");

app.get("/wine", (req, res) => {
    res.send(wine);
});

app.listen(8080);