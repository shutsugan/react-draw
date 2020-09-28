import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Canvas = () => {
  const canvas = useRef(null);
  const canvasWrapper = useRef(null);
  const [context, setContext] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [prevX, setPrevX] = useState(0);
  const [prevY, setPrevY] = useState(0);

  const color = useSelector((state) => state.color);
  const opacity = useSelector((state) => state.opacity);
  const lineWidth = useSelector((state) => state.lineWidth);

  useEffect(() => {
    const c = canvas.current;
    const { clientWidth, clientHeight } = canvasWrapper.current;

    c.width = clientWidth;
    c.height = clientHeight;

    setContext(c.getContext("2d"));
  }, []);

  const draw = (x, y) => {
    if (isDrawing) {
      context.beginPath();
      context.strokeStyle = color;
      context.globalAlpha = opacity;
      context.lineWidth = lineWidth;
      context.lineJoin = "round";
      context.lineCap = "round";

      context.moveTo(prevX, prevY);
      context.lineTo(x, y);
      context.closePath();
      context.stroke();
    }

    setPrevX(x);
    setPrevY(y);
  };

  const initDrawing = (event) => {
    const { currentX, currentY } = getMounsePosition(event);

    draw(currentX, currentY);
    setIsDrawing(true);
  };

  const startDrawing = (event) => {
    const { currentX, currentY } = getMounsePosition(event);
    draw(currentX, currentY);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const { width, height } = context.canvas;

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, width, height);
  };

  const getMounsePosition = (event) => {
    const { offsetTop, offsetLeft } = event.target;
    const currentX = event.clientX - offsetLeft;
    const currentY = event.clientY - offsetTop;

    return { currentX, currentY };
  };

  return (
    <div ref={canvasWrapper} className="canvas-wrapper w-full h-full">
      <canvas
        ref={canvas}
        className="canvas"
        onMouseDown={initDrawing}
        onMouseMove={startDrawing}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
    </div>
  );
};

export default Canvas;
