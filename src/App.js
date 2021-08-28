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

    const [boxTexture] = useTexture([stone]);

    // Array(150).fill().forEach(Box)
    // [...Array(150)].forEach((_, i) => boxIt(i + 1))


    return (
        <mesh
            {...props}
            position={position}
            ref={mesh}
        // onClick={(e) => setActive(!active)}
        // onPointerOver={(e) => setHover(true)}
        // onPointerOut={(e) => setHover(false)}
        >
            <boxGeometry args={[1, 1, 2.3]} />
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
                        {/* <ambientLight intensity={0.9} />
                        <pointLight intensity={1.12} position={[0, 0, 0]} /> */}
                    </group>
                )
            })}
        </>
    )
}







export default function App() {

    // const { scene } = useThree();


    return (
        <Canvas className="main-canvas">
            <ambientLight intensity={0.75} color={0xffffff} />
            <pointLight position={[5, 5, 5]} />
            <Suspense fallback={null}>
                <Boxes />
            </Suspense>
        </Canvas >
    )
}
