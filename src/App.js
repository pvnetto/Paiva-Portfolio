import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import PageCanvas from './components/canvas';
import Sidenav from './components/sidenav';
import AppRoutes from './components/routes/AppRoutes';
import { SceneProvider } from './components/scenes/SceneContext';

const App = () => {
    return (
        <SceneProvider >
            <BrowserRouter>
                <Sidenav />
                <AppRoutes />
                <PageCanvas />
            </ BrowserRouter>
        </SceneProvider>
    );
};

export default App;

// import * as THREE from 'three'
// import React, { useState } from 'react'
// import { Canvas } from 'react-three-fiber'
// // import { useSpring, config } from '@react-spring/core'
// import { a } from '@react-spring/three'
// import { a as aDom } from '@react-spring/web'
// // import Text from './helpers/Text'
// import Scene from './Scene'
// // import useModel from './helpers/useModel'
// import useYScroll from './helpers/useYScroll'
// // import './helpers/uniforms'
// import style from './style.module.css'

// const material = { transparent: true, roughness: 0.8, fog: true, shininess: 0, flatShading: false }

// const Seat = ({ color, ...props }) => {
//     const [geometries, center] = useModel('/seat.glb')
//     const [hovered, set] = useState(false)
//     const hover = e => e.stopPropagation() && set(true)
//     const unhover = () => set(false)
//     const { scale } = useSpring({ scale: hovered ? 1.2 : 1, config: config.stiff })
//     return (
//         <a.group {...props} onPointerOver={hover} onPointerOut={unhover} scale={scale.interpolate(s => [s, s, 1])}>
//             {geometries.map(geom => (
//                 <mesh key={geom.uuid} position={center} geometry={geom} castShadow receiveShadow>
//                     <meshPhysicalMaterial attach="material" {...material} roughness={1} shininess={0} color={color} />
//                 </mesh>
//             ))}
//         </a.group>
//     )
// }

// const Quarter = ({ color, ...props }) => (
//     <group {...props}>
//         <Seat color={color} position={[-0.35, 0, 0.7]} />
//         <Seat color={color} position={[0.35, 0, 0.7]} />
//         <Seat color={color} position={[-0.35, 0, -0.7]} rotation={[0, Math.PI, 0]} />
//         <Seat color={color} position={[0.35, 0, -0.7]} rotation={[0, Math.PI, 0]} />
//     </group>
// )

// const Row = ({ color, ...props }) => (
//     <group {...props}>
//         <Text color="gray" size={0.15} position={[2.2, 2, 10.8]} rotation={[-Math.PI / 2, 0, 0]} children="1" />
//         <Text color="gray" size={0.15} position={[2.2, 2, 10]} rotation={[-Math.PI / 2, 0, 0]} children="2" />
//         <Text color="gray" size={0.15} position={[-2.2, 2, 10.8]} rotation={[-Math.PI / 2, 0, 0]} children="1" />
//         <Text color="gray" size={0.15} position={[-2.2, 2, 10]} rotation={[-Math.PI / 2, 0, 0]} children="2" />
//         <Quarter color={color} position={[-1.2, -0.45, 9.75]} />
//         <Quarter color={color} position={[1.2, -0.45, 9.75]} />
//     </group>
// )

// const Cabin = ({ color = 'white', seatColor = 'white', name, ...props }) => {
//     const [geometries, center] = useModel('/cabin.glb')
//     return (
//         <group {...props}>
//             <Text centerX={false} color="lightcoral" size={0.6} position={[2.6, 2, 10.6]} rotation={[-Math.PI / 2, 0, 0]}>
//                 {name}
//             </Text>
//             <group position={center}>
//                 {geometries.map((geom, index) => (
//                     <mesh key={geom.uuid} geometry={geom} castShadow receiveShadow>
//                         <meshPhysicalMaterial
//                             attach="material"
//                             {...material}
//                             color={index === 0 ? color : 'indianred'}
//                             opacity={index === 0 ? 1 : 0.2}
//                         />
//                     </mesh>
//                 ))}
//             </group>
//             <Row color={seatColor} />
//             <Row color={seatColor} position={[0, 0, -1.9]} />
//             <Row color={seatColor} position={[0, 0, -6.6]} />
//             <Row color={seatColor} position={[0, 0, -8.5]} />
//             <Row color={seatColor} position={[0, 0, -11]} />
//             <Row color={seatColor} position={[0, 0, -12.9]} />
//             <Row color={seatColor} position={[0, 0, -17.6]} />
//             <Row color={seatColor} position={[0, 0, -19.5]} />
//         </group>
//     )
// }

// const App = () => {
//     const [y] = useYScroll([-100, 2400], { domTarget: window })
//     return (
//         <>
//             <Canvas
//                 invalidateFrameloop
//                 camera={{ position: [0, 0, 10], fov: 65 }}
//                 gl={{ alpha: false }}
//                 onCreated={({ gl, scene }) => {
//                     scene.background = new THREE.Color('#00ff00')
//                     scene.rotation.set(Math.PI / 4, 0, 0)
//                     gl.shadowMap.enabled = true
//                     gl.shadowMap.type = THREE.PCFSoftShadowMap
//                 }}>
//                 <Scene>
//                     <a.group position-z={y.interpolate(y => (y / 500) * 25)}>
//                         {/* <Cabin color="white" seatColor="lightskyblue" name="1A" position={[0, 0, -6]} />
//                         <Cabin color="lightgray" seatColor="gray" name="2B" position={[0, 0, -32]} />
//                         <Cabin color="white" seatColor="lightskyblue" name="3A" position={[0, 0, -58]} />
//                         <Cabin color="lightgray" seatColor="gray" name="4B" position={[0, 0, -84]} />
//                         <Cabin color="#676767" seatColor="sandybrown" name="5B" position={[0, 0, -110]} /> */}
//                     </a.group>
//                 </Scene>
//             </Canvas>
//             <aDom.div className={style.bar} style={{ height: y.interpolate([-100, 2400], ['0%', '100%']) }} />
//         </>
//     )
// }

// // ReactDOM.render(<App />, document.getElementById('root'))
// export default App;