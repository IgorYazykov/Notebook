import React from "react";
import "./Workspace.css"
import "../../constantsStyle/StyleForInput.css"

export default function Workspace() {
  return (
    <div className="InputTextContainer">
      <input className="inputTitleArea fontForInput input" placeholder="Note title should be here" type="text" />
      <textarea className="inputTextArea fontForInput input" name="userText" placeholder="Enter your text" id="1"/>
    </div>
  );
}