import React from "react";
import styles from "./TemplateGrid.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getType } from "../../redux/Actions/index";

function TemplateGrid() {
    const dispatch = useDispatch();
    const tshirt = `/Images/Tshirt/black.png`;
    const hoodie = `/Images/Hoodies/black.png`;
     const Apparel = ({ img, text, i }) => (
       <div className={styles.container}>
         {i === "3" || i === "4" ? (
           <Link to={`/editor/${text}/text`}>
             <img
               className={styles.img_ctn}
               src={`/Images/Templates/temp_${i}.png`}
               alt={text}
             />
             <button className={styles.btn_add}>
               <h1>{`Template ${i}`}</h1>
             </button>
           </Link>
         ) : (
           <Link to={`/editor/${text}/design`}>
             <img
               className={styles.img_ctn}
               src={`/Images/Templates/temp_${i}.png`}
               alt={text}
             />
             <button
               className={styles.btn_add}
               onClick={() => {
                 if (i === "3" || i === "4") {
                   dispatch(getType("Text"));
                 }
               }}
             >
               <h1>{`Template ${i}`}</h1>
             </button>
           </Link>
         )}
       </div>
     );
  return (
    <div className={styles.apparel}>
      <Apparel img={hoodie} text="Hoodie" i="1" />
      <Apparel img={tshirt} text="Tshirt" i="2" />
      <Apparel img={hoodie} text="Hoodie" i="4" />
      <Apparel img={tshirt} text="Tshirt" i="3" />
    </div>
  );
}

export default TemplateGrid;
