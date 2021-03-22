const express = require("express");
const router = express.Router();
require("../models/Student");

let students = [];
let id = 0;

if(students.length){
    id = students[students.length-1].id + 1
}

router.get("/", (req, res) => {
    res.send({students:students});
});
router.get("/:id", (req, res) => {
    console.log(req.params.id);
    let match = students.find(student => student.id === req.params.id);
    res.send({students: match});
});

router.post("/", (req, res) => {
    req.body.student.id = newId();
    students.push(createStudent(req.body.student));
    res.send({students: students[students.length - 1]});
});

router.patch("/:id", (req, res) => {
    let id = Number(req.params.id);

    let studentPatch = req.body.student;

    let patchKeys = Object.keys(studentPatch);
    let studentKeys = Object.keys(students[id]);
    
    let changedValues = students.map(student => {
        if(id === student.id){
            patchKeys.forEach(key => {
                console.log(key);
                if(studentKeys.includes(key) && key != "id"){
                    student[key] = studentPatch[key];
                }
            })
        }
        return student
    });

    res.send(changedValues);
});

router.put("/:id", (req, res) => {
    req.body.student.id = parseInt(req.params.id);
    let matchIndex = students.findIndex(student => student.id === req.body.student.id);
    students[matchIndex] = createStudent(req.body.student);
    res.send({students: students[matchIndex]});
});

router.delete("/:id", (req, res) => {
    students = students.filter(student => student.id !== req.params.id);
})   


function createStudent(student){
    return {
        id:student.id,
        name:student.name, 
        age:student.age, 
        classroom:student.classroom}
}

function newId(){
    oldId = id;
    id++;
    return oldId;
}

module.exports = router;