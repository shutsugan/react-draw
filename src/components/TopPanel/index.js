import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "use-debounce";

import { setLineWidth } from "../../store/actions";

const TopPanel = () => {
  const dispatch = useDispatch();
  const lineWidth = useSelector((state) => state.lineWidth);
  const [currentLineWidth, setCurrentLineWidth] = useState(lineWidth);

  const debounceDelay = 300;
  const [debouncedLineWidth] = useDebounce(currentLineWidth, debounceDelay);

  const handleLineWidthChange = ({ target }) => {
    setCurrentLineWidth(target.value);
  };

  useEffect(() => {
    dispatch(setLineWidth(debouncedLineWidth));
  }, [debouncedLineWidth, dispatch]);

  return (
    <div className="top-panel flex p-1">
      <label htmlFor="brush">Brush size: </label>
      <input
        type="range"
        id="brush"
        min="1"
        max="100"
        value={currentLineWidth}
        onChange={handleLineWidthChange}
      />
      <span>{currentLineWidth}px</span>
    </div>
  );
};

export default TopPanel;
