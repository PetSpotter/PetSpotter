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
let filteredPets = []

    if (this.props.value !== "all") {
       filteredPets = this.state.allPets.filter((pet) => {
        return ((pet.typeOfPet.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1 
        || pet.textDescription.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1 
        || pet.descriptionOfPet.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1 
        || pet.location.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1)
        && pet.lostOrFound.toLowerCase() === this.props.value)
  });
  
    } else {
      filteredPets = this.state.allPets.filter((pet) => {
        return (pet.typeOfPet.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1 
        || pet.textDescription.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1 
        || pet.descriptionOfPet.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1 
        || pet.location.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1)

  });
 }

    return (
      <div>
        {filteredPets.map((pet, index) => {
          console.log('pet: ', pet)
            return (
              <div key={index}>
              <h5>{pet.lostOrFound}</h5>
                   <Link to={`/${pet._id}`} ><img src={pet.pictureLink} alt="pet" /></Link>
                    <h5>{pet.nameOfPet}</h5>
                    <h5>{pet.location}</h5>
              </div>
           )
        })}
      </div>
    );
  }
}