// Assume state.js
import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "grey",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./nikelogo.png",
  fullDecal: "./nike-header.png",
  move: false,
  colorPickerVisible: false, // Add colorPickerVisible to manage the visibility of the color picker

  saveColor: () => {
    // Add your logic to save the color here
    console.log("Color saved:", state.color);
  },

  toggleColorPicker: () => {
    state.colorPickerVisible = !state.colorPickerVisible;
  },

  setColor: (newColor) => {
    state.color = newColor;
  },
});

export default state;
