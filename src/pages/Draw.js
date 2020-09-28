import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Canvas from "../components/Canvas";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import TopPanel from "../components/TopPanel";

import { undoLast } from "../store/actions";

const Draw = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleUndo = (event) => {
      const { key, ctrlKey } = event;

      if (key === "z" && ctrlKey) dispatch(undoLast());
    };

    document.addEventListener("keydown", handleUndo);

    return () => {
      document.removeEventListener("keydown", handleUndo);
    };
  }, [dispatch]);

  return (
    <div className="draw flex flex-col h-full">
      <TopPanel />

      <div className="draw flex h-full">
        <LeftPanel />
        <Canvas />
        <RightPanel />
      </div>
    </div>
  );
};

export default Draw;
