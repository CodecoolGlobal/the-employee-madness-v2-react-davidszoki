const express = require("express");
const router = express.Router();
const EmployeeModel = require("../db/employee.model");
const FavBrands = require("../db/brand.model")

//Navbar arregment for the tasks
router.get("/sortFirstName", async (req, res) => {
    const sortFirstName = await EmployeeModel.find().sort({ name: -1 })
    .populate({path:"brand", model:FavBrands})
    // console.log(mongooseSort);
    res.json(sortFirstName)
})

router.get("/sortLastName", async (req, res) => {
    const sortLastName = await EmployeeModel.find()
    .populate({path:"brand", model:FavBrands})
    const sortEmployeLastName = sortLastName.sort((a,b) =>{
        const lastNameA = a.name.split(" ").pop()
        const lastNameB = b.name.split(" ").pop()
        return lastNameA.localeCompare(lastNameB)
    })
    // console.log(sortEmployeLastName);
    res.json(sortEmployeLastName)
})

//patch body
//keresés az queri paraméter
//fetchnél router

router.get("/level", async (req, res) => {
    const level = await EmployeeModel.find().sort({level: "asc"})
    .populate({path:"brand", model:FavBrands})
    res.json(level)
})

router.get("/position", async (req, res) => {
    const level = await EmployeeModel.find().sort({position: "asc"})
    .populate({path:"brand", model:FavBrands})
    res.json(level)
})

module.exports = router