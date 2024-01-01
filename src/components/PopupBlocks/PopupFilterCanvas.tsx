import React, { useEffect, useState } from "react";
import styles from "../../index.module.css";


import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../ReduxStore";
import { setFilter } from "../../reducers/canvas/fontCanvas";

type PopupProps = {
  close: () => void;
};

export function PopupFilterCanvas({ close }: PopupProps) {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();

  const filterCanvas = useSelector((state: RootState) => state.size.filter);
  const opacityCanvas = useSelector((state: RootState) => state.size.opacity);

  const [opacity, setOpacity] = useState(100);

  useEffect(() => {
    const overlay = document.getElementById("overlay") as HTMLDivElement;
    const popup = document.getElementById("popup") as HTMLDivElement;
    overlay.style.display = "block";
    popup.style.display = "block";

    const colorPicker = document.getElementById('color-picker') as HTMLInputElement;
    const opacity = document.querySelector(".opacity-range") as HTMLInputElement;

    opacity.value = opacityCanvas.toString();
    colorPicker.value = filterCanvas;

  }, []);

  function closePopup() {
    close();
    const overlay = document.getElementById("overlay") as HTMLDivElement;
    const popup = document.getElementById("popup") as HTMLDivElement;
    overlay.style.display = "none";
    popup.style.display = "none";
  }

  function CleanCanvas() {
    const colorPicker = document.getElementById('color-picker') as HTMLInputElement;
    const opacity = document.querySelector(".opacity-range") as HTMLInputElement;

    if(colorPicker && opacity) {
      dispatch(setFilter(colorPicker.value, parseInt(opacity.value)));
      console.log(colorPicker.value, parseInt(opacity.value));
    }
    closePopup();
  }

  function updateColor() {
    const opacity = document.querySelector(".opacity-range") as HTMLInputElement;
    if(opacity)
      setOpacity(parseInt(opacity.value) / 100);
  }

  return (
    <>
      <div id="overlay" className={styles.overlay}></div>
      <div
        id="popup"
        className={styles.popup}
        style={{ width: "230px", height: "160px" }}
      >
        <div className={`${styles.flex_block} ${styles.headerPopup}`}>
          <span className={styles.resizeText}>Filter Canvas</span>
          <button
            id="closeButton"
            className={`${styles.button} ${styles.btnClose}`}
            onClick={closePopup}
          >
            x
          </button>
        </div>
        <input style={{ opacity: opacity }} type="color" id="color-picker"></input>
        <div className={`${styles.flex_block} ${styles.opacityCanvas}`}>
          <span>opacity:</span>
          <input
            id="opacity-range"
            className="opacity-range"
            onClick={updateColor}
            onMouseMove={updateColor}
            type="range"
            min="0"
            max="100"
          />
        </div>
        <div className={`${styles.flex_block} ${styles.menuPopup}`}>
          <button
            className={styles.button}
            style={{ backgroundColor: "#b53f3f" }}
            onClick={closePopup}
          >
            Cancel
          </button>
          <button
            className={styles.button}
            style={{ backgroundColor: "#3e67d7" }}
            onClick={CleanCanvas}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}