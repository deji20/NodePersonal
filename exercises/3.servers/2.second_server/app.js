const exp = require("express");
const app = exp();

app.get("/", (req, res) => {
    let json = {};
    res.send(json);
})

app.get("/me", (req, res) => {
    const myInfo = {name:"Viktor", age:22, classroom:"Node.Js 2"};
    res.send(myInfo);
})

app.listen("8080");