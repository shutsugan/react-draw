import React from "react";
import { useSelector } from "react-redux";

const Cursor = ({ x, y }) => {
  const lineWidth = useSelector((state) => state.lineWidth);
  const cursorStyle = {
    width: `${lineWidth}px`,
    height: `${lineWidth}px`,
    top: y - lineWidth / 2,
    left: x - lineWidth / 2,
  };

  return <div className="cursor" style={cursorStyle}></div>;
};

export default Cursor;
