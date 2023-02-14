import Sidebar from "../layout/sideBar/Sidebar";
import Topbar from "../layout/topBar/Topbar";
import React from "react";
import { Route, Routes,Outlet ,NavLink } from "react-router-dom";
import AddNew from "../Components/addNew/addNew";

function Admin() {
  return (
    <div>
      <Topbar />
      <div className="container-fluid d-flex">
        <Sidebar />
<Outlet />
      </div>
    </div>
  );
}

export default Admin;
