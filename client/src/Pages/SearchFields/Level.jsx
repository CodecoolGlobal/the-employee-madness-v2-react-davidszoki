import React, { useEffect, useState } from 'react'
import './Level.css'
import EmployeeTable from "../../Components/EmployeeTable";

function Level() {
    const [search, setSearch] = useState("");
    const [employees, setEmployees] = useState([]);
    
    // azért kliens oldal mert nincs nagy adat forgalom ha van akkor server oldal
    function filterEmployes(employees, search) {
        return employees.filter(dat => dat.level.lowerCase().includes(search.lowerCase)) // sintaktikaát megnézni
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

    const handleChange = (value) => {
        setSearch(value)
    }
    console.log(search);
    return (
        <div className='all'>
            <input type="text"
                placeholder='Type to search level...'
                value={search}
                onChange={(e) => handleChange(e.target.value)} />
            <EmployeeTable employees={filterEmployes(employees, search)} />
        </div>
    )
}

export default Level