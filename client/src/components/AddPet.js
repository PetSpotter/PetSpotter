import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import service from "./api/service";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import SaveIcon from "@material-ui/icons/Save";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CloudUpload from "@material-ui/icons/CloudUpload";


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

    axios.post('/api', newPet)
    .then(res => {
      this.props.history.push("/")
    }
    );

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
  handleDescriptionOfPetChange = (event) => {
    console.log(event.target.value);
    this.setState({
      descriptionOfPet: event.target.value,
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

  handleTypeOfPetChange = (event) => {
    console.log(event.target.value);
    this.setState({
      typeOfPet: event.target.value,
    });
  };

  handleDateChange = (event) => {
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
      
        <br />
        <h1>Lost or found a pet? 🤭</h1>
        <h2>We got this! 🦾</h2>

        <br />
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <Typography
              component="div"
              style={{ backgroundColor: "#cfe8fc", height: "0vh" }}
            />
            <form onSubmit={this.handleFormSubmit}>
              <label>
                <FormControl variant="outlined" style={{ paddingBottom: '20px', width: '200px'}}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Lost or found{" "}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={this.state.lostOrFound}
                    onChange={this.handleLostFoundChange}
                    label="lost or found "
                  >
                    <MenuItem value={this.state.lostOrFound}></MenuItem>
                    <MenuItem value="LOST">I have lost a pet </MenuItem>
                    <MenuItem value="FOUND">I have found a pet </MenuItem>
                  </Select>
                </FormControl>
              </label>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    id="Location"
                    label="Where?"
                    name="Location"
                    autoComplete="Enter location"
                    autoFocus
                    type="text"
                    value={this.state.location}
                    onChange={this.handleLocationChange}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    id="Date"
                    label="When?"
                    name="Date"
                    autoComplete="Date"
                    autoFocus
                    type="text"
                    value={this.state.date}
                    onChange={this.handleDateChange}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    id="Type"
                    label="What kind of animal is it?"
                    name="Type"
                    autoComplete="Type"
                    autoFocus
                    type="text"
                    value={this.state.typeOfPet}
                    onChange={this.handleTypeOfPetChange}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    fullWidth
                    required
                    id="Description of pet"
                    label="Description"
                    name="Description of pet"
                    autoComplete="Description of pet"
                    autoFocus
                    type="text"
                    value={this.state.descriptionOfPet}
                    onChange={this.handleDescriptionOfPetChange}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    fullWidth
                    id="Name of pet"
                    label="Name of pet"
                    name="Name of pet"
                    autoComplete="Name of pet"
                    autoFocus
                    type="text"
                    value={this.state.nameOfPet}
                    onChange={this.handleNameChange}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    fullWidth
                    id="Description"
                    label="Additional comments"
                    name="Description"
                    autoComplete="Description"
                    autoFocus
                    type="text"
                    value={this.state.textDescription}
                    onChange={this.handleDescriptionChange}
                  />
                </Grid>
              </Grid>
              <br />
              <div className="App">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  style={{color: '#F4A261'}}
                >
                  <PhotoCamera style={{marginRight: '12px'}} />
                  <input
                    id="uploadButton"
                    type="file"
                    onChange={this.handleFileUpload}
                    multiple
                  />
                </IconButton>

                <Button
                  style={{color: '#F4A261', border: ".03em solid #F4A261",}}
                  variant="outlined"
                  color="primary"
                  type="button"
                  startIcon={<CloudUpload style={{color: '#F4A261'}}/>}
                  onClick={this.submit}
                >
                  {" "}
                  Upload image{" "}
                </Button>
              </div>
              <br />

              <Button
                style={{backgroundColor: '#F4A261'}}
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </form>
          </Container>
        </React.Fragment>
      </div>
    );
  }
}
