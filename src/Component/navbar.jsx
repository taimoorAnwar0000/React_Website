import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        {/* <button>Home</button>
<button>About</button>
<button>Feature</button>
<button>Product</button>
<button>Contact Us</button> */}
        <Link className="navHome" to="/">
          Home
        </Link>
        <Link className="navAbout" to="/about">
          About
        </Link>

        <Link className="navProduct" to="/product">
          Product
        </Link>
        <Link className="navContact" to="/contact">
          Contact Us
        </Link>
      </div>
    );

    //   return (  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/about">About</Link>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <NavLink className="nav-link " aria-current="page" to="/home">Home</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/feature">Features</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
    //         </li>

    //       </ul>
    //     </div>
    //   </div>
    // </nav>);
  }
}

export default Navbar;
