import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import EquipmentForm from '../Components/EquipmentForm/EquipmentForm';

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

const fetchEquipment = async () => {
    return  await fetch("/equipment").then(res => res.json())
}

function EquipmentCreator() {
    const navigate = useNavigate();
    const [equipment, setEquipment] = useState([])

    fetchEquipment().then(equip => setEquipment(equip))

    const handleCreateEquipment = (equipment) => {
        createEquipment(equipment)
            .then(() => {

                navigate("/equipments")
            })
    }
    return (
        <EquipmentForm
            onCancel={()=>navigate("/equipments")}
            equipmentDatas={equipment}
            onEquipment={handleCreateEquipment}
        />
    )
}

export default EquipmentCreator