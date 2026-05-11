import React from "react";
import Boxes from "./Boxes.css"

const Boxes = () => {
  const items = [1, 2, 3, 4];
  return (
    <div style={BoxesStyle}>
      {items.map((items) => (
        <div key={items} style={BoxStyle}>
          box{items}
        </div>
      ))};
    </div>
  );
};
const boxesStyle ={
    display:'flex'
}

export default Boxes;
// import React from 'react'

// const Boxes = ({width,height}) => {
    
    
//   return (
//     <div>
//         <div width={width} height={height}></div>
//         <div width={width} height={height}></div>
//         <div width={width} height={height}></div>
//         <div width={width} height={height}></div>

//         <input name={name} placeholder={placeholder} type={type} onChange={whenItype} />
//     </div>
//   )
// }

// export default Boxes