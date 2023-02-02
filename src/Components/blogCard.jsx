import React from "react";

export const NewsCard = ({ mainPhoto, newsTitle, newsContent }) => {
  return (
    <div className="newsCard">
      <div className="newsCardImage">
        <img src={mainPhoto}></img>
      </div>
      <div className="newsCardHeader">
        <div className="avatar">
          <img src="https://elementor1.contempothemes.com/wp-content/uploads/2020/12/riley-profile.jpg"></img>
        </div>

        <div>
          <h1>{newsTitle}</h1>
          <p className="text-sm uppercase">
            By: <span>Riley Harper in Our Blog</span>
          </p>
        </div>
      </div>
      <div className="newsCardText">
        <p className="text-md">{newsContent} </p>
        <a href="/readmore">
          <button type="submit" className=" btn-primary">
            Read more
          </button>
        </a>
      </div>
    </div>
  );
};
