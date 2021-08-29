import React, { useRef, useEffect, Suspense, useMemo } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei';
import './App.css';
import stone from '../src/assets/images/stone.jpg'
import hall from '../src/assets/images/hall.jpg'
import * as THREE from 'three'
import { random } from 'lodash'

import { a } from '@react-spring/three';
import Scroll from './Scroll';




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



// function Camera(props) {
//     const ref = useRef()
//     const { setDefaultCamera } = useThree()
//     const [y] = Scroll([-100, 100], { domTarget: window });


//     useEffect(() => void setDefaultCamera(ref.current), [])
//     useFrame(() => ref.current.updateMatrixWorld())
//     return <a.perspectiveCamera ref={ref} {...props} position-y={y.to((y) => (y / 500) * 25)} />


// }

function Camera(props) {
    const ref = useRef()
    const set = useThree((state) => state.set);
    const { setDefaultCamera } = useThree()
    useEffect(() => void set({ camera: ref.current }), [])
    useFrame(() => ref.current.updateMatrixWorld())
    return <perspectiveCamera ref={ref} {...props} />

}



export default function App() {


    return (
        <Canvas>
            <ambientLight intensity={0.75} color={0xffffff} />
            <pointLight position={[5, 5, 5]} />

            <Camera position={[0, 0, 10]} />

            <Suspense fallback={null}>
                <Boxes />
            </Suspense>
        </Canvas >
    )
}
