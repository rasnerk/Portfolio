import React, { useState } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import Clouds from "./Clouds"
import Lightning from "./Lightning"
import * as THREE from "three"
// import { VivianiCurve } from "../../lib/CurveExtras"
import { DoubleSide } from "three"

const Scene = () => {
    // const test = <mesh position={[0,0,0]}>
    //     <tubeBufferGeometry args={[t, 100,2,20,true, 1]} />
    //     <meshBasicMaterial color={"green"} side={DoubleSide} wireframe={true} />
    // </mesh>
    // const stars = useLoader(THREE.TextureLoader, 'stars.jpg')
    // const flash = <pointLight />

    return (
        <div className="canvas-container">
        <Canvas id="canvas" camera={{position: [0,0,10]}}>
            {/* <fogExp2 color="#03544e" density={0.001} /> */}
            <ambientLight color="#882b88" intensity={0.3} />
            {/* <pointLight position={[0,5,3]} color={"#3399ff"} intensity={0.35} distance={20} decay={1.7} /> */}
            {/* <pointLight position={[0, 5, -3]} color="#fff" intensity={0.9} /> */}
            <Lightning />

            <Clouds />
            {/* <mesh rotation={[0, 0, 0]} position={[0,0,0]}>
                <boxGeometry args={[150,150,100]} />
                <meshPhongMaterial
                    map={stars}
                    side={THREE.DoubleSide}
                />
            </mesh> */}
        </Canvas>
        </div>
    )
}

export default Scene