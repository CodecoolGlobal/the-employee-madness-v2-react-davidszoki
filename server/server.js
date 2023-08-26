require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const EmployeeModel = require("./db/employee.model");
const EquipmentModel = require("./db/equipment.model")
const FavBrands = require("./db/brand.model")
const cors = require('cors');

const { MONGO_URL, PORT = 8080 } = process.env;

if (!MONGO_URL) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());


//------------------------------------------Rout methods---------------------------------
//Sort by task in this route
const arregment = require("./routes/arregment")
app.use("/arregement", arregment)

//Search fetch
const search = require("./routes/search");
app.use("/search", search)


//------------------------------------------Get methods---------------------------------


//--------------------------- PA -------------------------------
app.get("/years-of-experience/:id", async(req,res)=>{
  const id = req.params.id
  const modelExperince = await EmployeeModel.find({yearsOfEx: {$gt: id} })
  res.json(modelExperince)
})
//--------------------------- PA -------------------------------

//-------------------------- Own Practice-----------------------
app.get("/same", async(req,res)=>{
  const {level, position} = req.body
  // const filter = new RegExp(`^${level}.*${position}$`, "i");
  const sameFind = await EmployeeModel.find({level:level, position:position})
  res.json(sameFind)
})

//-------------------------- Own Practice-----------------------


//Starter code
//populate az átalakítja a másik modelt látja hogy nézki és a név változót a brand-ből tölti fel
app.get("/api/employees/", async (req, res) => {
  const employees = await EmployeeModel.find().sort({ created: "desc" })
  // .populate({path:"brand", model:FavBrands});
  return res.json(employees);
});

app.get("/api/brands", async(req, res) => {
  const brands = await FavBrands.find()
  return res.json(brands)
})

app.get("/api/employees/:id", async (req, res) => {
  const employee = await EmployeeModel.findById(req.params.id);
  return res.json(employee);
});

app.get("/equipment", async (req, res)=>{
  const equipment = await EquipmentModel.find()
  return res.json(equipment)
})

app.get("/equipment/:id", async (req, res)=>{
  const equipment = await EquipmentModel.findById(req.params.id)
  return res.json(equipment)
})

//------------------------------------------Post methods---------------------------------
//Post method employee
app.post("/api/employees/", async (req, res, next) => {
  const employee = req.body;

  try {
    const saved = new EmployeeModel({
      ...employee // itt kezdőértéke a saved-nek
    });

    if (saved.level === "Junior") { // itt validáljuk
      saved.yearsOfEx = 0;
    } 

    await saved.save()

    return res.json(saved);
  } catch (err) {
    return next(err);
  }
});

//Post method equipment
app.post("/api/equipment/", async (req, res, next) => {
  const equipment = req.body;

  try {
    const saved = await EquipmentModel.create(equipment);
    return res.json(saved);
  } catch (err) {
    return next(err);
  }
});

//------------------------------------------Patch methods---------------------------------
// original
// app.patch("/api/employees/:id", async (req, res, next) => {
//   try {
//     const employee = await EmployeeModel.findOneAndUpdate(
//       { _id: req.params.id },
//       { $set: { ...req.body } },
//       { new: true }
//     );
//     return res.json(employee);
//   } catch (err) {
//     return next(err);
//   }
// });

// updta the patch method for PA update
app.patch("/api/employees/:id", async (req, res, next) => {
  const id = req.params.id
  const bodySave = req.body

  //az id az itt egy adott paraméter
  // a body az a post methodból jön és mindent tartalmaz amit a bodyba tettünk
  try {
    const employee = await EmployeeModel.findOneAndUpdate(
      { _id: id},
      { $set: { ...bodySave } },
      { new: true }
    );

    if (employee.level === "Junior") {
      employee.yearsOfEx = 0
    }

    await employee.save() //itt elmentjük az aktuálisan átküldött adatot a módosításokkal

    return res.json(employee);
  } catch (err) {
    return next(err);
  }
});





//Equipment update
app.patch("/api/equipment/:id", async (req, res, next) => {
  try {
    const equipment = await EquipmentModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    );
    return res.json(equipment);
  } catch (err) {
    return next(err);
  }
});

//------------------------------------------Delete methods---------------------------------
//Delete method for employee
app.delete("/api/employees/:id", async (req, res, next) => {
  try {
    const employee = await EmployeeModel.findById(req.params.id);
    const deleted = await employee.delete();
    return res.json(deleted);
  } catch (err) {
    return next(err);
  }
});

//Delete method for equipment
app.delete("/api/equipment/:id", async (req, res, next) => {
  try {
    const equipment = await EquipmentModel.findById(req.params.id);
    const deleted = await equipment.delete();
    return res.json(deleted);
  } catch (err) {
    return next(err);
  }
});

const main = async () => {
  await mongoose.connect(MONGO_URL);

  app.listen(PORT, () => {
    console.log("App is listening on 8080");
    console.log("Try /api/employees route right now");
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
