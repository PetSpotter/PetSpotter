import React, { Component } from "react";
// import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

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
        <form className="search-form">
          <label>
            
            <br/>
            <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Lost or found?</InputLabel>
        <Select
        className="select-lost-found"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={this.props.value}
          onChange={this.handleLostFound}
          label="lost or found"
        >
        
          <MenuItem value="all">Select all</MenuItem>
          <MenuItem value="lost">Lost  </MenuItem>
          <MenuItem value="found">Found  </MenuItem>
        </Select>
      </FormControl>
            
          </label>

          <input
            className="search-window"
            type="text"
            name="query"
            value={this.props.query}
            onChange={this.handleChange}
            placeholder="Search..."
          />
          <TextField id="outlined-search" name="query" label="Search..." type="text" variant="outlined"  value={this.props.query} onChange={this.handleChange}/>
          
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