import React, { useRef, useEffect, Suspense, useMemo, useState } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { useTexture, PerspectiveCamera } from '@react-three/drei';
import './App.css';
import stone from '../src/assets/images/stone.jpg'
import * as THREE from 'three'
import { random } from 'lodash'
import Content from './Content'
import { Camera } from 'three';


const Box = ({ color, ...props }) => {

    const position = useMemo(() => {
        return [random(-3, 3, true), random(-3, 3, true), random(-10, 10, true)]
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
    const NUM = 50;
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
//     // Where the user is currently scrolled to
//     const t = document.body.getBoundingClientRect().top;



//     const [Zposition, newZPosition] = useState(t)



//     // Zcam = t * -0.009;

//     // moveCamera.position.z = t * -0.009;

//     // camera.position.z = t * -0.009;
//     // Three.Camera.position.z = t * -0.009;

// }




export default function App(props) {


    // const t = document.body.getBoundingClientRect().top;



    // const [Zposition, newZPosition] = useState(t)


    return (
        <div >
            <Canvas style={{ position: "fixed" }}>
                <ambientLight intensity={0.75} color={0xffffff} />
                <pointLight position={[5, 5, 5]} />
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault {...props} position={[0, 0, 10]} />
                    <Boxes className="boxes" />
                </Suspense>
            </Canvas >
            <Content />
        </div>

    )
}
