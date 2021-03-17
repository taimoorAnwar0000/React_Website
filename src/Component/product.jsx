import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import _ from "lodash";
// import Pagination from "./pagination";
// import { Paginate } from "../paginate";

class Product extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    const data = getMovies();
    this.setState({ movies: data });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  handleAdd = (movie) => {};

  render() {
    const { movies: allMovies, currentPage, pageSize } = this.state;
    if (this.state.movies.length == 1) return <h1>no movie</h1>;

    // const movies = Paginate(allMovies, currentPage, pageSize);
    const movies=allMovies;

    return (
      <div>
        <div className="row">
          {movies.map((m) => (
            <div className="col-md-3 p-5">
              <div className=" product-block">
                <img src={m.image} width="100%" alt="" />
                <p>{m.title}</p>{" "}
                <button onClick={() => this.handleDelete(m)}>Delete</button>
                {/* <button>Add</button> */}
              </div>
            </div>
          ))}
        </div>
        
        {/* <Pagination
          itemcount={movies.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
        /> */}
      </div>
    );
  }
}

export default Product;
