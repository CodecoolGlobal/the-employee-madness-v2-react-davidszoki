/*
Loading the .env file and creates environment variables from it
*/
require("dotenv").config();
const mongoose = require("mongoose");
const names = require("./names.json");
const levels = require("./levels.json");
const positions = require("./positions.json");
const brands = require("./brand.json");
const EmployeeModel = require("../db/employee.model");
const FavBrands = require("../db/brand.model")
const Positions = require("../db/positions.model")

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1); // exit the current program
}

//Generate random dates
function getRandomDate(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
  return new Date(randomTime)
}

function getRandomSalary(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const pick = (from) => from[Math.floor(Math.random() * (from.length - 0))];

const populateEmployees = async () => {
  await EmployeeModel.deleteMany({});
  await PaPosition();

  const employees = names.map((name) => ({
    name,
    level: pick(levels),
    // position: pick(positions),
    //brand: pick(brands), // This should be an ObjectId reference, not just a brand name
    startDate: getRandomDate("2010-01-01","2020-12-31"),
    currentSalary: getRandomSalary(20, 60),
    favouriteColor: getRandomColor(),
    desiredSalary: getRandomSalary(65, 80)
  }));

  console.log("Employees created");

  await Promise.all(
    employees.map(async (employee) => {
      try {
        const posi = await Positions.findOne({ name: employee.position });
        if (posi) {
          employee.position = posi._id; // name-t nem fogadja el valamiért
        } else {
          console.log(`Brand not found: ${employee.position}`);
        }
      } catch (error) {
        console.error(error);
      }
    })
  );

  await EmployeeModel.create(...employees);
  console.log("Employees created with favbrands");
};

const favBrandsEmployees = async () => {
  await FavBrands.deleteMany({});

  const favBrand = brands.map((brandName) => ({
    name: brandName
  }))

  await FavBrands.create(...favBrand)
}

const PaPosition = async () => {
  await Positions.deleteMany({});

  const paPosition = positions.map((posiName)=>({
    name: posiName.name,
    salary: posiName.salary
  }))
  console.log(paPosition);
  await Positions.create(...paPosition)
  console.log("position added");
}

const main = async () => {
  await mongoose.connect(mongoUrl);

  await populateEmployees();

  await mongoose.disconnect();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
