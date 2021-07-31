import React, { useEffect } from "react";

import styles from "./Settings.module.css";
import { modals } from "../../Assets/Data/design";
import { getDesign } from "../../redux/Actions/index";
import {
  Select,
  MenuItem,
  FormControl,
  makeStyles
} from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import Chrome from "react-color";

import { useDispatch, useSelector } from "react-redux";

const Settings = ({ design }) => {
  const useStyle = makeStyles((theme) => ({
    formControl: {
      width: "90%"
    },
    Select: {
      Color: "white",
      padding: "20px",
      backgroundColor: "#272727",
      border: "none",
      Outline: "none",
      margin: "12px 18px",
      color: "#fff",
      fontSize: "1rem",
      width: "100%",
      
    },
    
  }));
  const classes = useStyle();
  console.log(design);
  const dispatch = useDispatch();
  const Settings = useSelector((state) => state.settings);
  useEffect(() => {}, [dispatch]);

  const handleChange = (event, newValue) => {
    dispatch({
      type: "TEXT",
      payload: { ...Settings, textSize: newValue }
    });
  };
  const handleWeight = (event, newValue) => {
    dispatch({
      type: "TEXT",
      payload: { ...Settings, fontWeight: newValue }
    });
  }

  return design === "text" ? (
    <div className={styles.root}>
      <h2 className={styles.title}>Create your Design</h2>
      <input
        type="text"
        className={styles.input}
        placeholder={Settings.text}
        onChange={(e) => {
          dispatch(getDesign({ ...Settings, text: e.target.value }));
        }}
      />
      <h2 className={styles.sub_title}>Font Size</h2>
      <Slider
        style={{
          margin: "12px 20px",
          width: "90%"
        }}
        value={Settings.textSize}
        min={0}
        step={2}
        max={100}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
      <h2 className={styles.sub_title}>Font Weight</h2>
      <Slider
        style={{
          margin: "12px 20px",
          width: "90%"
        }}
        value={Settings.fontWeight}
        min={100}
        step={100}
        max={900}
        onChange={handleWeight}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
      <h2 className={styles.sub_title}>Font Style</h2>
      <FormControl className={classes.formControl}>
        <Select
          className={classes.Select}
          onChange={(e) => {
            dispatch({
              type: "TEXT",
              payload: { ...Settings, fontFamily: e.target.value }
            });
          }}
        >
          <MenuItem
            value="Rajdhani"
            style={{ fontFamily: "Rajdhani", fontSize: "32px" }}
          >
            Cursive
          </MenuItem>
          <MenuItem
            value="Gvtime"
            style={{ fontFamily: "Rajdhani", fontSize: "32px " }}
          >
            Gvtime
          </MenuItem>
          <MenuItem
            value="Signature"
            style={{ fontFamily: "Signature", fontSize: "32px " }}
          >
            Signature
          </MenuItem>
        </Select>
      </FormControl>
      <Chrome
        className={styles.sketch}
        color={Settings.textColor}
        width={"90%"}
        onChange={(color) => {
          dispatch({
            type: "TEXT",
            payload: { ...Settings, textColor: color.hex }
          });
        }}
      />
    </div>
  ) : (
    <div className={styles.img_root}>
      {modals.map((item, i) => (
        <div key={i} className={styles.img_container}>
          <img src={item.url} alt={i} className={styles.img} />
          <button
            onClick={() => {
              dispatch({
                type: "TEXT",
                payload: { ...Settings, design: item.url }
              });
            }}
            className={styles.img_btn}
          >
            Add photo
          </button>
        </div>
      ))}
    </div>
  );
};

export default Settings;
