import React from "react";
import Search from "./Search";
import PetList from "./PetList";

export default class Homepage extends React.Component {

  state = {
    query: "",
    value: 'all',
  };

setQuery = queryParam => {
   this.setState({
     query: queryParam
   })
}

setLostFound = LostFoundParam => {
  this.setState({
    value: LostFoundParam
  })
}

render() {
  return (
    <div>
      <div>
   
        <Search 
          query={this.state.query}
          setQueryProp={this.setQuery}
          value={this.state.value}
          setLostFoundProp={this.setLostFound}
        />
      </div>

      <div>
        <PetList
        query={this.state.query}
        value={this.state.value}
         />
      </div>
      
    </div>
  );
};
}
