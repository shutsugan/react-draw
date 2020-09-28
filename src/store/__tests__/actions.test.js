import * as actions from "../actions";
import * as types from "../types";

export const color = "#000";
export const opacity = 1;
export const lineWidth = 1;
export const tool = "brush";
export const zoom = 1;
export const data = { color, opacity };

describe("actions", () => {
  test("should set color", () => {
    const expectedAction = {
      type: types.SET_COLOR,
      payload: { color },
    };

    expect(actions.setColor(color)).toEqual(expectedAction);
  });

  test("Should set opacity", () => {
    const expectedAction = {
      type: types.SET_OPACITY,
      payload: { opacity },
    };

    expect(actions.setOpacity(opacity)).toEqual(expectedAction);
  });

  test("Should set lineWidth", () => {
    const expectedAction = {
      type: types.SET_LINE_WIDTH,
      payload: { lineWidth },
    };

    expect(actions.setLineWidth(lineWidth)).toEqual(expectedAction);
  });

  test("Should toggle tool", () => {
    const expectedAction = {
      type: types.SET_TOOL,
      payload: { tool },
    };

    expect(actions.setTool(tool)).toEqual(expectedAction);
  });

  test("Should set zoom", () => {
    const expectedAction = {
      type: types.SET_ZOOM,
      payload: { zoom },
    };

    expect(actions.setZoom(zoom)).toEqual(expectedAction);
  });

  test("Should set data", () => {
    const expectedAction = {
      type: types.SET_DATA,
      payload: { data },
    };

    expect(actions.setData(data)).toEqual(expectedAction);
  });

  test("Should undo the last draw action", () => {
    const expectedAction = {
      type: types.UNDO,
    };

    expect(actions.undoLast()).toEqual(expectedAction);
  });
});
