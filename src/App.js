import React, { useRef, useEffect, Suspense, useMemo } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei';
import './App.css';
import stone from '../src/assets/images/stone.jpg'
import * as THREE from 'three'
import { random } from 'lodash'
import Content from './Content'



const Box = ({ color, ...props }) => {

    const position = useMemo(() => {
        return [random(-3, 3, true), random(-3, 3, true), random(-3, 3, true)]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);


    return (
        <mesh
            {...props}
            position={position}
            ref={mesh}
        // onClick={(e) => setActive(!active)}
        // onPointerOver={(e) => setHover(true)}
        // onPointerOut={(e) => setHover(false)}
        >
            <boxGeometry args={[0.75, 0.75, 1.6]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}




const Boxes = () => {
    const NUM = 20;
    const spheres = new Array(NUM).fill()
    return (
        <>
            {spheres.map((_, i) => {
                return (
                    <group>
                        <Box key={i} color="#fff" />
                    </group>
                )
            })}
        </>
    )
}


// function moveCamera() {

//     const camera = <perspectiveCamera />


//     const t = document.body.getBoundingClientRect().top;


//     camera.position.z = t * -0.009;

// }

// document.body.onscroll = moveCamera
// moveCamera();





export default function App() {


    return (
        <div className="main-container">
            <Canvas style={{ position: "fixed" }}>
                <ambientLight intensity={0.75} color={0xffffff} />
                <pointLight position={[5, 5, 5]} />
                <Suspense fallback={null}>
                    <Boxes className="boxes" />
                </Suspense>
            </Canvas >
            <Content />
        </div>

    )
}
