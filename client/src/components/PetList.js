import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';

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
        <Container>
          <Grid container spacing={3} style={{paddingTop: '50px'}}>
            {filteredPets.map( pet => {
              return (
                <div>
                  <Grid item xs key={pet._id} style={{padding: '20px', textDecoration: 'none'}}>
                      <Card style={{
                            minWidth: 300,
                            boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
                            backgroundColor: "#fafafa",
                            borderRadius:'10px'
                          }}
                      >
                       <CardContent style={{backgroundColor: '#e76f51', padding:'0px'}}>
                          <Typography variant="h6" style={{color: '#fff',fontWeight: 600, padding: '7px 0px'}}>
                            {pet.lostOrFound}
                          </Typography>
                        </CardContent>
                          
                        <CardMedia style={{ height: "250px" }} image={pet.pictureLink} />

                        <CardContent style={{textAlign: 'left'}}>
                          <Typography color="primary" variant="h6">
                            {pet.nameOfPet}
                          </Typography>
                          <Typography color="textSecondary" variant="subtitle2">
                            {pet.location}
                          </Typography>
                        </CardContent>
                        <CardContent style={{textAlign: 'right', margin:'0px', padding:'0px 15px 15px 15px'}}>
                          <Link to={`/${pet._id}`} >
                            <Button variant="contained" style={{backgroundColor: '#2a9d8f', color: '#fff'}}>
                              Details
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    
                  </Grid>
                </div>
              )
            })}
          </Grid>
        </Container>
      </div>
    );
  }
}