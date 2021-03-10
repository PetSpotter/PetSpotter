import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default class PetDetails extends Component {

    state = {
    animal: null,
  }

  componentDidMount() {
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

  handleDelete = () => {
  const id = this.props.match.params.id;
  console.log("This is the IDDDD", id);
  axios.delete(`/api/${id}`)
    .then(res => {
      console.log(res.data)
      this.props.history.push("/")
    }
    );
  }

  render() {
    if (this.state.animal === null) {
      return <h3>Animal Not Found</h3>;
    }
    return (
      <div>
        <h1>Pet Details </h1>
        <p>{this.state.animal.nameOfPet}</p>
        <p>
          <img src={this.state.animal.pictureLink} alt="pet" />
        </p>
        <p>{this.state.animal.lostOrFound}</p>
        <p>{this.state.animal.date}</p>
        <p>Type of animal:{this.state.animal.typeOfPet}</p>
        <p>Colour:{this.state.animal.colourOfPet}</p>
        <p>Description:{this.state.animal.descriptionOfPet}</p>
        <h3>Contact information</h3>
        <p>
          {this.state.animal.firstName}
          {this.state.animal.lastName}
        </p>
        <p>{this.state.animal.phone}</p>
        <p>{this.state.animal.email}</p>
        <button onClick={this.handleDelete}>Delete this effing animal</button>
        <Link to={`/${this.props.match.params.id}/update`}><button onClick={this.handleUpdate}>Update this effing animal</button></Link>
      </div>
    );
  }
}
