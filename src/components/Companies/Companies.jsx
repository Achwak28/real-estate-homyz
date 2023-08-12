import React from "react";
import "./Companies.css";
import image1 from '../../assets/tower.png'
import image2 from '../../assets/equinix.png'
import image3 from '../../assets/realty.png'
import image4 from '../../assets/prologis.png'


const Companies = () => {
  return (
    <section className="comp-wrapper">
      <div className="paddings innerWidth flexCenter comp-container">
        <img src={image4} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image1} alt="" />
    
      </div>
    </section>
  );
};

export default Companies;
