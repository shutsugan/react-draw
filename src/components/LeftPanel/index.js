import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setTool } from "../../store/actions";

import Brush from "../../assets/brush.svg";
import Erase from "../../assets/erase.svg";

const LeftPanel = () => {
  const dispatch = useDispatch();
  const currentTool = useSelector((state) => state.tool);

  const handleToolChange = (tool) => {
    dispatch(setTool(tool));
  };

  return (
    <div className="left-panel flex flex-col">
      <button
        className={`left-panel-button ${
          currentTool === "brush" ? "btn-active" : ""
        }`}
        onClick={() => handleToolChange("brush")}
      >
        <img src={Brush} alt="brush" />
      </button>
      <button
        className={`left-panel-button ${
          currentTool === "erase" ? "btn-active" : ""
        }`}
        onClick={() => handleToolChange("erase")}
      >
        <img src={Erase} alt="erase" />
      </button>
    </div>
  );
};

export default LeftPanel;
