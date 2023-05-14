import React, { useState } from "react";
import ToolBar from "../components/ToolBar/ToolBar";
import DirectoryOfCreateNotes from "../components/DirectoryOfCreatedNotes/DirectoryOfCreateNotes";
import Workspace from "../components/Workspace/Workspace";
import WorkingWithBDContext from "../store/Context";
import "./WorkPage.css"
import { db } from "../dexieDataBase/dexieDataBase";
import { useLiveQuery } from "dexie-react-hooks";

export default function WorkPage() {
  const [targetNote, setTargetNote] = useState(null);
  const [filter, setFilter] = useState("");
  const [banOnEdition, setBanOnEdition] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState(false);

  let dataOfNotes = useLiveQuery(() => db.table("note").toArray() );

  const handleAddingNote = async () => {
    try {
      await db.table("note").add({ title: "New note", discription: "" });
      if (dataOfNotes.length === 0) {
        setTargetNote(null);
      } 
    } catch (error) {
      console.log(error)
    }
  }

  if (dataOfNotes === undefined ){
    dataOfNotes = [];
  };

  function updateTitle(newTitle) {
    db.table("note").update(targetNote, { title: newTitle });
  };

  function updateDiscription(newDiscription) {
    db.table("note").update(targetNote, { discription: newDiscription });
  };

  function deleteNote() {
    setConfirmDelete(false);
    db.table("note").delete(targetNote);
    setTargetNote(null);
  };

  function cancelDelete() {
    setConfirmDelete(false);
  };

  return(
    <div>
      <WorkingWithBDContext.Provider value={
        {
          dataOfNotes,
          handleAddingNote,
          targetNote,
          setTargetNote,
          setFilter,
          setBanOnEdition,
          setConfirmDelete
        }
      }>
        <ToolBar/>
      </WorkingWithBDContext.Provider>
      <div className="TableSpaceContainer">
        <WorkingWithBDContext.Provider value={
          {
            dataOfNotes,
            setTargetNote,
            targetNote,
            updateTitle,
            updateDiscription,
            filter,
            banOnEdition
          }
        }>
          <DirectoryOfCreateNotes/>
          <Workspace/>
        </WorkingWithBDContext.Provider>
      </div>
      {
        confirmDelete && <div className="singContainer">
          <div className="singBox">
            <div className="imgClose" onClick={cancelDelete}>
              <img src="../../img/close.png" alt="close" className="sizeOfImg"/>
            </div>
            <div className="containerOfMessage">
              <p className="messageFont">
                Are you sure?
              </p>
            </div>
            <div className="buttonConfirm" onClick={deleteNote}>
              <p className="confirmMessadgeFont">Yes</p>
            </div>    
          </div>
        </div>
      }
    </div>
  );
}
