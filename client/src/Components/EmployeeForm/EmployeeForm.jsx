import { useState } from "react";

const EmployeeForm = ({ onSave, disabled, employee, onCancel }) => {
  const [name, setName] = useState(employee?.name ?? "");
  const [level, setLevel] = useState(employee?.level ?? "");
  const [position, setPosition] = useState(employee?.position ?? "");
  const [yearsOfEx, setYearsOfEx] = useState(employee?.yearsOfEx ?? "");
  const [show, setShow] = useState(false)

  const handleLevelChange = (e) => {
    const selectedLevel = e.target.value;
    setLevel(selectedLevel);

    if (selectedLevel === "Junior") {
      setYearsOfEx(0);
      setShow(true);
    } else {
      setShow(false);
    }
  };



  //itt könnyű végtelen ciklusba futni és nem éri meg újrarenderelni condition rendering-el megoldani ne is mutassuk a amit

  // const [favBrand, setFavBrand] = useState(employee?.brand.name ?? "");


  //Optional task
  // const [brandOptions, setBrandOptions] = useState([])

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("/api/brands");
  //       const data = await response.json();
  //       setBrandOptions(data); // Assuming data is an array of brand objects
  //     } catch (error) {
  //       console.error("Error fetching brands:", error);
  //     }
  //   }
  //   fetchData();
  // }, []);

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
      });
    }

    return onSave({
      name,
      level,
      position,
      yearsOfEx,
      // favBrand
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
        <input
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          name="position"
          id="position"
        />
      </div>

      <div>
        {show ? (
          <div>
            {level === "Junior" && (
              <>
                Your Experience is 0
              </>
            )}
          </div>
        ) : (
          <>
            <label>Level</label>
            <select value={level} onChange={handleLevelChange}>
              <option value="">Select a level</option>
              <option value="Junior">Junior</option>
              <option value="Mid">Medior</option>
              <option value="Senior">Senior</option>
              <option value="Expert">Expert</option>
              <option value="Godlike">Godlike</option>
            </select>
            {level !== "Junior" && (
              <>
                <label>Years of Experience</label>
                <input
                  type="number"
                  value={yearsOfEx}
                  onChange={(e) => setYearsOfEx(e.target.value)}
                />
              </>
            )}
          </>
        )}
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
