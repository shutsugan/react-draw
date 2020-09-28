import {
  SET_COLOR,
  SET_OPACITY,
  SET_LINE_WIDTH,
  SET_TOOL,
  SET_ZOOM,
  SET_DATA,
  UNDO,
} from "./types";

export const setColor = (color) => ({
  type: SET_COLOR,
  payload: { color },
});

export const setOpacity = (opacity) => ({
  type: SET_OPACITY,
  payload: { opacity },
});

export const setLineWidth = (lineWidth) => ({
  type: SET_LINE_WIDTH,
  payload: { lineWidth },
});

export const setTool = (tool) => ({
  type: SET_TOOL,
  payload: { tool },
});

export const setZoom = (zoom) => ({
  type: SET_ZOOM,
  payload: { zoom },
});

export const setData = (data) => ({
  type: SET_DATA,
  payload: { data },
});

export const undoLast = () => ({
  type: UNDO,
});
