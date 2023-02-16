import React from "react";
import "./topbar.css";
import { FaBell, FaLanguage, FaPlusCircle, FaSearch } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img
            src="https://homeradar.kwst.net/images/logo.png"
            className="logo"
          />
        </div>
        <div className="topCenter">
          <div className="d-flex">
            <div className="searchContainer">
              <FaSearch />
            <input type="text" placeholder="Search..." style={{}}/>
            </div>
            <div className="navigationMenus d-flex align-items-center">
              <div class="primary-navigation">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#">Listings</a>
                    <ul class="dropdown">
                      <li>
                        <a href="#">Web Development</a>
                      </li>
                      <li>
                        <a href="#">Web Design</a>
                      </li>
                      <li>
                        <a href="#">Illustration</a>
                      </li>
                      <li>
                        <a href="#">Iconography</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Agents</a>
                  </li>
                  <li>
                    <a href="/news">News</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="topRight">
          <div className="border-start mx-2">
            <img
              src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="topAvatar"
            />
          </div>
          <div className="topbarIconContainer border-start mx-2">
            <FaBell />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer border-start mx-2">
            <FaLanguage />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer border-start mx-2">
            <a href="/dashboard/addNew" className="btn" style={{ backgroundColor: "#3270FC" }}>
              <FaPlusCircle className="text-white mx-2" />
              <span className="text-white">Add Listing</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
