// import { divide } from "lodash";
import React, { Component } from "react";
import { saveMovie } from "../services/fakeMovieService";

class AddProduct extends Component {
  state = {
    // addMOvies: saveMovie()
    building: {
      title: "",
      image: "/image/p7.jpeg",
    },
  };

  handleChange = ({ currentTarget: input }) => {
    const building = { ...this.state.building };
    building[input.name] = input.value;
    this.setState({ building });
  };

  handleSubmit = ()=> {

      const {building}= this.state;
      saveMovie(building);
      this.props.histcory.push('/product')
  }
  render() {
      const {building} = this.state;
    return (
      <div className="AddContainer1">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Title</label>
          <input type="text" name="title" value={building.title} onChange={this.handleChange} />
          <button>Add Building</button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
