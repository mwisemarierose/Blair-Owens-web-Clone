import React, { useEffect, useState } from "react";
import "./style.css";
import { Card } from "./card";
import axios from "axios";


export const Listing = () => {
  const [estate, setEstate] = useState([]);

  useEffect(() => {
    fetchEstate();
  }, []);
  const fetchEstate = () => {
    axios({
      method: "GET",
      url: "https://klabapi.onrender.com/api/estate",
    })
      .then((response) => {
        setEstate(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="row px-3 py-4">
      {estate.map((item) => {
        return (
          <Card
          id={item._id}
            image={item.image}
            title={item.title}
            district={item.location.district}
          />
        );
      })}
    </div>
  );
};
