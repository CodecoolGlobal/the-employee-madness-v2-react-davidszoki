import React, { useEffect, useState } from 'react'
import  {useParams} from "react-router-dom"
import './search.css'
import EmployeeTable from "../../Components/EmployeeTable";

function Search() {
    const [searchItem, setSearchItem] = useState([])
    const {id} = useParams();
    // console.log("test");   

    useEffect(()=>{
        function fetchEmployees() {
            fetch(`http://localhost:8080/search/${id}`).then(res => res.json())
                .then(data => {
                    setSearchItem(data)
                    // console.log(data);
                }).catch(err => console.error(err))
        }
        fetchEmployees();
    }, [])

    return (
        <div className='all'>
            <EmployeeTable employees={searchItem}/>
        </div>
    )
}

export default Search