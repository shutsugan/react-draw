import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "use-debounce";

import { setLineWidth, setZoom, setData } from "../../store/actions";

const TopPanel = () => {
  const dispatch = useDispatch();
  const exportButton = useRef(null);

  const lineWidth = useSelector((state) => state.lineWidth);
  const zoom = useSelector((state) => state.zoom);
  const pptsData = useSelector((state) => state.pptsData);

  const debounceDelay = 300;
  const [currentLineWidth, setCurrentLineWidth] = useState(lineWidth);
  const [currentZoom, setCurrentZoom] = useState(zoom);
  const [debouncedLineWidth] = useDebounce(currentLineWidth, debounceDelay);
  const [debouncedZoom] = useDebounce(currentZoom, debounceDelay);

  const handleLineWidthChange = ({ target }) => {
    setCurrentLineWidth(target.value);
  };

  const handleZoomChange = ({ target }) => {
    setCurrentZoom(parseFloat(target.value));
  };

  const handleExportClick = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(pptsData));

    exportButton.current.setAttribute("href", dataStr);
    exportButton.current.setAttribute("download", "drawing.json");
  };

  const handleFileUpload = (event) => {
    const { files } = event.target;

    if (files.length > 0) {
      var reader = new FileReader();

      reader.addEventListener("load", () => {
        const data = JSON.parse(reader.result);

        dispatch(setData(data));
      });

      reader.readAsText(files[0]);
    }
  };

  useEffect(() => {
    dispatch(setLineWidth(debouncedLineWidth));
  }, [debouncedLineWidth, dispatch]);

  useEffect(() => {
    dispatch(setZoom(debouncedZoom));
  }, [debouncedZoom, dispatch]);

  return (
    <div className="top-panel space-between flex p-1">
      <div className="flex">
        {/* <label htmlFor="zoom">Image zoom: </label>
        <select
          id="zoom"
          className="mr-1"
          value={zoom}
          onChange={handleZoomChange}
        >
          <option value="0.1">10%</option>
          <option value="0.25">25%</option>
          <option value="0.5">50%</option>
          <option value="0.75">75%</option>
          <option value="1">100%</option>
          <option value="1.25">125%</option>
          <option value="1.5">150%</option>
          <option value="1.75">175%</option>
          <option value="2">200%</option>
        </select> */}

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
      <div className="flex align-center">
        <a
          ref={exportButton}
          className="btn p-1 mr-1"
          onClick={handleExportClick}
        >
          Export Json Data
        </a>
        <input type="file" onChange={handleFileUpload} accept="json" />
      </div>
    </div>
  );
};

export default TopPanel;
