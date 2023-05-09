import React from "react";
import ToolBar from "../components/ToolBar/ToolBar";
import DirectoryOfCreateNotes from "../components/DirectoryOfCreatedNotes/DirectoryOfCreateNotes";
import Workspace from "../components/Workspace/Workspace";
import "./WorkPage.css"

export default function WorkPage() {
  return(
    <div>
      <ToolBar/>
      <div className="TableSpaceContainer">
        <DirectoryOfCreateNotes/>
        <Workspace/>
      </div>
    </div>
  );
}