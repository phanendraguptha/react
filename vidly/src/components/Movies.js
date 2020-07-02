import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

export default class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (mov) => {
    let movies = this.state.movies.filter((movie) => movie._id !== mov._id);
    this.setState({ movies });
  };

  showTable(count) {
    return (
      <React.Fragment>
        <p>showing {count} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  render() {
    var count = this.state.movies.length;
    return (
      <div className="container">
        {count === 0 ? (
          <p>There are no movies in the database</p>
        ) : (
          this.showTable(count)
        )}
      </div>
    );
  }
}
