import { useFrame } from "@react-three/fiber"
import LogoWings from "./LogoWings"
import React from "react"
import { wingCords, ballCords } from "../../lib/logoCoordinates"

const Logo = () => {
    const rotater = React.useRef()
    const inner = wingCords.map( (wing,i) => <LogoWings key={i} rotation={wing.rotation} position={wing.position} /> )
    const outer = ballCords.map( (ball,i) => (
        <mesh key={i} position={ball.position}>
            <sphereGeometry args={[ball.size, 64,32]} />
            <meshPhysicalMaterial roughness={0} metalness={1} color={"#0095eb"} emissive={"#001f33"} />
        </mesh>
    ))

    useFrame( () => rotater.current.rotation.z -= 0.001 )
    
    return (
        <group ref={rotater} position={[-1,-2,-12]}>
            {inner}
            {outer}
        </group>
    )
}

export default Logo