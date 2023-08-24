import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react'
import "./Layout.css";

function Layout () {
  const [searchValue, setSearchValeu] = useState("")
  console.log(searchValue);
  return (
  <div className="Layout">
    <nav>
      <ul>
        <li className="grow">
          <Link to="/">Employees</Link>
        </li>
        <li className="grow">
          <Link to="/equipments">Equipment</Link>
        </li>
        <li className="search-container">
          <input type="text" placeholder='Type to search...' className="search-input" 
          value={searchValue} onChange={e => setSearchValeu(e.target.value)}/>
          <Link to={`/search/${encodeURIComponent(searchValue)}`}><button className="search-button">Search</button></Link>
        </li>
        <li>
          <Link to="/create">
            <button type="button">Create Employee</button>
          </Link>
          <Link to="/equipmentCreate">
            <button type="button">Create Equipment</button>
          </Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
)}

export default Layout;
