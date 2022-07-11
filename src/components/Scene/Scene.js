import { Canvas } from "@react-three/fiber"
import Clouds from "./Clouds"
import Lightning from "./Lightning"
import Logo from "./Logo"
import Banner from "../Banner/Banner"
const Scene = () => {
    
    return (
        <div className="canvas-container">
            <Banner />
            <Canvas id="canvas" camera={{position: [0,0,10]}}>
                <ambientLight color="#993366" intensity={0.4} />
                <pointLight position={[0,20, -18]} color="#80d4ff" intensity={0.25} />
                <Lightning />
                <Clouds />
                <Logo />
            </Canvas>
        </div>
    )

}

export default Scene