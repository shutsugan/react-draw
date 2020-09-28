import {
  SET_COLOR,
  SET_OPACITY,
  SET_LINE_WIDTH,
  SET_TOOL,
  SET_ZOOM,
  SET_DATA,
  UNDO,
} from "./types";

export const initialState = {
  color: "#000",
  opacity: 1,
  lineWidth: 2,
  tool: "brush",
  zoom: 1,
  pptsData: [],
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
    case SET_TOOL: {
      const { tool } = action.payload;

      return { ...state, tool };
    }
    case SET_ZOOM: {
      const { zoom } = action.payload;

      return { ...state, zoom };
    }
    case SET_DATA: {
      const { data } = action.payload;

      return {
        ...state,
        pptsData: Array.isArray(data) ? data : [...state.pptsData, data],
      };
    }
    case UNDO: {
      return {
        ...state,
        pptsData: [...state.pptsData.slice(0, -1)],
      };
    }
    default:
      return state;
  }
};

export default reducer;
