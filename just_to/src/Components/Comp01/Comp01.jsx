// import React, { useEffect, useState } from "react";
// import '../../index.css'
// import GoToHome from "../Comp02/GoToHome";
// // import GoToHome from "../../Components/GoToHome";

// const Comp01 = () => {
//   const [clicked, setClicked] = useState(false);
//   const [time, setTime] = useState(0);

//   console.log("click01",clicked);
//   const handleclick = () => {
//     console.log("click02",clicked)
//     setClicked(!clicked);
//   };

//   useEffect(() => {
//     let interval;
//     console.log("if clicked",clicked)
//     if (clicked) {
//       interval = setInterval(() => {
//         setTime(prevTime => prevTime + 1);
//       }, 500);
//     } else {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [clicked]);



//   return (
//     <div className="flex flex-col items-center justify-center h-screen gap-10">
//       <div className="text-6xl">{time}</div>
//       <button
//         className="custom-button"
//         onClick={handleclick}
//       >
//         {clicked ? 'Stop' : 'Start'}
//       </button>
//       <GoToHome/>
//     </div>
//   );
// };

// export default Comp01;

// // reverses a string

import React from 'react'

const Comp01 = () => {
  return (
    <div>Comp01</div>
  )
}

export default Comp01