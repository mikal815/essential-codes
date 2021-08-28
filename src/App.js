import React, { useRef, useState, Suspense, useMemo } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei';
import './App.css';
import stone from '../src/assets/images/stone.jpg'
import hall from '../src/assets/images/hall.jpg'
import * as THREE from 'three'
import { random } from 'lodash'




const Box = ({ color, ...props }) => {

    const position = useMemo(() => {
        return [random(-3, 3, true), random(-3, 3, true), random(-3, 3, true)]
    }, [])

    const mesh = useRef();



    // // This reference will give us direct access to the mesh
    // const ref = useRef()
    // // Set up state for the hovered and active state
    // const [hovered, setHover] = useState(false)
    // const [active, setActive] = useState(false)
    // // Rotate mesh every frame, this is outside of React without overhead
    // useFrame(() => {
    //     ref.current.rotation.x = ref.current.rotation.y += 0.01
    // })

    const [boxTexture] = useTexture([stone]);

    // Array(150).fill().forEach(Box)



    return (
        <mesh
            {...props}
            position={position}
            ref={mesh}
        // ref={ref}
        // scale={active ? 1.5 : 1}
        // onClick={(e) => setActive(!active)}
        // onPointerOver={(e) => setHover(true)}
        // onPointerOut={(e) => setHover(false)}
        >
            <boxGeometry args={[1, 1, 2.3]} />
            {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} */}
            <meshStandardMaterial attach="material" map={boxTexture}
            />

        </mesh >
    )
}



export default function App() {

    // const { scene } = useThree();



    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            {/* <Box position={[-1.2, 0, 0]} /> */}
            <Suspense fallback={null}>
                <Box />
            </Suspense>
        </Canvas >
    )
}
