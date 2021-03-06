import React, { Component } from "react";
import "./style.css";
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import About from "./about";
import Home from "./home";

import Navbar from "./navbar";
import Contact from "./contact";
import Product from "./product";
import AddProduct from "./addproduct";
class Application extends Component {
  state = {};
  render() {
    return (
      <div className="newImage">
        <Router>
          <Navbar />

          <Switch>
            
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/product" component={Product} />
            <Route path="/contact" component={Contact} />
            <Route path="/add" component={AddProduct} />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default Application;
