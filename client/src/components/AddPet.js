import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

export default class addPet extends Component {

  state = { 
    nameOfPet: '',
    location: '',
    lostOrFound: 'lost',
    textDescription: '',
    date: '',
    descriptionOfPet: '',
    typeOfPet: '',
    colourOfPet: '',
  }
  handleFormSubmit = event => {
    event.preventDefault();
    const { nameOfPet, location, lostOrFound, textDescription, date, descriptionOfPet, typeOfPet, colourOfPet } = this.state;
    const newPet = {
      nameOfPet,
      location,
      lostOrFound,
      textDescription,
      date,
      descriptionOfPet,
      typeOfPet,
      colourOfPet,
        id: uuid()
    };

    axios.post('http://localhost:5005/api/', newPet)
    this.setState({
      nameOfPet: '',
      location: '',
      lostOrFound: 'lost',
      textDescription: '',
      date: '',
      descriptionOfPet: '',
      typeOfPet: '',
      colourOfPet: '',
    });
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
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name of pet:</label>
          <input type="text" name="nameOfPet" value={this.state.nameOfPet} placeholder = "Enter name if known" onChange={this.handleNameChange}/>
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
        </form>
      </div>
    )
  }

}

