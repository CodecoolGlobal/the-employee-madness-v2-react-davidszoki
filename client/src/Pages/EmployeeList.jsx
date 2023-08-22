import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import EmployeeTable from "../Components/EmployeeTable";
import Navbar from "./ExtendsArregment/ArregmentNavbar";

const fetchEmployees = () => {
  return fetch("/api/employees").then((res) => res.json());
};

const deleteEmployee = (id) => {
  return fetch(`/api/employees/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
};

const fetchBrand = () => {
  return fetch("/api/brand").then(res=>res.json())
}

const EmployeeList = ({ path }) => {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);
  const [brand, setBrand] = useState(null);

  const handleDelete = (id) => {
    deleteEmployee(id);

    setEmployees((employees) => {
      return employees.filter((employee) => employee._id !== id);
    });
  };

  useEffect(() => {
    fetchEmployees()
      .then((employees) => {
        setLoading(false);
        setEmployees(employees);
        fetchBrand(setBrand(brand))
      })

    //Sample arregment method for the simple search the index.js contain the children path element that is return here props
    let url
    switch (path) {
      case '/first':
        url = "/arregement/sortFirstName"
        break;
      case '/last':
        url = "/arregement/sortLastName"
        break;
      case '/level':
        url = "/arregement/level"
        break;
      case '/position':
      url="/arregement/position"
          break;
      // Default érték állítása
      default:
        url = '/api/employees/'
    }

    fetch(url).then(res => res.json()).then(data => setEmployees(data))
  }, [path]);

  if (loading) {
    return <Loading />;
  }
  return <>
    <Navbar />
    <EmployeeTable employees={employees} onDelete={handleDelete} brand={brand}/>
  </>;
};

export default EmployeeList;
