import React, { Component } from "react";
import "./style.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import About from "./about";
import Home from "./home";
import Feature from "./feature";
import Navbar from "./navbar";
import Contact from "./contact";
import Product from "./product";
class Application extends Component {
  state = {};
  render() {
    return (
      <div className="newImage">
        <Router>
          <Navbar />

          <Switch>
            
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/product" component={Product} />
            <Route path="/contact" component={Contact} />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default Application;
