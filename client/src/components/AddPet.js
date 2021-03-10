import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import service from "./api/service";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";

// import Avatar from "@material-ui/core/Avatar";
// import Link from "@material-ui/core/Link";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";


export default class addPet extends Component {
  state = {
    nameOfPet: "",
    location: "",
    lostOrFound: "lost",
    textDescription: "",
    date: "",
    descriptionOfPet: "",
    typeOfPet: "",
    colourOfPet: "",
    pictureLink: "",
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const {
      nameOfPet,
      location,
      lostOrFound,
      textDescription,
      date,
      descriptionOfPet,
      typeOfPet,
      colourOfPet,
      pictureLink,
    } = this.state;
    const newPet = {
      nameOfPet,
      location,
      lostOrFound,
      textDescription,
      date,
      descriptionOfPet,
      typeOfPet,
      colourOfPet,
      pictureLink,
      id: uuid(),
    };

    axios.post("http://localhost:5005/api/", newPet);
    this.setState({
      nameOfPet: "",
      location: "",
      lostOrFound: "lost",
      textDescription: "",
      date: "",
      descriptionOfPet: "",
      typeOfPet: "",
      colourOfPet: "",
      pictureLink: "",
    });
  };

  handleNameChange = (event) => {
    console.log(event.target.value);
    this.setState({
      nameOfPet: event.target.value,
    });
  };

  handleLocationChange = (event) => {
    console.log(event.target.value);
    this.setState({
      location: event.target.value,
    });
  };

  handleDescriptionChange = (event) => {
    console.log(event.target.value);
    this.setState({
      textDescription: event.target.value,
    });
  };

  handleDateChange = (event) => {
    console.log(event.target.value);
    this.setState({
      date: event.target.value,
    });
  };

  handleLostFoundChange = (event) => {
    console.log(event.target.value);
    this.setState({
      lostOrFound: event.target.value,
    });
  };

  handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    uploadData.append("pictureLink", e.target.files[0]);

    service
      .handleUpload(uploadData)
      .then((response) => {
        this.setState({ pictureLink: response.secure_url });
      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    service
      .saveNewThing(this.state)
      .then((res) => {
        console.log("added: ", res);
      })
      .catch((err) => {
        console.log("Error while adding the thing: ", err);
      });
  };

  render() {
    return (
      <div>
      <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <form onSubmit={this.handleFormSubmit} style={{ width: "100%", marginTop: 'theme.spacing(3)'}} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="nameOfPet"
                label="Name of pet"
                autoFocus
                type="text"
                name="nameOfPet"
                value={this.state.nameOfPet}
                onChange={this.handleNameChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                fullWidth
                id="location"
                label="Location"
                type="text"
                name="location"
                value={this.state.location}
                onChange={this.handleNameChange}
              />
            </Grid>
         
            <Grid item xs={12}>
              <TextField
                variant="standard"
                fullWidth
                id="description"
                label="Description"
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleNameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                fullWidth
                id="date"
                label="Date"
                type="text"
                name="date"
                value={this.state.date}
                onChange={this.handleNameChange}
              />
            </Grid>
          </Grid>

          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              style={{backgroundColor: '#E9C46A'}}
            >
              Submit
            </Button>

        </form>
        </Container>
        </>

        <form onSubmit={this.handleFormSubmit}>
          <label>Name of pet:</label>
          <input
            type="text"
            name="nameOfPet"
            value={this.state.nameOfPet}
            placeholder="Enter name if known"
            onChange={this.handleNameChange}
          />
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={this.state.location}
            placeholder="Enter location"
            onChange={this.handleLocationChange}
          />
          <label>
            <select
              className="select-lost-found"
              value={this.state.lostOrFound}
              onChange={this.handleLostFoundChange}
            >
              <option value="lost">Lost</option>
              <option value="found">Found</option>
            </select>
          </label>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={this.state.textDescription}
            placeholder="Describe the animal"
            onChange={this.handleDescriptionChange}
          />
          <label>Date:</label>
          <input
            type="text"
            name="date"
            value={this.state.date}
            placeholder="When did you lose/find"
            onChange={this.handleDateChange}
          />
          <button type="submit">Submit</button>
          <div className="App">
            <input type="file" name="avatar" onChange={this.handleFileUpload} />
            <button type="button" onClick={this.submit}>
              {" "}
              Upload{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
