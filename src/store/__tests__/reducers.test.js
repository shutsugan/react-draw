import reducer from "../reducers";
import * as types from "../types";
import { initialState } from "../reducers";

import { color, opacity, lineWidth, tool, zoom } from "./actions.test";

describe("Reducer", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_COLOR", () => {
    expect(
      reducer(initialState, {
        type: types.SET_COLOR,
        payload: { color },
      })
    ).toEqual({
      ...initialState,
      color,
    });
  });

  it("should handle SET_OPACITY", () => {
    expect(
      reducer(initialState, {
        type: types.SET_OPACITY,
        payload: { opacity },
      })
    ).toEqual({ ...initialState, opacity });
  });

  it("should handle SET_LINE_WIDTH", () => {
    expect(
      reducer(initialState, {
        type: types.SET_LINE_WIDTH,
        payload: { lineWidth },
      })
    ).toEqual({ ...initialState, lineWidth });
  });

  it("should handle SET_TOOL", () => {
    expect(
      reducer(initialState, {
        type: types.SET_TOOL,
        payload: { tool },
      })
    ).toEqual({ ...initialState, tool });
  });

  it("should handle SET_ZOOM", () => {
    expect(
      reducer(initialState, {
        type: types.SET_ZOOM,
        payload: { zoom },
      })
    ).toEqual({ ...initialState, zoom });
  });

  it("should handle UNDO", () => {
    expect(
      reducer(
        { ...initialState, pptsData: [{ color: "#000" }] },
        { type: types.UNDO }
      )
    ).toEqual({ ...initialState, zoom });
  });
});
