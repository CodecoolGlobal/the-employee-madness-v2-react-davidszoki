import { useState, useEffect } from "react";

const EmployeeForm = ({ onSave, disabled, employee, onCancel }) => {
  const [name, setName] = useState(employee?.name ?? "");
  const [level, setLevel] = useState(employee?.level ?? "");
  const [position, setPosition] = useState(employee?.position ?? "");
  const [yearsOfEx, setYearsOfEx] = useState(employee?.yearsOfEx ?? "");
  //Own practice from PA practises
  const [startDate, setStartDate] = useState(employee?.startDate.split("T")[0] ?? ""); //A formátumnál a date-hez csak a dátum kell.
  const [currentSalary, setCurrentSalary] = useState(employee?.currentSalary ?? "");
  const [favouriteColor, setFavouriteColor] = useState(employee?.favouriteColor ?? "");
  const [desiredSalary, setDesiredSalary] = useState(employee?.desiredSalary ?? "");


  // const handleLevelChange = (e) => {
  //   const selectedLevel = e.target.value;
  //   setLevel(selectedLevel);

  //   if (selectedLevel === "Junior") {
  //     setYearsOfEx(0);
  //     setShow(true);
  //   } else {
  //     setShow(false);
  //   }
  // };



  //itt könnyű végtelen ciklusba futni és nem éri meg újrarenderelni condition rendering-el megoldani ne is mutassuk a amit

  // const [favBrand, setFavBrand] = useState(employee?.brand.name ?? "");


  //Optional task
  const [posiOption, setPosiOption] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/position");
        const data = await response.json();
        setPosiOption(data); // Assuming data is an array of brand objects
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    }
    fetchData();
  }, []);
  
  const onSubmit = (e) => {
    e.preventDefault();

    if (employee) {
      return onSave({
        ...employee,
        name,
        level,
        position,
        yearsOfEx,
        // favBrand
        startDate,
        currentSalary,
        favouriteColor,
        desiredSalary,
      });
    }

    return onSave({
      name,
      level,
      position,
      yearsOfEx,
      // favBrand
      startDate,
      currentSalary,
      favouriteColor,
      desiredSalary,
    });
  };



  return (
    <form className="EmployeeForm" onSubmit={onSubmit}>
      <div className="control">
        <label htmlFor="name">Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          id="name"
        />
      </div>

      <div className="control">
        <label htmlFor="position">Position:</label>
        <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            name="position"
            id="position"
          >
            <option value="">Select a Position</option>
            {posiOption.map((posi) => (
              <option key={posi._id} value={posi._id}>
                {posi.name}
              </option>
            ))}
          </select>
      </div>

      <div className="control">
        <label htmlFor="position">Level</label>
        <input
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          name="level"
          id="level"
        />
      </div>

      {level !== "Junior" ? (<div>
        <label htmlFor="position">Employee Experience</label>
        <input
          value={yearsOfEx}
          onChange={(e) => setYearsOfEx(e.target.value)}
        />
      </div>
      ) : (
        <div className="control">
          Your Experience is 0.
        </div>
      )}

      <div className="control">
        <label htmlFor="position">Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          name="level"
          id="level"
        />
      </div>

      <div className="control">
        <label htmlFor="position">Current Salary</label>
        <input
          type="number"
          value={currentSalary}
          onChange={(e) => setCurrentSalary(e.target.value)}
          name="level"
          id="level"
        />
      </div>

      <div className="control">
        <label htmlFor="position">Favourity Color</label>
        <input
        type="color"
          value={favouriteColor}
          onChange={(e) => setFavouriteColor(e.target.value)}
          name="level"
          id="level"
        />
      </div>

      <div className="control">
        <label htmlFor="position">Desired Salary</label>
        <input
        type="number"
          value={desiredSalary}
          onChange={(e) => setDesiredSalary(e.target.value)}
          name="level"
          id="level"
        />
      </div>

      {/* Add the Favourite Brand for the person */}
      {/* <div className="control">
          <label htmlFor="favBrand">Favorite Brand:</label>
          <select
            value={favBrand}
            onChange={(e) => setFavBrand(e.target.value)}
            name="favBrand"
            id="favBrand"
          >
            <option value="">Select a Brand</option>
            {brandOptions.map((brand) => (
              <option key={brand._id} value={brand._id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div> */}



      {/* Buttons */}
      <div className="buttons">
        <button type="submit" disabled={disabled}>
          {employee ? "Update Employee" : "Create Employee"}
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
