const LogoWings = ({rotation, position}) => {
    return (
        <group rotation={rotation} position={position}>
            <mesh>
                <torusGeometry args={[2, 0.1, 30, 30, 1.5]} />
                <meshPhysicalMaterial roughness={0} metalness={1} color={"#0095eb"} emissive={"#001f33"} />
            </mesh>
            <mesh position={[-0.35,2,0]}>
                <sphereGeometry args={[0.5, 64,32]} />
                <meshPhysicalMaterial roughness={0} metalness={1} color={"#0095eb"} emissive={"#001f33"} />
            </mesh>
            <mesh position={[2,-0.7,0]}>
                <sphereGeometry args={[0.75, 64,32]} />
                <meshPhysicalMaterial roughness={0} metalness={1} color={"#0095eb"} emissive={"#001f33"} />
            </mesh>
        </group>
    )
}

export default LogoWings