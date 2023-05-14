import React, { useContext, useEffect, useState } from "react";
import "./Workspace.css"
import "../../constantsStyle/StyleForInput.css"
import WorkingWithBDContext from "../../store/Context";

export default function Workspace() {
  const  { 
    dataOfNotes, 
    targetNote, 
    updateTitle, 
    updateDiscription 
  } = useContext(WorkingWithBDContext);

  const [targetTitle, setTargetTitle] = useState("");
  const [targetDiscription, setTargetDiscription] = useState("")

  useEffect(()=>{
    if(targetNote !== null){
      setTargetTitle(dataOfNotes[targetNote - 1].title);
      setTargetDiscription(dataOfNotes[targetNote - 1].discription);
    };
  },[targetNote, dataOfNotes]);

  function chengeTitle(event) {
    updateTitle(event.target.value)
  }

  function chengeDiscription(event) {
    updateDiscription(event.target.value)
  }

  return (
    <div className="InputTextContainer">
      {
        targetNote === null ? (
          <div className="noteDoNotSelected">
            <p className="fontForInput warningEntry">First select the post you want to work with</p>
          </div>
        ) : (
          <div className="InputContainer">
            <input 
              className="inputTitleArea fontForInput input fontInputTitle"  
              type="text" 
              id="1"
              onChange={ chengeTitle }
              placeholder="Note title should be here"
              value={targetTitle}
            />
            <textarea 
              className="inputTextArea fontForInput input" 
              name="userText" 
              id="2" 
              onChange={ chengeDiscription }
              placeholder="Enter your text"
              value={targetDiscription}
            />
          </div>
        )
      }
    </div>
  );
}
