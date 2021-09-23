import React, { useRef, Suspense, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei';
import './App.css';
import stone from '../src/assets/images/stone.jpg'
import { random } from 'lodash'
import Content from './Content'


const Box = ({ color, ...props }) => {

    const position = useMemo(() => {
        return [random(-5, 5, true), random(-5, 5, true), random(-10, 60, true)]
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
            <boxGeometry args={[1.2, 1.2, 3.2]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}




const Boxes = () => {

    const NUM = 150;
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


const Box1 = () => {

    const position = useMemo(() => {
        return [10, 0, 15]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);


    return (
        <mesh
            position={position}
            ref={mesh}
            rotateX={10}
        >
            <boxGeometry args={[0.75, 0.75, 10.6]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}



const MyCamera = () => {
    useFrame(({ camera }) => {
        camera.position.z = document.body.getBoundingClientRect().top * -0.009;
        // camera.updateMatrix();
    });
    return null;
}




export default function App(props) {

    return (
        <div >
            <Canvas style={{ position: "fixed" }}>
                <ambientLight intensity={0.85} color={0xffffff} />
                <pointLight position={[5, 5, 5]} />
                <Suspense fallback={null}>
                    <Boxes className="boxes" />
                    <Box1 />
                </Suspense>
                <MyCamera />
            </Canvas >
            <Content onScroll={MyCamera} />
            {/* <Content onScroll={MyCamera} /> */}
        </div>
    )
}
