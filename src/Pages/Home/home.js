import React from "react";
import styles from "./home.module.css";
import Grid from "../../components/TemplateGrid/TemplateGrid";

function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <h1>
          <span>Design</span> <span>tshirt</span>
        </h1>
      </div>
      <h1 style={{ marginTop: "32px" }}>Choose your Design</h1>
      <Grid />
    </div>
  );
}

export default Home;
