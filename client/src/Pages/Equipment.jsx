import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function Equipment() {
    const [equipment, setEquipment] = useState([]);

    const deleteEquipment = (id) => {
        return fetch(`/api/equipment/${id}`, { method: "DELETE" }).then((res) =>
          res.json()
        );
      };

    useEffect(()=>{
         fetch("/equipment")
            .then(res=>res.json())
            .then(equip=>setEquipment(equip))
    },[])

    // console.log(equipment);
    
  return (
    <div className="EmployeeTable">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Amount</th>
          {/* <th>Favourite Brands</th> */}
          <th />
        </tr>
      </thead>
      <tbody>
        {equipment.map((equip) => (
          <tr key={equip._id}>
            <td>{equip.equipmentName}</td>
            <td>{equip.type}</td>
            <td>{equip.amount}</td>
            {/* <td>{equip.brand.name}</td> */}
            <td>
              <Link to={`/update/${equip._id}`}>
                <button type="button">Update</button>
              </Link>
              <button type="button" onClick={() => deleteEquipment(equip._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Equipment