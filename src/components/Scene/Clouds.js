import React from 'react'
import { useFrame, useLoader } from "@react-three/fiber"
import * as THREE from "three"

const Clouds = () => {
    const tool1 = React.useRef();
    const tool2 = React.useRef();
    const tool3 = React.useRef();
    const tool4 = React.useRef();
    const tool5 = React.useRef();
    const tool6 = React.useRef();
    const cloudSkin = useLoader(THREE.TextureLoader, 'imgs/clouds.png')

    const group1 = []
    for (let i=0; i<40; i++) {
        let size = Math.floor(Math.random() * (8 - 3 + 1) +3)
        let position = [Math.floor(Math.random() * (20 - -20 + 1)) + -20, Math.floor(Math.random() * (9 - -4 + 1)) + -4, 2];
        let cloud = <mesh key={i} position={position} >
            <planeBufferGeometry args={[size,size]} />
            <meshLambertMaterial map={cloudSkin} transparent={true} opacity={0.5} />
        </mesh>
        group1.push(cloud)
    }

    const group2 = []
    for (let i=0; i<40; i++) {
        let size = Math.floor(Math.random() * (12 - 5 + 1) +5)
        let position = [Math.floor(Math.random() * (25 - -20 + 1)) + -20, Math.floor(Math.random() * (10 - -8 + 1)) + -8, 0];
        let cloud = <mesh key={i} position={position} >
            <planeBufferGeometry args={[size,size]} />
            <meshLambertMaterial map={cloudSkin} transparent={true} opacity={0.6} />
        </mesh>
        group2.push(cloud)
    }

    const group3 = []
    for (let i=0; i<25; i++) {
        let size = Math.floor(Math.random() * (25 - 10 + 1) +10)
        let position = [Math.floor(Math.random() * (30 - -25 + 1)) + -25, Math.floor(Math.random() * (10 - -6 + 1)) + -6, 0];
        let cloud = <mesh key={i} position={position} >
            <planeBufferGeometry args={[size,size]} />
            <meshLambertMaterial map={cloudSkin} transparent={true} opacity={0.65} />
        </mesh>
        group3.push(cloud)
    }

    const group4 = []
    for (let i=0; i<60; i++) {
        let size = Math.floor(Math.random() * (25 - 10 + 1) +10)
        let position = [Math.floor(Math.random() * (150 - 30 + 1)) + 30, Math.floor(Math.random() * (10 - -6 + 1)) + -6, 0];
        let cloud = <mesh key={i} position={position} >
            <planeBufferGeometry args={[size,size]} />
            <meshLambertMaterial map={cloudSkin} transparent={true} opacity={0.65} />
        </mesh>
        group4.push(cloud)
    }

    const group5 = []
    for (let i=0; i<40; i++) {
        let size = Math.floor(Math.random() * (12 - 5 + 1) +5)
        let position = [Math.floor(Math.random() * (-15 - -75 + 1)) + -75, Math.floor(Math.random() * (8 - -4 + 1)) + -4, 0];
        let cloud = <mesh key={i} position={position} >
            <planeBufferGeometry args={[size,size]} />
            <meshLambertMaterial map={cloudSkin} transparent={true} opacity={0.6} />
        </mesh>
        group5.push(cloud)
    }

    const group6 = []
    for (let i=0; i<40; i++) {
        let size = Math.floor(Math.random() * (8 - 3 + 1) +3)
        let position = [Math.floor(Math.random() * (20 - -20 + 1)) + -20, Math.floor(Math.random() * (9 - -4 + 1)) + -4, 2];
        let cloud = <mesh key={i} position={position} >
            <planeBufferGeometry args={[size,size]} />
            <meshLambertMaterial map={cloudSkin} transparent={true} opacity={0.5} />
        </mesh>
        group6.push(cloud)
    }

    useFrame( () => {
        tool1.current.position.x -= 0.005;
        tool2.current.position.x += 0.0025;
        tool3.current.position.x -= 0.005;
        tool4.current.position.x -= 0.003;
        tool5.current.position.x += 0.0015;
        tool6.current.position.x -= 0.0025;
    })

    return (
        <>
            <group ref={tool1} position={[0,-3,0]} >
                {group1}
            </group>
            <group ref={tool2} position={[0,0,-2]} >
                {group2}
            </group>
           
            <group ref={tool3} position={[0,0,-7]} >
                {group3}
            </group>
            <group ref={tool4} position={[0,0,-12]}>
                {group4}
            </group> 
            <group ref={tool5} position={[-5,0,-6]}>
                {group5}
            </group>
            <group ref={tool6} position={[30,0,-6]}>
                {group6}
            </group>
        </>
    )
}

export default Clouds