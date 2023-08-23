import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeForm from "../Components/EmployeeForm";

//Employee Method creation
const createEmployee = (employee) => {
return fetch("/api/employees", {
  method: "POST",
  headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  }).then((res) => res.json());
};

const fetchEquipment = ()=>{
  return fetch("/equipment").then(res=>res.json())
}

//Equipment method creation
const createEquipment = (equipment) => {
  return fetch("/api/equipment/", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(equipment),
    }).then((res) => res.json());
  };
  

const EmployeeCreator = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [equipment, setEquipment] = useState([])

  fetchEquipment().then(equip=>setEquipment(equip))

  const handleCreateEquipment = (equipment)=>{
    createEquipment(equipment)
    .then(()=>{
      setLoading(false);
      navigate("/")
    })
  }

  const handleCreateEmployee = (employee) => {
    setLoading(true);

    createEmployee(employee)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
  };

  return (
    <EmployeeForm
      equipmentDatas={equipment}
      onCancel={() => navigate("/")}
      disabled={loading}
      onSave={handleCreateEmployee}
      onEquipment={handleCreateEquipment}
    />
  );
};

export default EmployeeCreator;
