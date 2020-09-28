import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setData } from "../../store/actions";

const Canvas = () => {
  const dispatch = useDispatch();
  const canvas = useRef(null);
  const canvasWrapper = useRef(null);

  const [context, setContext] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [prevX, setPrevX] = useState(0);
  const [prevY, setPrevY] = useState(0);
  const [ppts, setPpts] = useState([]);

  const color = useSelector((state) => state.color);
  const opacity = useSelector((state) => state.opacity);
  const lineWidth = useSelector((state) => state.lineWidth);
  const tool = useSelector((state) => state.tool);
  const zoom = useSelector((state) => state.zoom);
  const pptsData = useSelector((state) => state.pptsData);

  useEffect(() => {
    const c = canvas.current;
    const { clientWidth, clientHeight } = canvasWrapper.current;

    c.width = clientWidth;
    c.height = clientHeight;

    const currentContext = c.getContext("2d");

    setContext(currentContext);

    if (pptsData.length) {
      pptsData.forEach((data) => drawFromData(data, currentContext));
    }
  }, [pptsData]);

  const setContextOptions = (ctx, options) => {
    const {
      color: ctsColor,
      opacity: ctxOpacity,
      lineWidth: ctxLineWidth,
      tool: ctxTool,
    } = options;

    ctx.strokeStyle = ctsColor;
    ctx.globalAlpha = ctxOpacity;
    ctx.lineWidth = ctxLineWidth;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    if (ctxTool === "erase") {
      ctx.globalCompositeOperation = "destination-out";
    } else {
      ctx.globalCompositeOperation = "source-over";
    }
  };

  const draw = (x, y) => {
    if (isDrawing) {
      context.beginPath();
      setContextOptions(context, { color, opacity, lineWidth, tool, zoom });
      context.moveTo(prevX, prevY);
      context.lineTo(x, y);
      context.closePath();
      context.stroke();
    }

    setPpts(isDrawing ? [...ppts, { x, y }] : [...ppts]);
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
    dispatch(setData({ ppts, color, opacity, lineWidth, zoom, tool }));
    setPpts([]);
  };

  const getMounsePosition = (event) => {
    const { offsetTop, offsetLeft } = event.target;
    const currentX = event.clientX - offsetLeft;
    const currentY = event.clientY - offsetTop;

    return { currentX, currentY };
  };

  const drawFromData = (data, currentContext) => {
    const { ppts: points } = data;

    if (points.length) {
      currentContext.beginPath();
      setContextOptions(currentContext, data);
      currentContext.moveTo(points[0].x, points[0].y);

      for (var i = 1; i < points.length - 1; i++) {
        var c = (points[i].x + points[i + 1].x) / 2;
        var d = (points[i].y + points[i + 1].y) / 2;

        currentContext.quadraticCurveTo(points[i].x, points[i].y, c, d);
      }

      currentContext.stroke();
    }
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
        // style={{ transform: `scale(${zoom})` }}
      />
    </div>
  );
};

export default Canvas;
