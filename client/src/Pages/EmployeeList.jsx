import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import Loading from "../Components/Loading";
import EmployeeTable from "../Components/EmployeeTable";
import Navbar from "./ExtendsArregment/ArregmentNavbar";

// const fetchEmployees = () => {
//   return fetch("/api/employees").then((res) => res.json());
// };

const deleteEmployee = (id) => {
  return fetch(`/api/employees/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
};

const EmployeeList = ({ path }) => {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);
  // const location = useLocation();

  //location.pathname milyen url-en vagyunk eláruja milyen routon vagyok
  //ha ide teszem akkor nem kell adatot küldeni

  const handleDelete = (id) => {
    if (window.confirm("Do you really delet this Employee?")) {
      deleteEmployee(id);
      setEmployees((employees) => {
        return employees.filter((employee) => employee._id !== id);
      });
    }
  };

  // console.log(location.pathname);
  useEffect(() => {
  
    // fetchEmployees()
    //   .then((employees) => {
    //     setLoading(false);
    //     setEmployees(employees);
    //   })

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
        url = "/arregement/position"
        break;
      // Default érték állítása
      default:
        url = '/api/employees/'
    }

    fetch(url).then(res => res.json()).then(data => {
      setEmployees(data);
      setLoading(false)
    })
  }, [path]);

  if (loading) {
    return <Loading />;
  }
  return <>
    <Navbar />
    <EmployeeTable employees={employees} onDelete={handleDelete}/>
  </>;
};

export default EmployeeList;
