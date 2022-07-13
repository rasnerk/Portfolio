import { useFrame } from "@react-three/fiber"
import LogoWings from "./LogoWings"
import React from "react"
import { wingCords, innerBalls, outerBalls } from "../../lib/logoCoordinates"

const Logo = () => {
    const smallRingRotater = React.useRef()
    const largeRingRotater = React.useRef()
    const inner = wingCords.map( (wing,i) => <LogoWings key={i} rotation={wing.rotation} position={wing.position} /> )
    const smallRing = innerBalls.map( (ball,i) => (
        <mesh key={i} position={ball.position}>
            <sphereGeometry args={[ball.size, 64,32]} />
            <meshPhysicalMaterial roughness={0} metalness={1} color={"#0095eb"} emissive={"#001f33"} />
        </mesh>
    ))
    const largeRing = outerBalls.map( (ball,i) => (
        <mesh key={i} position={ball.position}>
            <sphereGeometry args={[ball.size, 64,32]} />
            <meshPhysicalMaterial roughness={0} metalness={1} color={"#0095eb"} emissive={"#001f33"} />
        </mesh>
    ))

    useFrame( () => {
        smallRingRotater.current.rotation.z -= 0.0025
        largeRingRotater.current.rotation.z += 0.0025
    } )
    
    return (
        <group position={[0,-1,-2]}>
            <group position={[0,-2,0]}>
                {inner}
            </group>
            <group ref={smallRingRotater} position={[1,1,0]}>
                {smallRing}
            </group>
            <group ref={largeRingRotater} position={[1,1,0]}>
                {largeRing}
            </group>
        </group>
    )
}

export default Logo