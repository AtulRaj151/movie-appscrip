import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    return (
      <div>
        <div className="movie-card">
          <div className="left">
            <img alt="movie-poster" />
          </div>
          <div className="right">
            <div className="title">Title</div>
            <div className="plot">movie plot</div>
            <div className="footer">
              <div className="rating">rating</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
