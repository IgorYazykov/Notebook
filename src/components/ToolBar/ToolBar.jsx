import React from "react";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import ButtonDelete from "../ButtonDelete/ButtonDelete";
import ButtonEdditing from "../ButtonEditing/ButtonEditing";
import SearchBar from "../SearchBar/SearchBar";
import "./ToolBar.css"

export default function ToolBar() {
  return (
    <div className="toolsContainer">
      <div className="buttonContainer">
        <ButtonAdd/>
        <ButtonDelete/>
        <ButtonEdditing/>
      </div>
      <SearchBar/>
    </div>
  );
}