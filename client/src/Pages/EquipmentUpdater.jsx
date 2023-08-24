import React from 'react'
import { useState, useEffect } from 'react'
import EquipmentForm from '../Components/EquipmentForm/EquipmentForm'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const fetchEquipment = (id) => {
    return fetch(`/equipment/${id}`).then((res) => res.json());
}

const updateEquipment = (equip) => {
    return fetch(`/api/equipment/${equip._id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(equip)
    }).then((res) => res.json())
}

function EquipmentUpdater() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [equipment, setEquipment] = useState(null);

    useEffect(() => {
        fetchEquipment(id)
            .then((eqip) => {
                setEquipment(eqip);
            })
    }, [id])

    const handleUpdateEquipment = (equip) => {
        updateEquipment(equip)
            .then(() => {
                navigate("/equipments");
            })
    }


    return (
        <EquipmentForm
            onCancel={() => navigate("/equipments")}
            equipmentDatas={equipment}
            onEquipment={handleUpdateEquipment}
        />
    )
}

export default EquipmentUpdater