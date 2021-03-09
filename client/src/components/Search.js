import React, { Component } from 'react';


class Search extends Component {
  
  handleLostFound = event => {
    this.props.setLostFoundProp(event.target.value);
  }

  handleChange = event => {
   this.props.setQueryProp(event.target.value)
  }

    render() {
      return (
        <div>
      <form className="search-form">
        <label>
         <h2> 🦔 🐁 🐉 Search Pets 🐉 🐁 🦔 </h2>
          <select className="select-lost-found" value={this.props.value} onChange={this.handleLostFound}>
            <option value="all">Search all</option>
            <option value="lost">Lost</option>
            <option value="found">Found</option>
          </select>
        </label>
        <input 
       className="search-window"
       type ="text"
       name ="query"
       value={this.props.query}
       onChange={this.handleChange}
       placeholder = "Search..."
       />
      </form>     
        </div>
      );
    }
}
   
  export default Search;
 