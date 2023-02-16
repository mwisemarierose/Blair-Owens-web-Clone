import React from 'react'
import "./style.css";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillStarFill, BsPencil, BsTrash } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";

export const Card =({image,title,province}) =>{
  return (
    <div className="lists col-md-6">
    <div id="listing-card">
    <a href="/view" class="image-link">  
    <div id="listing-card-image" class="image-link">
      <img
        src={image}
        className="w-100"
        alt=""
      />
    <div class="view-button">View</div>
    </div>
    </a>
    <div id="listing-card-desc">
      <div id="listing-card-title">{title}</div>
      <div id="listing-card-address">
      {province}
        <IoLocationSharp style={{ color: "#3270FC" }} />
       
      </div>
      <div id="listing-card-rating">
        <BsFillStarFill className="verified" />
        <BsFillStarFill className="verified" />
        <BsFillStarFill className="verified" />
        <BsFillStarFill className="verified" />
        <BsFillStarFill />
      </div>
      <div id="listing-card-viewership">
        <BsTrash className="verified delete" />
        <BsPencil className="verified edit" />
      </div>
    </div>
  </div>
  </div>
  )
}

