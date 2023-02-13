import Sidebar from "../layout/Sidebar";
import Topbar from "../layout/topbar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AddNew from "../Components/addNew/addNew";

function Admin() {
  return (
    <div>
      <Topbar />
      <div className="container-fluid d-flex">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<AddNew />} />
        </Routes>

      </div>
    </div>
  );
}

export default Admin;
