import { SET_COLOR, SET_OPACITY, SET_LINE_WIDTH } from "./types";

export const initialState = {
  color: "#000",
  opacity: 1,
  lineWidth: 2,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR: {
      const { color } = action.payload;

      return { ...state, color };
    }
    case SET_OPACITY: {
      const { opacity } = action.payload;

      return { ...state, opacity };
    }
    case SET_LINE_WIDTH: {
      const { lineWidth } = action.payload;

      return { ...state, lineWidth };
    }
    default:
      return state;
  }
};

export default reducer;
