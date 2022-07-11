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
                distance = 30   
                intensity = 0.25
                    break;
                case power > 0.74 && power < 0.9:
                    distance = 35
                    intensity = 0.30
                    break;
                case power >= 0.9 && power < 0.97:
                    distance = 35
                    intensity = 0.35
                    break;
                case power >= 0.97:
                    intensity = 0.75
                    distance = 40;
                    break;  
                default:
                    break;
            }
            setFlash([Math.floor(Math.random() * (9 - -9 + 1)) + -9,Math.floor(Math.random() * (6 - -1 + 1)) + -1,Math.floor(Math.random() * (3 - -2 + 1) + -2),intensity,distance])
            setDisplay(prev => !prev)
        }
    })

    return (
        display && <pointLight position={[ flash[0],flash[1],flash[2] ]} color={"#66b3ff"} intensity={flash[3]} distance={flash[4]} decay={1.7} />
    )   
}

export default Lightning;