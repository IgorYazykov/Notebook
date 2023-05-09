import React from "react"
import "./SearchBar.css"
import "../../constantsStyle/StyleForInput.css"

export default function SearchBar() {
  return (
    <div className="searchBarContainer">
      <input className="input searchBar" type="text" placeholder="Search"/>
    </div>
  );
}