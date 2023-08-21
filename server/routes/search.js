const fs = require("fs");
const express = require("express");
const EmployeeModel = require("../db/employee.model");
const search = express.Router();

// Read the files for datas check the search
function readLevel(lev) {
    const levels = fs.readFileSync("./populate/levels.json", encoding='utf8');
    const level = levels.includes(lev)
    // console.log(level)
    return level;
}
function readPosition(pos) {
    const positions = fs.readFileSync("./populate/positions.json", encoding='utf8');
    const position = positions.includes(pos)
    // console.log(position)
    return position;
}
function readName(nam) {
    const names = JSON.parse(fs.readFileSync("./populate/names.json", 'utf8'));
    const name = names.filter(name => name.includes(nam))
    return name;
}

// const test2 = "Robert"
// console.log(readName(test2))

// Searchbar fetch
search.get("/:id", async (req, res)=>{
    const elem = req.params.id

    if (readLevel(elem)) {  
        const searchLevel = await EmployeeModel.find({level:elem})
        return res.json(searchLevel)
        
    } else if(readPosition(elem)){
        const searchPosition = await EmployeeModel.find({position:elem})
        return res.json(searchPosition)

    } else if(readName(elem)){
        // Figyelni hogy mit ad vissza, mert az elem az nem szűretlen rész a függvény nélkül
        const searchName = await EmployeeModel.find({name:readName(elem)})
        return res.json(searchName)

    } else{
        return console.log("Error")
    }
    
})

module.exports = search