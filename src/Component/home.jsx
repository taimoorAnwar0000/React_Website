import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="cotainer">
        <div
          className="home-hero"
          style={{ backgroundImage: 'url("/image/home1.jpg")' }}
        >
          <h1 className="home-text">REPRESENT THE WORLD</h1>
          <h1 className="home-text"> FINEST REAL ESTATE</h1>

          <Link to="/about">
            {" "}
            <button>About Us</button>{" "}
          </Link>
        </div>
        <div className="world">
          <h1>THE EVOLVING WORLD OF LUXURY LIVING</h1>{" "}
          <h6>
            On the surface our story is deceptively simple, but exactly how we
            give it life is highly sophisticated.
          </h6>
          <h6>
            Collaborating with our extraordinary developer clientele, we create
            desire and demand for luxury real estate in
          </h6>
          <h6>
            the great financial, social, cultural and recreational capitals of
            the world. Like the world class architects and
          </h6>
          <h6>
            designers they select, this new wave of developers is dedicated to
            crafting the most geometrically inspiring and
          </h6>
          <h6>
            emotionally moving structures imaginable. Our role is to market
            those residences to discerning buyers and to{" "}
          </h6>
          <h6>
            help guide developer, architect and buyer alike in an evolving world
            of luxury living
          </h6>
        </div>
        <div className="row">
          <div
            className="building"
            style={{ backgroundImage: 'url("/image/background.jpg")' }}
          >
            <div>
              {" "}
              <h1>First Light</h1>
              <button> View</button>
            </div>
          </div>
          <div
            className="building1"
            style={{ backgroundImage: 'url("/image/background.jpg")' }}
          >
              <div><h1>FITEEN FITEEN</h1>
            <button>View</button></div>
            
          </div>
        </div>
        <div className="product">
          {" "}
          <Link> see more product</Link>
        </div>
        <div className="text">
          {" "}
          <h1>MONDIALITÉ</h1>
          <h6>--------</h6>
          <h6>
            Mondialité is our online gateway to a global dialogue in
            architecture, design, real estate innovation and the
          </h6>
          <h6>philosophy of luxury living.</h6>
        </div>
        <div className="newText">
          
          {/* <button>View</button> */}
        </div>

        <div className="text1" style={{backgroundImage:'URL("/image/text1.jpg")'}}>
        <h1> EXPLORE MONDIALITÉ</h1>
          <button>View Exibit</button>
        </div>
        <div className="text2">
          <h1>SCHEDULE PRIVATE CONSULTATION</h1>
          <button>INQUIRE</button>
          
        </div>

        <div className="text3">
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

export default Home;
