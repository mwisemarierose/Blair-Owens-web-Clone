import React from "react";
import "../styles/styles.css";

function SmallNav() {
  return (
    <div>
      
        <div className="naLink">
        <div className="right" style={{float:"left"}}>
          <p>Listings</p>
        </div>
        <div className="left" style={{float:"right"}}>
          <a href="/">Home &gt;</a>
          <a href="">Listings &gt;</a>
          <a href="">8052 Camino De Arriba</a>
        </div>
      </div>
      </div>
    
  );
}

export default SmallNav;
