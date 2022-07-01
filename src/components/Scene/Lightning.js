import { useState } from "react"
import { useFrame } from "@react-three/fiber"
const Lightning = () => {
    const [flash,setFlash] = useState([0,0,0,0])
    const [display, setDisplay] = useState(false)
    useFrame(() => {
        if(Math.random() > 0.94) {
            let intensity = 0.15;
            if(Math.random() > 0.97) {
                intensity = 0.75
            }
            if (Math.random() > 0.5 && Math.random() < 0.74) {
                intensity = 0.3
            }
            setFlash([Math.floor(Math.random() * (9 - -9 + 1)) + -9,Math.floor(Math.random() * (6 - -1 + 1)) + -1,3,intensity])
            setDisplay(prev => !prev)
            // setFlashPosition([Math.floor(Math.random() * (2 - 0 + 1)) + 0, 0])
        }
    })

    return (
        // flash && 
        // <mesh>
        //     <boxBufferGeometry args={[3,3,3]} />
        //     <meshBasicMaterial color={"hotpink"} />
        // </mesh>
        display && <pointLight position={flash} color={"#3399ff"} intensity={flash[3]} distance={20} decay={1.7} />
        // flash && <pointLight position={[0,0,0]} color={"#062d89"} intensity={1} distance={10} decay={1.7} />
    )   
}

export default Lightning;