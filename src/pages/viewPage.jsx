import React from "react";
import { Filter } from "../components/filter";
import NavBar from "../components/NavBar";
import "../styles/styles.css";
import PropertyCards from "../components/viewCard";

function viewPage() {
  const data = [
    {
      image:
        "https://d37ukvrrv3in12.cloudfront.net/listings/dc1e1b8b-a8a7-4ccf-808e-dc0018f33427/xl/1.jpg",
        
    },
    {
      image:
        "https://d37ukvrrv3in12.cloudfront.net/listings/dc1e1b8b-a8a7-4ccf-808e-dc0018f33427/xl/1.jpg",
       
    },
  ];
  return (
    <div>
      <NavBar />
      <Filter />

      <div className="listing">

        {/* <a href="/">Home </a>
        <a href="/">Listings </a>
        <a href="/">2432 Highland Ave </a> */}
      </div>
      <div className="view-cOntainer">
        <div className="header">
            <h1>2432 Highland Ave</h1>
            <p>National City, CA 91950</p>
            <p>
            <b style={{ color: "#342C2B" }}></b> $1,099,000
          </p>
        </div>
        <div className="photo-container">
        </div>
        <div className="w-full">
          
          <div className="right-properties">
            {data.map((item, index) => {
              return <PropertyCards img={item.image} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default viewPage;
