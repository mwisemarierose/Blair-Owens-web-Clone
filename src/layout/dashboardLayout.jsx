import React, { useEffect } from "react";
import { Outlet, useNavigate, NavLink } from "react-router-dom";

export const DashboardLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard/services");
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "20%",
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Dashboard
        </p>
        <NavLink to="/dashboard/services">
          <p>Services</p>
        </NavLink>
        <NavLink to="/dashboard/news">
          <p>News</p>
        </NavLink>
        <NavLink to="/dashboard/addBlogs">
          <p>Add blog</p>
        </NavLink>
      </div>
      <div
        style={{
          height: "100vh",
          width: "80%",
          marginLeft: "20%",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};