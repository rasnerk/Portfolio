import React, { createRef } from 'react'
import { useFrame, useLoader } from "@react-three/fiber"
import * as THREE from "three"

const Clouds = () => {
    // let clouds = []
    const tool1 = React.useRef([]);
    const tool2 = React.useRef([]);
    const cloudSkin = useLoader(THREE.TextureLoader, 'clouds.png')

    const group1 = []
    for (let i=0; i<15; i++) {
        let position = [Math.floor(Math.random() * (8 - -8 + 1)) + -8, Math.floor(Math.random() * (3 - -1 + 1)) + -2, 2];
        let cloud = <mesh key={i} position={position} >
            <planeBufferGeometry args={[5,5]} />
            <meshLambertMaterial map={cloudSkin} transparent={true} opacity={0.5} />
        </mesh>
        group1.push(cloud)
    }

    const group2 = []
    for (let i=0; i<15; i++) {
        let position = [Math.floor(Math.random() * (8 - -8 + 1)) + -8, -2];
        let cloud = <mesh key={i} position={position} >
            <planeBufferGeometry args={[5,5]} />
            <meshLambertMaterial map={cloudSkin} transparent={true} opacity={0.5} />
        </mesh>
        group2.push(cloud)
    }

    useFrame( () => {
        tool1.current.position.x -= 0.0005;
        tool2.current.position.x += 0.0005;
    })

    return (
        <>
            <group ref={tool1} position={[0,0,0]} >
                {group1}
            </group>
            <group ref={tool2} position={[0,0,0]} >
                {group1}
            </group>
        </>
    )
}

export default Clouds