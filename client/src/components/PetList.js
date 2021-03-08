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
        return ((pet.typeofanimal.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1 
        || pet.textdescription.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1 
        || pet.descriptionofpet.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1 
        || pet.location.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1)
        && pet.lostorfound.toLowerCase() === this.props.value)
  });
  
    } else {
      filteredPets = this.state.allPets.filter((pet) => {
        return (pet.typeofanimal.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1 
        || pet.textdescription.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1 
        || pet.descriptionofpet.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1 
        || pet.location.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1)

  });
 }

    return (
      <div>
        {filteredPets.map((pet, index) => {
          console.log('pet: ', pet)
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