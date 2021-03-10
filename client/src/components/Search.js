import React, { Component } from "react";
// import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";

class Search extends Component {
  handleLostFound = (event) => {
    this.props.setLostFoundProp(event.target.value);
  };

  handleChange = (event) => {
    this.props.setQueryProp(event.target.value);
  };

  render() {

    return (
      <div>
        <form className="search-form">
          <label>
            <h2> 🦔 🐁 🐉 Search Pets 🐉 🐁 🦔 </h2>
            <select
              className="select-lost-found"
              value={this.props.value}
              onChange={this.handleLostFound}
            >
              <option value="all">Select</option>
              <option value="lost">Lost</option>
              <option value="found">Found</option>
            </select>
          </label>

          <input
            className="search-window"
            type="text"
            name="query"
            value={this.props.query}
            onChange={this.handleChange}
            placeholder="Search..."
          />
        </form>
      </div>
    );
  }
}

export default Search;


 /* <Autocomplete
        style={{ width: 300 }}
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField {...params}
          label="Search"
          margin="normal"
          variant="outlined" />
        )}

        type="text"
        name="query"
        value={this.props.query}
        onChange={this.handleChange}
      /> */