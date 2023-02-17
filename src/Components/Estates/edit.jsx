import React, { useState } from "react";
import { FaDirections, FaInfo } from "react-icons/fa";
import "../New/style.css";

export const Edit = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [bath, setBath] = useState("");
  const [beds, setBeds] = useState("");
  const [status, setStatus] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [lotsize, setLotsize] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const [edited, setEdited] = useState(false);

  function handleUpdate(id) {
    const Data = new FormData();
    Data.append("title", title);
    Data.append("desc", desc);
    Data.append("image", img);
    Data.append("price",price);
    Data.append("LotSize",lotsize);
    Data.append("street", street);
    Data.append("district", district);
    Data.append("province", province);
    Data.append("status", status);
    Data.append("beds",beds);
    Data.append("bath", bath);

    const token = localStorage.getItem("token");
    const id1 = localStorage.getItem("id");
    fetch(`https://klabapi.onrender.com/api/estate/update/${id1}`, {
      method: "PATCH",
      body: Data,
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          setEdited(true);
        } else {
          throw new Error("Failed to EDIT");
        }
      })
     
  }

  return (
    <div className="aos-navs w-100 d-flex flex-column">
      <ul>
        <li>Info</li>
        <li>Location</li>
        <li className="active">Edit Estate</li>
        <li>Details</li>
        <li>Rooms</li>
        <li>Plans</li>
        <li>Widgets</li>
      </ul>

      <div class="card w-100">
        <div class="card-header">
          <FaInfo className="text-primary" />
          <span>Edit Informations</span>
        </div>
        <div class="card-body row">
          <div className="col-md-4">
            <label htmlFor="title">Estate Title</label>
            <div className="inputs">
              <span>
                <FaInfo />
              </span>
              <input
                type="text"
                placeholder="Title"
                name="title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="col-md-4">
            <label htmlFor="province">Province</label>
            <div className="inputs">
              <span>
                <FaInfo />
              </span>
              <input
                type="text"
                placeholder="Province"
                name="province"
                onChange={(e) => {
                  setProvince(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="col-md-4">
            <label htmlFor="district">District</label>
            <div className="inputs">
              <span>
                <FaInfo />
              </span>
              <input
                type="text"
                placeholder="District"
                name="district"
                onChange={(e) => {
                  setDistrict(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="col-md-4">
            <label htmlFor="street">Street</label>
            <div className="inputs">
              <span>
                <FaInfo />
              </span>
              <input
                type="text"
                placeholder="Street"
                name="street"
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="col-md-4">
            <label htmlFor="price">Price</label>
            <div className="inputs">
              <span>
                <FaInfo />
              </span>
              <input
                type="number"
                placeholder="Price"
                name="price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="col-md-4">
            <label htmlFor="beds">Beds</label>
            <div className="inputs">
              <span>
                <FaInfo />
              </span>
              <input
                type="number"
                placeholder="Beds"
                name="beds"
                onChange={(e) => {
                  setBeds(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="col-md-4">
            <label htmlFor="description">Description</label>
            <div className="inputs">
              <span>
                <FaDirections />
              </span>
              <input
                type="text"
                placeholder="Description"
                name="description"
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="col-md-4">
            <label htmlFor="bath">Bath</label>
            <div className="inputs">
              <span>
                <FaInfo />
              </span>
              <input
                type="number"
                placeholder="Bath"
                name="bath"
                onChange={(e) => {
                  setBath(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="status">Status</label>
            <div className="inputs">
              <span>
                <FaInfo />
              </span>
              <input
                type="text"
                placeholder="status"
                name="status"
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="col-md-4">
            <label htmlFor="lotSize">Lot Size</label>
            <div className="inputs">
              <span>
                <FaInfo />
              </span>
              <input
                type="number"
                placeholder="Lot Size"
                name="lotSize"
                onChange={(e) => {
                  setLotsize(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="col-md-4">
            <label htmlFor="image">image</label>
            <input
              type="file"
              placeholder=""
              className="form-control"
              name="image"
              onChange={(e) => {
                setImg(e.target.files[0]);
              }}
            />
          </div>
          <div className="row">
            <div class="d-grid gap-2 d-md-block">
              {edited && <p>Edited successfully</p>}
              <button
                class="btn mt-3 text-white"
                style={{ backgroundColor: "#3270FC" }}
                
                onClick={handleUpdate}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
