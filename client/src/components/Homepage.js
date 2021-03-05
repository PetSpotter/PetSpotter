import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import PetList from "./PetList";

const Homepage = () => {
  return (
    <div>
      <div>
        <h1>Pet Spotter</h1>
      </div>
      <ul className="links">
        <li>
          <Link to="/Signup">Signup</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/AddPet">Add a Pet</Link>
        </li>
      </ul>
      <div>
        <Search />
      </div>
      <div>
        <PetList />
      </div>
    </div>
  );
};

export default Homepage;
