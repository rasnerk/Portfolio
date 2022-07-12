import { Canvas } from "@react-three/fiber"
import Clouds from "./Clouds"
import Lightning from "./Lightning"
import Logo from "./Logo"
import Banner from "../Banner/Banner"
import { useState, useEffect } from "react"

const Scene = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])
    
    return (
        <div className="canvas-container">
            <Banner />
            <Canvas id="canvas" camera={{position: [0,0,10]}}>
                {width > 600 ?
                    <ambientLight color="#8585ad" intensity={0.4} />
                    :
                    <ambientLight color="#8585ad" intensity={0.5} />
                }
                <pointLight position={[0,10, -10]} color="#ffffff" intensity={0.5} />
                <Lightning />
                <Clouds />
                <Logo />
            </Canvas>
        </div>
    )

}

export default Scene