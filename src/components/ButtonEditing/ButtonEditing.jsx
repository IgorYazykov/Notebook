import React, { useContext, useEffect, useState } from "react";
import "../../constantsStyle/StyleForButtonsTool.css";
import WorkingWithBDContext from "../../store/Context";

export default function ButtonEdditing() {
  const { targetNote, setBanOnEdition } = useContext(WorkingWithBDContext);
  const [controleTargetNote, setContoleTargetNote] = useState(-1);

  useEffect(() => {
    if (controleTargetNote !== targetNote) {
      setContoleTargetNote(targetNote);
    };
    setBanOnEdition(true);
  },[targetNote, controleTargetNote, setBanOnEdition]);

  function hendelStartingEdition() {
    setBanOnEdition(false);
  };

  return (
    <div className={ targetNote === null ? "disable" : "ConfigureButton" } onClick={ hendelStartingEdition }>
      <img className="FixingToolImg" src="../../img/pen.png" alt="trashBin" />
    </div>
  )
}