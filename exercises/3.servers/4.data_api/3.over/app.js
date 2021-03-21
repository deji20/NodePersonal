const express = require("express");
const app = express();
const PORT = 8080;

let aniList = [
    {
        name: "attack on titan"
    },
    {}
]; 

app.get("/anime_names/:id", (req, res) => {
    res.send(aniList[req.params.id]);
});

app.get("/anime_names", (req, res) => {
    res.send({animes: aniList});
});

app.listen(PORT, (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("listening on port: " + PORT);
    }
})