import React, { useContext, useEffect, useState } from "react";
import "./Workspace.css"
import "../../constantsStyle/StyleForInput.css"
import WorkingWithBDContext from "../../store/Context";

export default function Workspace() {
  const  { 
    dataOfNotes, 
    targetNote, 
    updateTitle, 
    updateDiscription,
    banOnEdition
  } = useContext(WorkingWithBDContext);

  const [targetTitle, setTargetTitle] = useState("");
  const [targetDiscription, setTargetDiscription] = useState("");

  useEffect(()=>{
    if(targetNote !== null){
      dataOfNotes.map((note) => {
        if (note.id === targetNote) {
          setTargetTitle(note.title);
          setTargetDiscription(note.discription);
          return note;
        };
        return note;
      });
    };
  },[targetNote, dataOfNotes]);

  function chengeTitle(event) {
    updateTitle(event.target.value);
  };

  function chengeDiscription(event) {
    updateDiscription(event.target.value);
  };

  return (
    <div className="InputTextContainer">
      {
        targetNote === null ? (
          <div className="noteDoNotSelected">
            <p className="fontForInput warningEntry">
              First select the post you want to work with
            </p>
          </div>
        ) : (
          <div className="InputContainer">
            <input 
              disabled = { banOnEdition }
              className="inputTitleArea input fontInputTitle border"  
              type="text" 
              id="1"
              onChange={ chengeTitle }
              placeholder="Note title should be here"
              value={targetTitle}
            />
            <textarea 
              disabled = { banOnEdition }
              className="inputTextArea fontForInput input border" 
              name="userText" 
              id="2" 
              onChange={ chengeDiscription }
              placeholder="Enter your text"
              value={ targetDiscription } 
            />
          </div>
        )
      }
    </div>
  );
}
