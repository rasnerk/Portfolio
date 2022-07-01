import React, { useState } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import Clouds from "./Clouds"
import Lightning from "./Lightning"
import * as THREE from "three"
import { VivianiCurve } from "../../lib/CurveExtras"
import { DoubleSide } from "three"

const SceneOne = () => {
    const myCurve = new VivianiCurve()
    const testArc = new THREE.ArcCurve(0,0,100,0,Math.PI *2,false)
    const test = <mesh position={[0,0,0]}>
        <tubeBufferGeometry args={[testArc, 100,1,20,true, 1]} />
        <meshBasicMaterial color={"red"} side={DoubleSide} />
    </mesh>
    const stars = useLoader(THREE.TextureLoader, 'stars.jpg')
    // const flash = <pointLight />

    return (
        <Canvas id="canvas" camera={{position: [0,0,10]}}>
            {/* <fogExp2 color="#03544e" density={0.001} /> */}
            <ambientLight color="#03544e" intensity={0.25} />
            {/* <pointLight position={[0,5,3]} color={"#3399ff"} intensity={0.35} distance={20} decay={1.7} /> */}
            {/* <pointLight position={[0, 5, -3]} color="#fff" intensity={0.9} /> */}
            <Lightning />
            {test}
            <Clouds />
            {/* <mesh rotation={[0, 0, 0]} position={[0,0,0]}>
                <boxGeometry args={[150,150,100]} />
                <meshPhongMaterial
                    map={stars}
                    side={THREE.DoubleSide}
                />
            </mesh> */}
        </Canvas>
    )
}

export default SceneOne