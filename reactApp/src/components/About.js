import React from "react";

import './About.css';

import washing from '../Images/washing.png';
import drying from '../Images/drying.jpg';
import pressing from '../Images/pressing.jpg';

const About = () => {
  return (
    <React.Fragment>
      <div className="aboutUs">
    <div className="heading">
      <h1>About us </h1>
    </div>

    <div className="content">
      <p>
        InstaWash was established to provide the most professional, reliable and environmentally friendly services to our community. Our primary services include laundry, Dry Cleaning and Pressing. We also offer a free pickup & delivery services.<br/><br/>
We have grown in technology and understanding as our number of years in business has increased.<br/><br/>
Our commitment to the environment is never ending.  Our cleaning solution has always been recycled.  Just as you would not wash your clothing in dirty water, our product has all the impurities removed so your clothing is fresh.  In addition, we recycle hangers and dry-cleaning bags.<br/><br/>
Our technicians are continually trained and updated on the newest technology.  The end result is customer satisfaction achieved in a safe environmentally sound manner. We believe in one stop shopping for all your cleaning needs.
      </p>
    </div>

  </div>

  <div className="services">
    <div className="heading">
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

  <div className="reviews">
    <div className="heading">
      <h1>Reviews</h1>
    </div>
    <div className="review">
      <p><i>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, labore dolor voluptates perferendis id, et quidem fugiat quasi deserunt minima corporis, nesciunt est? Commodi voluptate deserunt, exercitationem incidunt laboriosam praesentium magnam beatae explicabo deleniti sunt vitae, quidem blanditiis alias autem eligendi a ducimus totam, et culpa reiciendis quaerat tenetur dolorem."</i></p>
      <p><b>-John Doe</b></p>
    </div>
    <div className="review">
      <p><i>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, labore dolor voluptates perferendis id, et quidem fugiat quasi deserunt minima corporis, nesciunt est? Commodi voluptate deserunt, exercitationem incidunt laboriosam praesentium magnam beatae explicabo deleniti sunt vitae, quidem blanditiis alias autem eligendi a ducimus totam, et culpa reiciendis quaerat tenetur dolorem."</i></p>
      <p><b>-John Doe</b></p>
    </div>
    <div className="review">
      <p><i>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, labore dolor voluptates perferendis id, et quidem fugiat quasi deserunt minima corporis, nesciunt est? Commodi voluptate deserunt, exercitationem incidunt laboriosam praesentium magnam beatae explicabo deleniti sunt vitae, quidem blanditiis alias autem eligendi a ducimus totam, et culpa reiciendis quaerat tenetur dolorem."</i></p>
      <p><b>-John Doe</b></p>
    </div>
    <div className="review">
      <p><i>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, labore dolor voluptates perferendis id, et quidem fugiat quasi deserunt minima corporis, nesciunt est? Commodi voluptate deserunt, exercitationem incidunt laboriosam praesentium magnam beatae explicabo deleniti sunt vitae, quidem blanditiis alias autem eligendi a ducimus totam, et culpa reiciendis quaerat tenetur dolorem."</i></p>
      <p><b>-John Doe</b></p>
    </div>
  </div>
    </React.Fragment>
  );
}

export default About;
