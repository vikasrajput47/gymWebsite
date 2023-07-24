import React from "react";

import img from "./img/nImg.png";
import "./About.css";
function About() {
  return (
    <div>
   
      <div className="midSection bottomTop">
        <div className="menA">
          <img src={img} alt="" />
        </div>
        <div className="midContentA">
         <div className="p">
         <p>
            "At Btech Gym Wala, we're more than just a place to lift weights -
            we're a family of fitness enthusiasts dedicated to strength and
            empowerment. With top-of-the-line equipment
            and expert coaches, we're here to help you unleash your inner
            strength and achieve your goals. Our community-driven atmosphere
            fosters camaraderie and mutual support, making each workout a
            memorable experience. If you're ready to embrace the power within
            you, join the Btech Gym Wala gym family today!"
          </p>
         </div>
         <div className="join"><a href="/join">Join Now</a></div>
        </div>
      </div>
    </div>
  );
}

export default About;
