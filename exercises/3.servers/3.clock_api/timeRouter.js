const express = require("express");
const router = express.Router();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

router.get("/month", (req, res) => {
    const date = new Date();
    res.send({month: months[date.getMonth()]});
});

router.get("/day", (req, res) => {
    const date = new Date(Date.now());
    res.send(days[date.getDay()]);
});

router.get("/time", (req, res) => {
    const date = new Date(Date.now());
    res.send(date.getHours() + ":" + date.getMinutes())
});

module.exports = router;