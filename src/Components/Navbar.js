import React from "react";
import { handleMovieSearch } from "../action/index";
import { connect } from "react-redux";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });

    this.props.dispatch(handleMovieSearch(e.target.value));
  };
  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };
  render() {
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

function mapStatetoProps({ search }) {
  return {
    search,
  };
}
export default connect(mapStatetoProps)(Navbar);
