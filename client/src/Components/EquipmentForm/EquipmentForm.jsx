import React from 'react'
import { useState } from 'react';

function EquipmentForm({ equipmentDatas, onEquipment, onCancel }) {
    const [equipmentName, setEquipmentName] = useState(equipmentDatas?.equipmentName ?? "")
    const [type, setType] = useState(equipmentDatas?.type ?? "");
    const [amount, setAmount] = useState(equipmentDatas?.amount ?? "");

    const equipmentOnSubmit = (e) => {
        e.preventDefault();

        if (equipmentDatas) {
            return onEquipment({
                ...equipmentDatas,
                equipmentName,
                type,
                amount,
            });
        }

        return onEquipment({
            equipmentName,
            type,
            amount,
        });
    };


    return (
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
            <button type="submit">
                {equipmentDatas ? "Update Equipment" : "Create Equipment"}
            </button>

            <button type="button" onClick={onCancel}>
                Cancel
            </button>
        </form>
    )
}

export default EquipmentForm