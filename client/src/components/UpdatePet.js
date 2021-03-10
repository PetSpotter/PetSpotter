import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import service from './api/service'

export default class addPet extends Component {
  constructor(props) {
    super(props);
  
    this.state = {

  }
  this.id = props.match.params.id;
}

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`/api/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          state: response.data,
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
    const id = this.props.match.params.id;
    console.log(updatedPet);
  axios.put(`/api/${this.id}`, updatedPet)
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

    handleDescriptionChange = event => {
      console.log(event.target.value);
      this.setState({
          textDescription: event.target.value
      })
  }

  handleDateChange = event => {
    console.log(event.target.value);
    this.setState({
        date: event.target.value
    })
}

handleLostFoundChange = event => {
  console.log(event.target.value);
  this.setState({
      lostOrFound: event.target.value
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
        <form onSubmit={this.handleFormSubmit}>
          <label>Name of pet:</label>
          <input type="text" name="nameOfPet" value={this.state.nameOfPet} placeholder = {this.state.nameOfPet} onChange={this.handleNameChange}/>
          <label>Location:</label>
          <input type="text" name="location" value={this.state.location} placeholder = "Enter location" onChange={this.handleLocationChange}/>
          <label>
          <select className="select-lost-found" value={this.state.lostOrFound} onChange={this.handleLostFoundChange}>
            <option value="lost">Lost</option>
            <option value="found">Found</option>
          </select>
        </label>
        <label>Description:</label>
          <input type="text" name="description" value={this.state.textDescription} placeholder = "Describe the animal" onChange={this.handleDescriptionChange}/>
          <label>Date:</label>
          <input type="text" name="date" value={this.state.date} placeholder = "When did you lose/find" onChange={this.handleDateChange}/>
          <button type='submit'>Submit</button>
          <div className="App">
       <input type="file" name="avatar" onChange={this.handleFileUpload} />
       <button type="button" onClick={this.submit} > Upload </button>
      </div>
        </form>
      </div>
    )
  }

}

