import React, { useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);
  const [isPickerOpen, setIsPickerOpen] = useState(true);

  const handleClosePicker = () => {
    setIsPickerOpen(false);
    // setIsPickerOpen(true);
  };

  return (
    <div className="absolute left-full ml-3">
      {isPickerOpen && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <button
              onClick={handleClosePicker}
              style={{
                background: snap.color,
                border: "none",
                cursor: "pointer",
                fontSize: "1.5em",
                color: "#fff",

                // padding: "5px",
                paddingLeft: "10px",
                paddingRight: "10px",
                borderRadius: 100,
              }}
            >
              &times;
            </button>
          </div>
          <SketchPicker
            color={snap.color}
            disableAlpha
            onChange={(color) => (state.color = color.hex)}
          />
        </>
      )}
    </div>
  );
};

export default ColorPicker;
