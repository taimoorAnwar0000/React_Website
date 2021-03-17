import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div
          className="contact-container1"
          style={{ backgroundImage: 'url("/image/contact-city.jpg")' }}
        >
          CONTACT
        </div>

        <div className="contact-container2">
          <h1>ARRANGE A PRIVATE CONSULTATION</h1>
          <h6>----------</h6>
          <h6>
            For a confidential discussion about your next development, please
            contact inquiry@sprec.com
          </h6>
        </div>

        <div
          className="contact-container3"
          style={{ backgroundImage: 'url("/image/contact.PNG")' }}
        ></div>
        <div className="contact-container4">
          <h1>HEADQUARTERS</h1>

          <h6>---------------</h6>
          <h6>S&P REAL ESTATE CORP.</h6>
          <h6>#106, 1008</h6>
          <h6>BEACH AVENUE VANCOUVER, BC</h6>
          <h6>V6E 1T7, CANADA</h6>
          <h6>+1 604 282 3996</h6>
          <Link>inquiry@sprec.com</Link>
        </div>
        <div className="contact-container6"> <h1>ADDITIONAL LOCATIONS</h1></div>
<div className="contact-container5">
<div className="contact-container5-1">
    <div>01</div>
    <div>VANCOUVER</div></div>
    <div className="contact-container5-2">
    <div>02</div>
    <div>SAN DIEGO</div></div>
    <div className="contact-container5-3">
    <div>03</div>
    <div>HONOLULU</div></div>
    <div className="contact-container5-4">
    <div>04</div>
    <div>TOKYO</div></div>
    

</div>
<div className="text3-1">
          <Link>SUBSCRIBE OUR NEWSLETTER</Link>
        </div>

        <div className="footer">
          <div className="start">
            {" "}
            <Link>NEWS</Link>
          </div>
          <div className="start">
            <Link>PRESS</Link>
          </div>

         <div className="start"><Link>WORLD HOUSING</Link></div> 
          <Link>WORLD FINEST REAL ESTATE</Link>
          <Link>PRIVACY</Link>
          <Link>TERMS</Link>
        </div>
      </div>
    );
  }
}

export default Contact;
