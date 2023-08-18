import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';

import "./Layout.css";

function Layout ({searchButton}) {
  return (
  <div className="Layout">
    <nav>
      <ul>
        <li className="grow">
          <Link to="/">Employees</Link>
        </li>
        <li className="search-container">
          <input type="text" placeholder='Type to search...' className="search-input" 
          value={searchButton} onChange={e => searchButton(e.target.value)}/>
          {/* <Link to={{
            pathname:"/searchBar",
            state:{searchValue}
          }}><button className="search-button">Search</button></Link> */}
          {/* <Link to="/searchBar" state={{searchValue:searchValue}}><button className="search-button">Search</button></Link> */}
          {/* <Link to={`/search/${searchValue}`}><button className="search-button">Search</button></Link> */}
          {/* <Link to="/searchBar"><button className="search-button">Search</button></Link> */}
        </li>
        <li>
          <Link to="/create">
            <button type="button">Create Employee</button>
          </Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
)}

export default Layout;
