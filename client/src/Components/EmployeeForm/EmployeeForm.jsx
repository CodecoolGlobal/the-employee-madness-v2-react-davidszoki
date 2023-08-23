import { useState } from "react";

const EmployeeForm = ({ onSave, disabled, employee, onCancel, equipmentDatas, onEquipment }) => {
  const [show, setShow] = useState(true)
  const [name, setName] = useState(employee?.name ?? "");
  const [level, setLevel] = useState(employee?.level ?? "");
  const [position, setPosition] = useState(employee?.position ?? "");
  const [equipmentName, setEquipmentName] = useState(equipmentDatas?.equipmentName ?? "")
  const [type, setType] = useState(equipmentDatas?.type ?? "");
  const [amount, setAmount] = useState(equipmentDatas?.amount ?? "");
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

  const updateshow = () => {
    setShow(false)
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (employee) {
      return onSave({
        ...employee,
        name,
        level,
        position,
        // favBrand
      });
    }

    return onSave({
      name,
      level,
      position,
      // favBrand
    });
  };

  const equipmentOnSubmit = (e) => {
    e.preventDefault();

    if (equipmentDatas) {
      return onEquipment({
        ...equipmentDatas,
        equipmentName,
        type,
        amount,
        // favBrand
      });
    }

    return onEquipment({
      equipmentName,
      type,
      amount,
      // favBrand
    });
  };

  return (
    <>{show ? (
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
          <label htmlFor="level">Level:</label>
          <input
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            name="level"
            id="level"
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
          <button onClick={updateshow}>Add Equipment</button>
          <button type="submit" disabled={disabled}>
            {employee ? "Update Employee" : "Create Employee"}
          </button>

          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    ) : (
      <form onSubmit={equipmentOnSubmit}>
        <div className="control">
          <label htmlFor="position">Name:</label>
          <input
            value={equipmentName}
            onChange={(e) => setEquipmentName(e.target.value)}
            name="position"
            id="position"
          />
        </div>
        <div className="control">
          <label htmlFor="position">Type:</label>
          <input
            value={type}
            onChange={(e) => setType(e.target.value)}
            name="position"
            id="position"
          />
        </div>
        <div className="control">
          <label htmlFor="position">Amount:</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            name="position"
            id="position"
          />
        </div>
        <button type="submit" disabled={disabled}>
          {equipmentDatas ? "Update Equipment" : "Create Equipment"}
        </button>

        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    )}</>
  );
};

export default EmployeeForm;
