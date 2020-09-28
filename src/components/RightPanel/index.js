import React, { useState, useEffect } from "react";
import { ChromePicker, AlphaPicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "use-debounce";

import { setColor, setOpacity } from "../../store/actions";

const RightPanel = () => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.color);
  const opacity = useSelector((state) => state.opacity);

  const hex2rgba = (hex) => {
    const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
    return { r, g, b };
  };

  const [currentColor, setCurrentColor] = useState(color);
  const [currentAlpha, setCurrentAlpha] = useState(opacity);
  const [colorWithAlpha, setColorWithAlpha] = useState({
    ...hex2rgba(currentColor),
    a: opacity,
  });

  const debounceDelay = 400;
  const [debouncedColor] = useDebounce(currentColor, debounceDelay);
  const [debouncedAlpha] = useDebounce(currentAlpha, debounceDelay);

  const handleColorChange = ({ hex }) => {
    setCurrentColor(hex);
  };

  const handleAlphaChange = ({ rgb }) => {
    setColorWithAlpha(rgb);
    setCurrentAlpha(rgb.a);
  };

  useEffect(() => {
    dispatch(setColor(debouncedColor));
  }, [debouncedColor, dispatch]);

  useEffect(() => {
    dispatch(setOpacity(debouncedAlpha));
  }, [debouncedAlpha, dispatch]);

  return (
    <div className="right-panel h-full p-1">
      <ChromePicker
        color={currentColor}
        disableAlpha={true}
        onChangeComplete={handleColorChange}
      />
      <br />
      <AlphaPicker
        color={colorWithAlpha}
        width="auto"
        onChangeComplete={handleAlphaChange}
      />
    </div>
  );
};

export default RightPanel;
