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
    const names = fs.readFileSync("./populate/names.json", encoding='utf8');
    const name = names.includes(nam)
    //foreach és egyezést nézni majd boolváltozó és utána azt megváltoztatni
    // console.log(name)
    return name;
}

const test = "Superhero"
readLevel(test)

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
        const searchName = await EmployeeModel.find({name:elem})
        return res.json(searchName)

    } else{
        return console.log("Error")
    }
    
})

module.exports = search