const express = require("express");
const app = express();

let studController = require("./controllers/StudentRestController");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/students", studController);

app.listen(PORT, () => {
    console.log("server running on:", PORT, "\nWith pid:",process.pid);
});
