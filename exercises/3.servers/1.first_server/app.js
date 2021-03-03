const stud = require("./models/Student");
const exp = require("express");
const app = exp();


let students = [
    new Student(1, "Deji", 22, "NodeJs 2"),
    new Student(2, "Viktor", 22, "Python 2"),
    new Student(3, "Nielsen", 22, "Creative Code")
];

app.get("/students", (req, res) => {
    res.send(students);
})
app.get("/students/:id", (req, res) => {
    students.forEach(stud => {
        if (stud.id == req.params.id){
            res.send(stud);
        }
    });
})

app.listen(8080);