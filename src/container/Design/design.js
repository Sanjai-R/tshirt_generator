import React from "react";
import styles from "./design.module.css";
import { useSelector, useDispatch } from "react-redux";
import Fab from "@material-ui/core/Fab";
import PallateButton from "../../components/PallateButtons/PallateButton";
import Draggabledesign from "../../components/Draggabledesign/Draggabledesign";
import DownloadIcon from "@material-ui/icons/GetApp";
function Design({ type, design }) {
  const Designs = useSelector((state) => state.settings);
  const color = useSelector((state) => state.settings.color);
  const tshirt = `/Images/Tshirt/${color}.png`;
  const dispatch = useDispatch();
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
          className={styles.draggable}
         
        >
          <Draggabledesign type={type} design={design} />
        </div>
      </div>

      <PallateButton />

      <Fab
        className={styles.fab}
        color="secondary"
        onClick={async () => {
          await dispatch({
            type: "TEXT",
            payload: { ...Designs, border: false }
          });

          window.print();
        }}
      >
        <DownloadIcon />
      </Fab>
    </div>
  );
}

export default Design;
