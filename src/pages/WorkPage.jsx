import React, { useEffect, useState } from "react";
import ToolBar from "../components/ToolBar/ToolBar";
import DirectoryOfCreateNotes from "../components/DirectoryOfCreatedNotes/DirectoryOfCreateNotes";
import Workspace from "../components/Workspace/Workspace";
import WorkingWithBDContext from "../store/Context";
import "./WorkPage.css"
import { db } from "../dexieDataBase/dexieDataBase";
import { useLiveQuery } from "dexie-react-hooks";

export default function WorkPage() {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [targetNote, setTargetNote] = useState(null);
  const [filter, setFilter] = useState("");

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
    db.table("note").update(targetNote, { title: newTitle })
  }

  function updateDiscription(newDiscription) {
    db.table("note").update(targetNote, { discription: newDiscription })
  }

  return(
    <div>
      <WorkingWithBDContext.Provider value={
        {
          dataOfNotes,
          handleAddingNote,
          setTitle,
          setDiscription,
          targetNote,
          setTargetNote,
          setFilter
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
            setTitle,
            setDiscription,
            title,
            discription,
            updateTitle,
            updateDiscription,
            filter
          }
        }>
          <DirectoryOfCreateNotes/>
          <Workspace/>
        </WorkingWithBDContext.Provider>
      </div>
    </div>
  );
}
