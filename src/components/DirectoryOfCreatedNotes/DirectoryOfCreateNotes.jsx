import React, { useContext, useEffect, useState } from "react";
import "./DirectoryOfCreateNotes.css";
import Notes from "../Notes/Notes";
import WorkingWithBDContext from "../../store/Context";

export default function DirectoryOfCreateNotes() {
  const { dataOfNotes, filter } = useContext(WorkingWithBDContext);

  const [filteringArr, setFilteringArr] = useState([]);

  useEffect(() => {
    setFilteringArr(dataOfNotes);
    setFilteringArr(dataOfNotes.filter((note) => note.title.toLowerCase().includes(filter.toLowerCase())));
  },[filter, dataOfNotes]);

  return (
	  <div className="NotesContainer">
      {
        filteringArr.map((note) => {
           return <Notes 
            key={note.id}
            id={note.id}
            title={note.title}
            discription={note.discription}
          />
        })
      }
	  </div>
  );
}
