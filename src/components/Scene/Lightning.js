import { useState } from "react"
import { useFrame } from "@react-three/fiber"
const Lightning = () => {
    const [flash,setFlash] = useState([0,0,0,0,0])
    const [display, setDisplay] = useState(false)
    useFrame(() => {
        if(Math.random() > 0.94) {
            let intensity = 0.15;
            let distance = 20;
            const power = Math.random();
            switch (power) {
                case power > 0.5 && power < 0.74:
                distance = 25   
                intensity = 0.2
                    break;
                case power > 0.74 && power < 0.9:
                    distance = 28
                    intensity = 0.25
                    break;
                case power >= 0.9 && power < 0.97:
                    distance = 33
                    intensity = 0.3
                    break;
                case power >= 0.97:
                    intensity = 0.75
                    distance = 40;
                    break;  
                default:
                    break;
            }
            setFlash([Math.floor(Math.random() * (9 - -9 + 1)) + -9,Math.floor(Math.random() * (6 - -1 + 1)) + -1,Math.floor(Math.random() * (3 - -2 + 1) + -2),intensity])
            setDisplay(prev => !prev)
        }
    })

    return (
        // flash && 
        // <mesh>
        //     <boxBufferGeometry args={[3,3,3]} />
        //     <meshBasicMaterial color={"hotpink"} />
        // </mesh>
        display && <pointLight position={flash} color={"#3399ff"} intensity={flash[3]} distance={flash[4]} decay={1.7} />
        // flash && <pointLight position={[0,0,0]} color={"#062d89"} intensity={1} distance={10} decay={1.7} />
    )   
}

export default Lightning;