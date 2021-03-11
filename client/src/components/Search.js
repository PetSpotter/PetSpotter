import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

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
        <h2> 🦔 🐁 🐉 Search Pets 🐉 🐁 🦔 </h2>
            <FormControl variant="outlined">
              <Select
                style={{ width: 200}}
                className="select-lost-found"
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.props.value}
                onChange={this.handleLostFound}
              >
                <MenuItem value="all">Lost or Found?</MenuItem>
                <MenuItem value="lost">Lost </MenuItem>
                <MenuItem value="found">Found </MenuItem>
              </Select>
            </FormControl>
         
          <FormControl variant="outlined" style={{margin: '10px'}}>
          <TextField
            id="outlined-search"
            name="query"
            label="Search..."
            type="text"
            variant="outlined"
            value={this.props.query}
            onChange={this.handleChange}
          />
          </FormControl>
      </div>
    );
  }
}
export default Search;