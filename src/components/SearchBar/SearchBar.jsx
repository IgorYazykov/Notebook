import React, { useContext } from "react"
import "./SearchBar.css"
import "../../constantsStyle/StyleForInput.css"
import WorkingWithBDContext from "../../store/Context";

export default function SearchBar() {
  const { setFilter } = useContext(WorkingWithBDContext);

  function searchText(event) {
    setFilter(event.target.value);
  };

  return (
    <div className="searchBarContainer">
      <input className="input searchBar" type="text" placeholder="Search" onChange={ searchText }/>
    </div>
  );
}