import React, { useEffect, useState } from 'react'
import './search.css'
import EmployeeTable from "../../Components/EmployeeTable";

function Search({searchValue}) {

    console.log(searchValue);

    const [employees, setEmployees] = useState([]);
    
    // azért kliens oldal mert nincs nagy adat forgalom ha van akkor server oldal
    function filterEmployes(employees, searchValue) {
        return employees.filter(dat => dat.level.toLowerCase().includes(searchValue.toLowerCase()));
    }    

    const fetchLevel = () => {
        fetch("http://localhost:8080/api/employees/").then(res => res.json())
            .then(data => {
                setEmployees(data)
            })
    }

    useEffect(()=>{
        fetchLevel()
    }, [])

    return (
        <div className='all'>
            <EmployeeTable employees={filterEmployes(employees, searchValue)} />
        </div>
    )
}

export default Search