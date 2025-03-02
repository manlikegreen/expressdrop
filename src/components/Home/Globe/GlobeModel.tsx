// import { PerspectiveCamera, View } from '@react-three/drei'
// import React, { Suspense } from 'react'
// import { AmbientLight } from 'three';
// import Lights from './Lights';

// const GlobeModel = ({ index, groupRef, gsapType, controlRef, setRotationState, size }) => {
//   return (
//     <View
//       index={index}
//       id={gsapType}
//       className={`border-2 border-red-500 w-full h-full ${
//         index === 2 ? 'right-[-100%]' : ''}`}
//     >
//         {/* Ambient Light */}
//         <AmbientLight intensity={0.3} />

//         {/* Perspective Camera */}
//         <PerspectiveCamera makeDefault position={[0, 0, 4]} />

//         <Lights />

//         <Suspense fallback={<div>Loading</div>}></Suspense>
//     </View>
//   );
// }

// export default GlobeModel
