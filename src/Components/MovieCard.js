import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <div className="movie-card">
          <div className="left">
            <img
              alt="movie-poster"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          </div>
          <div className="right">
            <div className="title">{movie.title}</div>
            <div className="plot">{movie.overview}</div>
            <div className="footer">
              <div className="rating">{movie.vote_average}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
