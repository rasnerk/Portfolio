import React from 'react'
import { useFrame, useLoader } from "@react-three/fiber"
import * as THREE from "three"

const Clouds = () => {
    const tool1 = React.useRef();
    const tool2 = React.useRef();
    const tool3 = React.useRef();
    const cloudSkin = useLoader(THREE.TextureLoader, 'imgs/clouds.png')

    const group1 = []
    for (let i=0; i<30; i++) {
        let size = Math.floor(Math.random() * (8 - 3 + 1) +3)
        let position = [Math.floor(Math.random() * (15 - -15 + 1)) + -15, Math.floor(Math.random() * (5 - -2 + 1)) + -2, 2];
        let cloud = <mesh key={i} position={position} >
            <planeBufferGeometry args={[size,size]} />
            <meshLambertMaterial map={cloudSkin} transparent={true} opacity={0.5} />
        </mesh>
        group1.push(cloud)
    }

    const group2 = []
    for (let i=0; i<35; i++) {
        let size = Math.floor(Math.random() * (12 - 5 + 1) +5)
        let position = [Math.floor(Math.random() * (25 - -15 + 1)) + -15, Math.floor(Math.random() * (8 - -4 + 1)) + -4, 0];
        let cloud = <mesh key={i} position={position} >
            <planeBufferGeometry args={[size,size]} />
            <meshLambertMaterial map={cloudSkin} transparent={true} opacity={0.6} />
        </mesh>
        group2.push(cloud)
    }

    const group3 = []
    for (let i=0; i<15; i++) {
        let size = Math.floor(Math.random() * (25 - 10 + 1) +10)
        let position = [Math.floor(Math.random() * (30 - -20 + 1)) + -20, Math.floor(Math.random() * (10 - -4 + 1)) + -4, 0];
        let cloud = <mesh key={i} position={position} >
            <planeBufferGeometry args={[size,size]} />
            <meshLambertMaterial map={cloudSkin} transparent={true} opacity={0.65} />
        </mesh>
        group3.push(cloud)
    }

    useFrame( () => {
        tool1.current.position.x -= 0.001;
        tool2.current.position.x += 0.0015;
        tool3.current.position.x -= 0.005;
    })

    return (
        <>
            <group ref={tool1} position={[0,-3,0]} >
                {group1}
            </group>
            <group ref={tool2} position={[0,0,-2]} >
                {group2}
            </group>
            <group ref={tool3} position={[0,0,-6]} >
                {group3}
            </group>
        </>
    )
}

export default Clouds