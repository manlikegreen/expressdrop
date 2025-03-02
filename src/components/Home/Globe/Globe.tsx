// import React, { useRef, useState } from "react";
// import GlobeModel from "./GlobeModel";
// import * as THREE from "three";
// import { Canvas } from "@react-three/fiber";
// import { View } from "@react-three/drei";

// const Globe = () => {
//     const [size, setSize] = useState("small");

//     // camera controll for globe view

//     const cameraControlSmall = useRef();
//     const cameraControlLarge = useRef();

//     // globes
//     const small = useRef(new THREE.Group());
//     const large = useRef(new THREE.Group());

//     // rotation
//     const [smallRotation, setSmallRotation] = useState(0);
//     const [largeRotation, setLargeRotation] = useState(0);

//   return (
//     <div className="common-padding hidden md:block">
//       <div className="w-1/3 items-center">
//         <div className="w-full">
//           <GlobeModel
//             index={1}
//             groupRef={small}
//             gsapType="view1"
//             controlRef={cameraControlSmall}
//             setRotationState={setSmallRotation}
//             size={size}
//           />

//           <GlobeModel
//             index={2}
//             groupRef={large}
//             gsapType="view2"
//             controlRef={cameraControlLarge}
//             setRotationState={setLargeRotation}
//             size={size}
//           />

//           <Canvas
//             className="w-full h-full"
//             style={{
//                 position: "fixed",
//                 top: 0,
//                 bottom: 0,
//                 left: 0,
//                 right: 0,
//                 overflow: "hidden"
//             }}
//             eventSource={document.getElementById("root")}
//           >
//             <View.Port />
//           </Canvas>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Globe;
