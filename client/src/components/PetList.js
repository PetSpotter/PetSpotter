import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class PetList extends React.Component {
  state = {
    allPets: []
  };

  getAllPets = () => {
    axios
      .get("http://localhost:5005/api")
      .then(response => {
        const data = response.data;
        this.setState({
          allPets: data
        });
      })
      .catch((err) => console.log('Error: ', err));
  };

  componentDidMount() {
    this.getAllPets();
  }

  render() {
    return (
      <div>
        {this.state.allPets.map((pet, index) => {
            return (
              <div key={index}>
              <h5>{pet.lostorfound}</h5>
                   <Link to={`/${pet._id}`} ><img src={pet.picturelink} alt="pet" /></Link>
                    <h5>{pet.nameofpet}</h5>
                    <h5>{pet.location}</h5>
              </div>
           )
        })}
      </div>
    );
  }
}