import React, { useEffect, useState } from 'react'
import  {useParams} from "react-router-dom"
import './search.css'
import EmployeeTable from "../../Components/EmployeeTable";

function Search() {
    const {id} = useParams();
    console.log("test");
    // const data = location.state?.searchValue;
    // console.log(data);
    // console.log(searchValue.location); 

    // fetch(`/search/${searchValue}`).then(data => console.log(data))

    // const [employees, setEmployees] = useState([]);
    
    // // azért kliens oldal mert nincs nagy adat forgalom ha van akkor server oldal
    // function filterEmployes(employees, searchValue) {
    //     return employees.filter(dat => dat.level.toLowerCase().includes(searchValue.toLowerCase()));
    // }    

    function fetchEmployees() {
        fetch(`http://localhost:8080/search/${id}`).then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    useEffect(()=>{
        fetchEmployees()
    }, [])

    return (
        <div className='all'>
            <EmployeeTable />
        </div>
    )
}

export default Search