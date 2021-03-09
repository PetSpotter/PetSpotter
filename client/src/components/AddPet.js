import React, { Component } from 'react';

class addPet extends Component {
  state = { 
    nameOfPet: '',
     
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.nameOfPet} />

          <button>Submit</button>
        </form>
      </div>
    )
  }




export default addPet;