const express = require("express");
const app = express();

app.get("/search", (req, res) => {
    console.log(req);
    res.send({path: req.query});
});

app.get("/telegram/:name/:message", (req, res) => {
    res.send({
        name: req.params.name,
        msg: req.params.message
    });
});

app.post("/post", (req, res) => {
    console.log(req);
});

app.listen(8080);
