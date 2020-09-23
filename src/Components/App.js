import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieCard />
    </div>
  );
}

function mapStateToProps(movie) {
  return {
    movie,
  };
}

export default connect(mapStateToProps)(App);
