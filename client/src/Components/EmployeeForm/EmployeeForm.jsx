import { useState } from "react";

const EmployeeForm = ({ onSave, disabled, employee, onCancel }) => {
  const [name, setName] = useState(employee?.name ?? "");
  const [level, setLevel] = useState(employee?.level ?? "");
  const [position, setPosition] = useState(employee?.position ?? "");
  const [equipmentName, setEquipmentName] = useState(employee?.equipment.name ?? "");
  const [type, setType] = useState(employee?.equipment.type ?? "");
  const [amount, setAmount] = useState(employee?.equipment.amount ?? "");
  

  const onSubmit = (e) => {
    e.preventDefault();

    if (employee) {
      return onSave({
        ...employee,
        name,
        level,
        position,
        equipmentName,
        type,
        amount
      });
    }

    return onSave({
      name,
      level,
      position,
      equipmentName,
      type,
      amount
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


      {/* Add the equipmentName for the person */}
      <div className="control">
        <label htmlFor="equipmentName">equipmentName:</label>
        <input
          placeholder="name"
          value={equipmentName}
          onChange={(e) => setEquipmentName(e.target.value)}
          name="equipmentName"
          id="equipmentName"
        />
        <input
          placeholder="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          name="type"
          id="type"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          name="amount"
          id="amount"
        />
      </div>

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
