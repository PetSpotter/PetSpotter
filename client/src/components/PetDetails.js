import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import DraftsIcon from "@material-ui/icons/Drafts";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PetsIcon from "@material-ui/icons/Pets";
import TodayIcon from "@material-ui/icons/Today";
import HighlightIcon from "@material-ui/icons/Highlight";
import CommentIcon from "@material-ui/icons/Comment";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

export default class PetDetails extends Component {
  state = {
    animal: null,
  };

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
    axios.delete(`/api/${id}`).then((res) => {
      console.log(res.data);
      this.props.history.push("/");
    });
  };

  render() {
    if (this.state.animal === null) {
      return <h3>Animal Not Found</h3>;
    }
    return (
      <div>
        <React.Fragment>
          <CssBaseline />

          <Container  maxWidth="sm">
            <h1>Pet Details </h1>
            <Typography
              component="div"
              style={{ backgroundColor: "#ecf1f3", borderRadius: '10px' }}
            >
              <List>
                <ListItem style={{lineHeight: '0.4em'}}>
                  <h3>{this.state.animal.nameOfPet}</h3>
                </ListItem>
              </List>
              </Typography>

            <GridList cellHeight={400} cols={1}>
              <GridListTile>
                <img src={this.state.animal.pictureLink} alt="pet" style={{padding: '20px 0px 20px 0px'}} />
              </GridListTile>
            </GridList>

          </Container>

          <Container maxWidth="sm">
            <Typography
              component="div"
              style={{ backgroundColor: "#ecf1f3", borderRadius: '10px' }}
            >
              <List component="nav" aria-label="main mailbox folders">
                <ListItem>
                  <ListItemIcon>
                    <HighlightIcon />
                  </ListItemIcon>
                  <ListItemText primary={this.state.animal.lostOrFound} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <TodayIcon />
                  </ListItemIcon>
                  <ListItemText primary={this.state.animal.date} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText primary={this.state.animal.location} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <PetsIcon />
                  </ListItemIcon>
                  <ListItemText primary={this.state.animal.typeOfPet} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <BorderColorIcon />
                  </ListItemIcon>
                  <ListItemText primary={this.state.animal.descriptionOfPet} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <CommentIcon />
                  </ListItemIcon>
                  <ListItemText primary={this.state.animal.textDescription} />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Contact information" />
                </ListItem>
              </List>
            </Typography>
          </Container>

          <Container maxWidth="sm" style={{ paddingBottom: '30px'}} >
          
          <p>
            {this.state.animal.firstName}
            {this.state.animal.lastName}
          </p>
          <p>{this.state.animal.phone}</p>
          <p>{this.state.animal.email}</p>

          <IconButton aria-label="delete" onClick={this.handleDelete}>
            <DeleteIcon fontSize="large" />
          </IconButton>

          <Link
            to={`/${this.props.match.params.id}/update`}
            style={{ textDecoration: "none" }}
          >
            <Button
              style={{ backgroundColor: "#F4A261"}}
              onClick={this.handleUpdate}
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
            >
              Update Pet
            </Button>
          </Link>
          </Container>
        </React.Fragment>
      </div>
    );
  }
}
