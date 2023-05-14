import React, { useContext } from "react";
import "../../constantsStyle/StyleForButtonsTool.css";
import WorkingWithBDContext from "../../store/Context";

export default function ButtonAdd() {
  const { handleAddingNote }= useContext(WorkingWithBDContext)

  function hendleAdd() {
    handleAddingNote();
  };

  return (
    <div className="ConfigureButton" onClick={hendleAdd} >
      <img className="FixingToolImg" src="../../img/plus.png" alt="plus" />
    </div>
  );
}
