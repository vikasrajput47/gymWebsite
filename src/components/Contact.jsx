import React from 'react'

import './Contact.css'
import men from './img/Cimg.png'
function Contact() {
  return (
    <div>
        
          <div className="Cbox bottomTop">
            <div className="imgBox">
             <img src={men} alt="" />
            </div>
            <div className="contactBox">
            <ul className="contactInfo">
              <li className="contactItem">&#x2709;: vikasrajpoot479@gmail.com</li>
              <li className="contactItem">&#9743;: 8595989010</li>
              <li className="contactItem">&#xf0f8;:  Sector-45,Kanhai Gaon,Near Vivek Model School,Gurgaon,Haryana</li>
            </ul>
            </div>
          </div>
    </div>
  )
}

export default Contact