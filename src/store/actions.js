import { SET_COLOR, SET_OPACITY, SET_LINE_WIDTH } from "./types";

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
