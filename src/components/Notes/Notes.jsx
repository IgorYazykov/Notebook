import React from "react";
import "./Notes.css"

export default function Notes() {
  return (
    <div>
      <div className="NoteContainer">
        <p>Test Note</p>
        <p>test note discription</p>
      </div>
      <hr className="HrOfNotes"/>
    </div>
  );
}