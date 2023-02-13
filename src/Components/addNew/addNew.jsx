import React from "react";
import { FaInfo, FaKey, FaMoneyBill, FaSuitcase } from "react-icons/fa";
import "./addNew.css";

function addNew() {
  return (
    <div className="aos-navs w-100 d-flex flex-column">
      <ul>
        <li className="active">Info</li>
        <li>Location</li>
        <li>Media</li>
        <li>Details</li>
        <li>Rooms</li>
        <li>Plans</li>
        <li>Widgets</li>
      </ul>

      <div class="card w-100">
        <div class="card-header">
          <FaInfo className="text-primary" />
          <span>Basic Informations</span>
        </div>
        <div class="card-body row">
          <div className="col-md-4">
            <label htmlFor="businessName">Listing Title</label>
            <div className="inputs">
              <span>
                <FaSuitcase />
              </span>
              <input
                type="text"
                placeholder="Name of your business"
                name="businessName"
              />
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="type">Type</label>
            <div className="inputs">
              <select className="form-select">
                <option value="">All Types</option>
                <option value="rent">Rent</option>
                <option value="sale">Sales</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="businessName">Listing Price</label>
            <div className="inputs">
              <span>
                <FaMoneyBill />
              </span>
              <input
                type="text"
                placeholder="Name of your business"
                name="businessName"
              />
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="category">Category</label>
            <div className="inputs">
              <select className="form-select">
                <option value="">All Categories</option>
                <option value="rent">House</option>
                <option value="apartment">Apartment</option>
              </select>
            </div>
          </div>
          <div className="col-md-8">
            <label htmlFor="businessName">Keywords</label>
            <div className="inputs">
              <span>
                <FaKey />
              </span>
              <textarea
                name="keywords"
                id=""
                className="w-100"
                style={{ resize: "none" }}
                placeholder="Maximum 15 , should be separated by commas"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default addNew;
