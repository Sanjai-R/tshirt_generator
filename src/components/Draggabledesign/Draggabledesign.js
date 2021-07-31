import React,{useState} from 'react'
import { Rnd } from "react-rnd";
import { useSelector } from "react-redux";

function Draggabledesign({ type,design}) {
    const Designs = useSelector((state) => state.settings);

    const [x, setX] = useState(0);
    const border = useSelector((state) => state.settings.border);
    const [y, setY] = useState(0);
    const [width, setWidth] = useState(type === "Hoodie" ? 250 : 300);
    const [height, setHeight] = useState(type === "Hoodie" ? 250 : 300);
  
    return (
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
        style={{
          width: "300px",
          height: "300px",
          position: "absolute"
        }}
        bounds="parent"
      >
        {design === "text" ? (
          <h1
            style={{
              fontSize: `${Designs.textSize}px`,
              
              width: "90%",
              height: "90%",
              marginTop:"35%",
              marginLeft: "25%",
              color: `${Designs.textColor}`,
              fontFamily: `${Designs.fontFamily}`,
              fontWeight: `${Designs.fontWeight}`
            }}
          >
            {Designs.text}
          </h1>
        ) : (
          <img
            src={Designs.design}
            alt=""
            style={{
              width: width,
              height: height,
              border: border === true ? "1px solid #ddd" : "none"
            }}
          />
        )}
      </Rnd>
    );
}

export default Draggabledesign
