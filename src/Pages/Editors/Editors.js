import React from 'react'
import Design from "../../container/Design/design"
import Settings from "../../container/Settings/Settings";
import styles from "./editor.module.css"
import { useParams } from "react-router-dom";
function Editors() {
    const {type} = useParams()
    const { design } = useParams();
    return (
      <div className={styles.root}>
        <Settings design={design} />
        <Design type={type} design={design} />
      </div>
    );
}

export default Editors
