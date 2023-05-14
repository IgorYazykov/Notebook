import React, { useContext } from "react";
import "../../constantsStyle/StyleForButtonsTool.css";
import WorkingWithBDContext from "../../store/Context";

export default function ButtonDelete() { 
  const { targetNote, setConfirmDelete } = useContext(WorkingWithBDContext);

  function handelDeleteNote() {
    setConfirmDelete(true);
  };

  return (
    <div className={ targetNote === null ? "disable" : "ConfigureButton" } onClick={ handelDeleteNote }>
      <img className="FixingToolImg" src="../../img/trashBin.png" alt="trashBin" />
    </div>
  );
}