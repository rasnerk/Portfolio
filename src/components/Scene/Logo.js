import { useFrame } from "@react-three/fiber"
import LogoWings from "./LogoWings"
import React from "react"
const Logo = () => {
    const rotater = React.useRef()
    const wings =  [
        { rotation: [ 0, 0, Math.PI / 1.5 ], position: [-0.25,0,0]  },
        { rotation: [ 0, 0, Math.PI / 2.75 ], position: [-2,2.5,0]  },
        { rotation: [ 0, 0, Math.PI / 1 ], position: [3,0.15,0]  },
        { rotation: [ 0, 0, -Math.PI / 1.5 ], position: [4.25,3.5,0]  },
        { rotation: [ 0, 0, -Math.PI / 3.5 ], position: [2,6.1,0]  },
        { rotation: [ 0, 0, 0 ], position: [-1,6,0]  },
    ]
    const balls = [
        { position: [8,3,0], size: 0.25 },
        { position: [-6,3,0], size: 0.25 },
        { position: [-4,-2,0], size: 0.25 },
        { position: [-4,7,0], size: 0.25 },
        { position: [6,-2,0], size: 0.25 },
        { position: [6,7,0], size: 0.25 },
        { position: [1,9,0], size: 0.25 },
        { position: [1,-3.5,0], size: 0.25 },

        { position: [-8,3,0], size: 0.5 },
        { position: [10,3,0], size: 0.5 },
        { position: [-5.5,-3.5,0], size: 0.5 },
        { position: [-5.5,8.5,0], size: 0.5 },
        { position: [1,-5.5,0], size: 0.5 },
        { position: [1,11,0], size: 0.5 },
        { position: [7.5,8.5,0], size: 0.5 },
        { position: [7.5,-3.5,0], size: 0.5 }
    ]
    const inner = wings.map( (wing,i) => (
        <LogoWings key={i} rotation={wing.rotation} position={wing.position} />
    ))
    const outer = balls.map( (ball,i) => (
        <mesh key={i} position={ball.position}>
            <sphereGeometry args={[ball.size, 64,32]} />
            <meshPhongMaterial />
        </mesh>
    ))

    useFrame(() => {
        rotater.current.rotation.z += 0.001;
    })
    return (
        <group ref={rotater} position={[0,-2,-12]}>
            {inner}
            {outer}
        </group>
    )
}

export default Logo