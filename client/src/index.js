import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Layout from "./Pages/Layout";
import ErrorPage from "./Pages/ErrorPage";
import EmployeeList from "./Pages/EmployeeList";
import EmployeeCreator from "./Pages/EmployeeCreator";
import EmployeeUpdater from "./Pages/EmployeeUpdater";
import SearchField from "./Pages/SearchFields/SearchField"

//Equipment side
import Equipment from "./Pages/Equipment";
import EquipmentCreator from "./Pages/EquipmentCreator";
import EquipmentUpdater from "./Pages/EquipmentUpdater";

//PA
import Experience from "./Pages/Experience";
import Positions from "./Pages/Positions";

//Own
import Kittens from "./Pages/Kittens";

import "./index.css";
import TableTest from "./Pages/TableTest";
import FormTest from "./Pages/FormTest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <EmployeeList path="/"/>,
      },
      {
        path: "/positions",
        element: <Positions path="/positions"/>,
      },
      {
        path: "/years-of-experience/:id",
        element: <Experience path="years-of-experience"/>,
      },
      {
        path: "/first",
        element: <EmployeeList path="/first"/>,
      },
      {
        path: "/last", //egyedi és mi a jelentése lehet sima string is ő csak egy string!!
        element: <EmployeeList path="/last"/>,
      },
      {
        path: "/level",
        element: <EmployeeList path="/level"/>,
      },
      {
        path: "/position",
        element: <EmployeeList path="/position"/>,
      },
      {
        path: "/equipments",
        element: <Equipment />,
      },
      {
        path: "/create",
        element: <EmployeeCreator />,
      },
      {
        path: "/equipmentCreate",
        element: <EquipmentCreator />,
      },
      {
        path: "/update/:id",
        element: <EmployeeUpdater />,
      },
      {
        path: "/updateEquipment/:id",
        element: <EquipmentUpdater />,
      },
      {
        path: "/table-test",
        element: <TableTest />,
      },
      {
        path: "/form-test",
        element: <FormTest />,
      },
      {
        path: "/search/:id",
        element: <SearchField />,
      },
      {
        path: "/kittens/:id",
        element: <Kittens />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
