import React from "react";
import Search from "./Search";
import PetList from "./PetList";

const Homepage = () => {
  return (
    <div>
      <div>
        <h1>Pet Spotter</h1>
      </div>
      
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
