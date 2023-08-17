const express = require("express");
const router = express.Router();
const EmployeeModel = require("../db/employee.model");

router.get("/sortFirstName", async (req, res) => {
    const sortFirstName = await EmployeeModel.find().sort({ name: 1 })
    // console.log(mongooseSort);
    res.json(sortFirstName)
})

router.get("/sortLastName", async (req, res) => {
    const sortLastName = await EmployeeModel.find()
    const sortEmployeLastName = sortLastName.sort((a,b) =>{
        const lastNameA = a.name.split(" ").pop()
        const lastNameB = b.name.split(" ").pop()
        return lastNameA.localeCompare(lastNameB)
    })
    // console.log(sortLastName);
    res.json(sortEmployeLastName)
})

module.exports = router