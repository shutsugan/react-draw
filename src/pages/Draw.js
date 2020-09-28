import React from "react";

import Canvas from "../components/Canvas";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import TopPanel from "../components/TopPanel";

const Draw = () => (
  <div className="draw flex flex-col h-full">
    <TopPanel />
    <div className="draw flex h-full">
      <LeftPanel />
      <Canvas />
      <RightPanel />
    </div>
  </div>
);

export default Draw;
