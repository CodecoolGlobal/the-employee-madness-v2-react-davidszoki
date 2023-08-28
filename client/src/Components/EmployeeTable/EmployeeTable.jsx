import { Link } from "react-router-dom";
import "./EmployeeTable.css";
import SameWorkers from "../../Pages/SameWorkers";
import { useState } from "react";


function dateConverter(date) {
  let sliceDate = date.split("T") //Dupla d mert 01/13 a betű a karakterszámra utal
  return sliceDate[0]
}

const EmployeeTable = ({ employees, onDelete }) => {
  
  const [showSame, setShowSame] = useState(true);
  const [employee, setEmployee] = useState([]);

  const setterEmployee = (employ) => {
    setEmployee(employ);
    setShowSame(false)
  }
  
  const handleBack = () => {
    setShowSame(true)
  }

  return(
  <div className="EmployeeTable">
    {showSame ? (<table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Level</th>
          <th>Position</th>
          <th>Starting date</th>
          <th>Current Salary</th>
          <th>Desired Salary</th>
          <th>Favourite color</th>
          {/* <th>Favourite Brands</th> */}
          <th />
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee._id}>
            <td>{employee.name}</td>
            <td>{employee.level}</td>
            <td>{employee.position}</td>
            <td>{dateConverter(employee.startDate)}</td>
            <td>{employee.currentSalary}</td>
            <td>{employee.desiredSalary}</td>
            <td style={{backgroundColor: employee.favouriteColor}}></td>
            {/* <td>{employee.brand.name}</td> */}
            <td>
              <button type="submit" onClick={()=>setterEmployee(employee)}>Same workers</button>
              <Link to={`/update/${employee._id}`}>
                <button type="button">Update</button>
              </Link>
              <button type="button" onClick={() => onDelete(employee._id)}>
                Delete
              </button>
              <Link to={`/kittens/${employee._id}`}><button type="submit">Kittens</button></Link>          
            </td>
          </tr>
        ))}
      </tbody>
    </table>):(<SameWorkers sameEmploye={employee} onBack={handleBack}/>)}
  </div>
)}

export default EmployeeTable;
