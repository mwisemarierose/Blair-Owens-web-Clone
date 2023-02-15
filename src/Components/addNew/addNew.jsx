import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaDirections, FaInfo } from "react-icons/fa";
import "./style.css";
import { createList } from "../../features/listingSlice";

export const  AddNew =()  =>{
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const dispatch = useDispatch();

  const handlePost = (e) => {
    const Data = new FormData();
  Data.append("title", title);
  Data.append("desc", desc);
  Data.append("image", img);
    e.preventDefault();
    dispatch(createList(Data));
  };
  

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
            <label htmlFor="address">Address</label>
            <div className="inputs">
              <span>
                <FaDirections />
              </span>
              <input
                type="text"
                placeholder="address"
                name="address"
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="image">image</label>
            <input
              type="file"
              placeholder=""
              name="image"
              onChange={(e) => {
                setImg(e.target.files[0]);
              }}
            />
          </div>
          <div
            class="d-grid gap-2 col-3 mx-auto"
            style={{
              marginTop: "15px",
              backgroundColor: "#3270FC",
              color: "white",
            }}
          >
            <button class="btn " onClick={handlePost}>
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

