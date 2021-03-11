import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import service from './api/service'
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default class addPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: null,
    }
 this.id = props.match.params.id;
}

  componentDidMount = () =>{
    const id = this.props.match.params.id;
    axios
      .get(`/api/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          animal: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { nameOfPet, location, lostOrFound, textDescription, date, descriptionOfPet, typeOfPet, colourOfPet, pictureLink, } = this.state;
    const updatedPet = {
      nameOfPet,
      location,
      lostOrFound,
      textDescription,
      date,
      descriptionOfPet,
      typeOfPet,
      colourOfPet,
      pictureLink,
        id: uuid()
    };
  //  const id = this.props.match.params.id;
    console.log(updatedPet);
  axios.put(`/api/${this.id}`, updatedPet)
    .then(res => {
      this.props.history.push("/")
    }
    );
  }


    handleNameChange = event => {
        console.log(event.target.value);
        this.setState({
            nameOfPet: event.target.value
        })
    }

    handleLocationChange = event => {
        console.log(event.target.value);
        this.setState({
            location: event.target.value
        })
    }

    handleDescriptionOfPetChange = event => {
      console.log(event.target.value);
      this.setState({
          descriptionOfPet: event.target.value
      })
  }

    handleDescriptionChange = event => {
      console.log(event.target.value);
      this.setState({
          textDescription: event.target.value
      })
  }

  handleTypeOfPetChange = event => {
    console.log(event.target.value);
    this.setState({
        typeOfPet: event.target.value
    })
}

  handleDateChange = event => {
    console.log(event.target.value);
    this.setState({
        date: event.target.value
    })
}

handleFileUpload = e => {
  console.log('The file to be uploaded is: ', e.target.files[0]);

  const uploadData = new FormData();
  uploadData.append('pictureLink', e.target.files[0]);

  service
    .handleUpload(uploadData)
    .then(response => {
      this.setState({ pictureLink: response.secure_url });
    })
    .catch(err => {
      console.log('Error while uploading the file: ', err);
    });
};



  render() {
    
    return (
      <div>
      <h1>Update Information</h1>
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '0vh' }} />
        <form onSubmit={this.handleFormSubmit}>
        
        <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
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
                  fullWidth
                  
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
              <br/>
          <div className="App">
          <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
          <input type="file" onChange={this.handleFileUpload}  />
        </IconButton>
       
       <Button variant="outlined" color="primary" type="button" onClick={this.submit} > Upload image </Button>
  
      </div>
      <br/>
      
      <Button
        variant="contained"
        color="primary"
        type='submit'
        size="large"
        startIcon={<SaveIcon />}
      >
        Save changes
      </Button>
        </form>
        </Container>
    </React.Fragment>
      
      </div>
    )
  }

}

