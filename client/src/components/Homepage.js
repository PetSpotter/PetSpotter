import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import AnimalsList from "../components/AnimalsList";

const Homepage = () => {
  return (
    <div>
      <div>
        <h3>Hi!</h3>
        <h1>This is Home 🏚</h1>
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
        <AnimalsList />
      </div>
    </div>
  );
};

export default Homepage;
