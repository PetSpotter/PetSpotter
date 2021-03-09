import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import { makeStyles } from "@material-ui/core/styles";


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
        || pet.location.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1)
        && pet.lostOrFound.toLowerCase() === this.props.value)
  });
  
    } else {
      filteredPets = this.state.allPets.filter((pet) => {
        return (
          pet.typeOfPet.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1 
          || pet.location.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1
          )

  });
 }

    return (
      <div>
        {filteredPets.map((pet, index) => {
            return (

              <div key={index}>
              
                {/* <Card
                  style={{
                    maxWidth: 345,
                    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
                    backgroundColor: "#fafafa",
                  }}
                >
                  <CardMedia style={{ height: "300px" }} image={pet.pictureLink} />
                  <CardContent>
                    <Typography color="primary" variant="h5">
                      {pet.nameOfPet}
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle2">
                      {pet.location}
                    </Typography>
                  </CardContent>
                </Card> */}

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