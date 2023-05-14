import React, { useContext } from "react";
import "./Notes.css"
import WorkingWithBDContext from "../../store/Context";

export default function Notes(props) {
  const { setTargetNote } = useContext(WorkingWithBDContext);

  function choiseTargetNote () {
    const id = props.id;
    setTargetNote(id);
  };

  return (
    <div>
      <div className="NoteContainer" onClick={ choiseTargetNote }>
        <p>{ props.title }</p>
        <p>{ props.discription }</p>
      </div>
      <hr className="HrOfNotes"/>
    </div>
  );
}
