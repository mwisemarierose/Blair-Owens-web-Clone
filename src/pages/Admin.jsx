import Sidebar from "../layout/sideBar/Sidebar";
import Topbar from "../layout/topBar/Topbar";
import React from "react";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <div>
      <Topbar />
      <div className="container-fluid d-flex" style={{ position: "relative" }}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
