import React from "react";
import "./Home.css";

import washing from "../Images/washing.png";
import drying from "../Images/drying.jpg";
import pressing from "../Images/pressing.jpg";

const Home = () => {
  return (
    <React.Fragment>
      <div className="hero__section">
        <div className="text">
          <p>
            Hello There! Welcome to InstaWash Laundry Service.
            <br />
            Trusted by our customers for many years.
            <br />
            What’s available to you RIGHT now:
            <br />
            We are now offering Wash & Fold services!!
            <br />
            We’ll sort your laundry just like you do at home, <br />
            wash it, dry it, then fold it neatly.
            <br />
            Call us today to signup!!
          </p>
        </div>
      </div>

      <div className="services">
        <div>
          <h1>Our Services</h1>
        </div>

        <div className="service__container">
          <div className="service">
            <img src={washing} alt="" />
            <p>Laundry</p>
          </div>
          <div className="service">
            <img src={drying} alt="" />
            <p>Dry Cleaning</p>
          </div>
          <div className="service">
            <img src={pressing} alt="" />
            <p>Pressing</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
