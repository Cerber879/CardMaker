import React, { Dispatch, useState } from "react";
import styles from "../popup.module.css";

import { AnyAction } from "redux";
import { useSelector } from "react-redux";
import { RootState } from "../../../../ReduxStore";

import { setSize } from "../../../../reducers/canvas/fontCanvas";
import { setHistory, CanvasState } from "../../../canvas/history/historySettings";

type PopupProps = {
  width: number;
  height: number;
  close: () => void;
  dispatch: Dispatch<AnyAction>;
};

export function PopupResize({ width, height, dispatch, close }: PopupProps) {

  const popupStyle = "block";
  const overlayStyle = "block";

  const fontCanvas = useSelector((state: RootState) => state.fontCanvas);
  const objectBlocks = useSelector((state: RootState) => state.app.objectBlocks);
  const history = useSelector((state: RootState) => state.history.history);

  const [inputWidth, setInputWidth] = useState(String(width));
  const [inputHeight, setInputHeight] = useState(String(height));

  function closePopup() {
    close();
  }

  function resizeCanvas() {
    closePopup();
    const elHistory: CanvasState = {
      objects: objectBlocks,
      size: { width: fontCanvas.width, height: fontCanvas.height },
      font: { filter: fontCanvas.filter, opacity: fontCanvas.opacity },
    };
    dispatch(setHistory([...history, elHistory]));

    const newWidth = parseInt(inputWidth);
    const newHeight = parseInt(inputHeight);
    dispatch(setSize(newWidth, newHeight));
  }

  return (
    <>
      <div style={{ display: overlayStyle }} className={styles.overlay}></div>
      <div style={{ display: popupStyle }} className={styles.popup}>
        <div className={styles.popupContent}>
          <div className={styles.flex_block}>
            <span className={styles.resizeText}>Resize</span>
            <button
              className={`${styles.button} ${styles.btnClose}`}
              onClick={closePopup}
            >
              x
            </button>
          </div>
          <div>
            <label>Width:</label>
            <input
              value={inputWidth}
              onChange={(e) => setInputWidth(e.target.value)}
            />
            <label>Height:</label>
            <input
              value={inputHeight}
              onChange={(e) => setInputHeight(e.target.value)}
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
              onClick={resizeCanvas}
            >
              Resize
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
