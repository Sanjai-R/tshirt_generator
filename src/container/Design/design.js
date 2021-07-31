import React, { useState } from "react";
import { colors } from "../../Data/color";
import styles from "./design.module.css";
import { useSelector } from "react-redux";
import Fab from "@material-ui/core/Fab";
import DownloadIcon from "@material-ui/icons/GetApp";
import { Rnd } from "react-rnd";
function Design({ type,design }) {
  const Designs = useSelector((state) => state.settings);
  const [x, setX] = useState(0);
  const [border, setBorder] = useState("1px solid #ddd");
  const [y, setY] = useState(0);
  const [width, setWidth] = useState(type === "Hoodie"?250:300);
  const [height, setHeight] = useState(type === "Hoodie" ? 250 : 300);
  const [color, setColor] = useState("black");
  const tshirt = `/Images/Tshirt/${color}.png`;
  
  const hoodie = `/Images/Hoodies/${color}.png`;
  return (
    <div className={styles.root}>
      <div className={styles.bg}>
        <img
          src={type === "Hoodie" ? hoodie : tshirt}
          alt="Download Free High quality Blank T Shirt Png Transparent Images"
          className={styles.bg_tshirt}
        />

        <div
          className={styles.fg_design}
          style={{
         
          }}
        >
          <Rnd
            size={{ width: width, height: height }}
            position={{ x: x, y: y }}
            onDragStop={(e, d) => {
              setX(d.x);
              setY(d.y);
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
              setWidth(ref.style.width);
              setHeight(ref.style.height);
            }}
            bounds="body"
          >
            {design === "text" ? (
              <p
                className={styles.des_txt}
                style={{
                  fontSize: `${Designs.textSize}px`,
                  color: `${Designs.textColor}`,
                  fontFamily: `${Designs.fontFamily}`
                }}
              >
                {Designs.text}
              </p>
            ) : (
              <img
                src={Designs.design}
                alt=""
                style={{
                  width: width,
                  height: height,
                  border: border
                }}
                className={styles.design}
              />
            )}
          </Rnd>
        </div>
      </div>
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
            onClick={async () => {
              await setColor(data.color);
            }}
          >
            <p>co</p>
          </div>
        ))}
      </div>
      <Fab
        className={styles.fab}
        color="secondary"
        onClick={async () => {
          await setBorder(`1px solid transparent`);
          window.print();
          setBorder("1px solid #fff");
        }}
      >
        <DownloadIcon />
      </Fab>
    </div>
  );
}

export default Design;
