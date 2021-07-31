import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { colors } from "../../Data/color";
import styles from "./Pallate.module.css";
function PallateButton() {
    const Designs = useSelector((state) => state.settings);
    const dispatch = useDispatch();
    return (
      <div className={styles.colors}>
        {colors.map((data, i) => (
          <div
            key={i}
            style={{
              backgroundColor: data.color,
              color: data.color,
              border: data.color === "black" ? "1px solid #fff" : "none"
            }}
            className={styles.color_btn}
            onClick={() => {
              dispatch({
                type: "TEXT",
                payload: { ...Designs, color: data.color }
              });
            }}
          >
            <p>co</p>
          </div>
        ))}
      </div>
    );
}

export default PallateButton
