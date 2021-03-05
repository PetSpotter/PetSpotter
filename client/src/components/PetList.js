import React from "react";
import axios from "axios";
import { Link } from 'react';

export default class PetList extends React.Component {
  state = {
    allPets: []
  };

  getAllPets = () => {
    axios
      .get("http://localhost:5005/api")
      .then(response => {
        const data = response.data;
        console.log('Pet data: ', data);
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
        {this.state.allPets.map(pet => {
          console.log('pet: ', pet)
            return (
              <div>
                    {/* <Link to={`/${pet._id}`} >Link</Link> */}
                    <img src={pet.picturelink} alt="pet" />
                    <h5>{pet.nameofpet}</h5>
                    <h5>{pet.lostorfound}</h5>
                    <h5>{pet.location}</h5>
              </div>
           )
        })}
      </div>
    );
  }
}
