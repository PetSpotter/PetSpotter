import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DraftsIcon from '@material-ui/icons/Drafts';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PetsIcon from '@material-ui/icons/Pets';
import TodayIcon from '@material-ui/icons/Today';
import HighlightIcon from '@material-ui/icons/Highlight';
import CommentIcon from '@material-ui/icons/Comment';
import BorderColorIcon from '@material-ui/icons/BorderColor';


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
       <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#ecf1f3', borderRadius: 20 }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
          
            <HighlightIcon />
          </ListItemIcon>
          <ListItemText primary={this.state.animal.lostOrFound} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <TodayIcon />
          </ListItemIcon>
          <ListItemText primary={this.state.animal.date} />
        </ListItem>
        <Divider />
      <ListItem button>
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText primary={this.state.animal.location} />
        </ListItem>
        <Divider />
      <ListItem button>
          <ListItemIcon>
            <PetsIcon />
          </ListItemIcon>
          <ListItemText primary={this.state.animal.typeOfPet} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
          <BorderColorIcon />
          </ListItemIcon>
          <ListItemText primary={this.state.animal.descriptionOfPet} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <CommentIcon />
          </ListItemIcon>
          <ListItemText primary={this.state.animal.textDescription} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Contact information" />
        </ListItem>
        </List>
        
        </Typography>
      </Container>
        <p>
          {this.state.animal.firstName}
          {this.state.animal.lastName}
        </p>
        <p>{this.state.animal.phone}</p>
        <p>{this.state.animal.email}</p>
      
        <IconButton aria-label="delete" onClick={this.handleDelete}>
          <DeleteIcon fontSize="large"/> 
        </IconButton>
  
        <Link to={`/${this.props.match.params.id}/update`} style={{textDecoration:'none'}}>
        <Button
        onClick={this.handleUpdate}
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SaveIcon />}
      >
        Update Pet
      </Button></Link>
      
      
    </React.Fragment>
      </div>
    );
  }
}
