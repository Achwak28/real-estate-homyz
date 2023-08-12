import React from "react";
import "./Footer.css";
import image from "../../assets/logo2.png";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="felxColStart f-left">
          <img src={image} alt="logo 2" width={120} />
          <br />

          <span className="secondaryText">
            Our vision is to make our clients happy and <br />
            satisfied, by finding them a good home.
          </span>
          <br />
          <div id="name">
            <span style={{ fontWeight: 700 }}>Achwak Cherif</span> 
            <span style={{ fontWeight: 500}} className="secondarytext">+213 675 234 231</span>
          </div>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 4571, USA</span>

          <div className="flexCenter f-menu">
            <span style={{ marginLeft: 0 }}>Property</span>
            <span>Services</span>
            <span>Products</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
