import React, { useEffect, useState } from "react";
import "./style.css";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillStarFill, BsPencil, BsTrash } from "react-icons/bs";
import { BsFillEyeFill } from "react-icons/bs";
import { getList } from "../../features/listingSlice";
import { useDispatch, useSelector } from "react-redux";

export const Listing = () => {
  const estates = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  console.log(estates);

  return (
    <div className="row px-3 py-4">
      <div className="cards col-md-6">
        <div id="listing-card">
          <div id="listing-card-image">
            <img
              src="https://d37ukvrrv3in12.cloudfront.net/listings/2f0059e5-0c4c-4ba0-89e9-31ca11a107eb/xl/0.jpg"
              className="w-100"
              alt=""
            />
            <div class="view-button">View</div>
          </div>
          <div id="listing-card-desc">
            <div id="listing-card-title">Gourgeous House For Sale</div>
            <div id="listing-card-address">
              <IoLocationSharp style={{ color: "#3270FC" }} />
              70 Bright St New York, USA
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
        <div id="listing-card">
          <div id="listing-card-image">
            <img
              src="https://d37ukvrrv3in12.cloudfront.net/listings/2f0059e5-0c4c-4ba0-89e9-31ca11a107eb/xl/0.jpg"
              className="w-100"
              alt=""
            />
          </div>
          <div id="listing-card-desc">
            <div id="listing-card-title">Gourgeous House For Sale</div>
            <div id="listing-card-address">
              <IoLocationSharp style={{ color: "#3270FC" }} />
              70 Bright St New York, USA
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
      <div className="cards col-md-6">
        <div id="listing-card">
          <div id="listing-card-image">
            <img
              src="https://d37ukvrrv3in12.cloudfront.net/listings/2f0059e5-0c4c-4ba0-89e9-31ca11a107eb/xl/0.jpg"
              className="w-100"
              alt=""
            />
          </div>
          <div id="listing-card-desc">
            <div id="listing-card-title">Gourgeous House For Sale</div>
            <div id="listing-card-address">
              <IoLocationSharp style={{ color: "#3270FC" }} />
              70 Bright St New York, USA
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
        <div id="listing-card">
          <div id="listing-card-image">
            <img
              src="https://d37ukvrrv3in12.cloudfront.net/listings/2f0059e5-0c4c-4ba0-89e9-31ca11a107eb/xl/0.jpg"
              className="w-100"
              alt=""
            />
          </div>
          <div id="listing-card-desc">
            <div id="listing-card-title">Gourgeous House For Sale</div>
            <div id="listing-card-address">
              <IoLocationSharp style={{ color: "#3270FC" }} />
              70 Bright St New York, USA
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
        <div id="listing-card">
          <div id="listing-card-image">
            <img
              src="https://d37ukvrrv3in12.cloudfront.net/listings/2f0059e5-0c4c-4ba0-89e9-31ca11a107eb/xl/0.jpg"
              className="w-100"
              alt=""
            />
          </div>
          <div id="listing-card-desc">
            <div id="listing-card-title">Gourgeous House For Sale</div>
            <div id="listing-card-address">
              <IoLocationSharp style={{ color: "#3270FC" }} />
              70 Bright St New York, USA
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
        <div id="listing-card">
          <div id="listing-card-image">
            <img
              src="https://d37ukvrrv3in12.cloudfront.net/listings/2f0059e5-0c4c-4ba0-89e9-31ca11a107eb/xl/0.jpg"
              className="w-100"
              alt=""
            />
          </div>
          <div id="listing-card-desc">
            <div id="listing-card-title">Gourgeous House For Sale</div>
            <div id="listing-card-address">
              <IoLocationSharp style={{ color: "#3270FC" }} />
              70 Bright St New York, USA
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
    </div>
  );
};
