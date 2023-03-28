import React, { useRef, Suspense, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei';
import './App.css';
import stone from '../src/assets/images/stone.jpg'
import Content from './components/Content'

// 3D BOXES //////////////////////////////////////////////////////////////////////////////
const Box1 = () => {

    const position = useMemo(() => {
        return [0, 0, -3.3]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);

    useFrame(() => {
        mesh.current.rotation.z = document.body.getBoundingClientRect().top * .002;
        mesh.current.rotation.x = document.body.getBoundingClientRect().top * .002;
    })

    return (
        <mesh
            position={position}
            ref={mesh}
        >
            <boxGeometry args={[2.5, 1.8, 5.4]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}


const Box2 = () => {

    const position = useMemo(() => {
        return [-3, -1, 12]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);

    useFrame(() => {
        mesh.current.rotation.y = document.body.getBoundingClientRect().top * .001;
        mesh.current.rotation.x = document.body.getBoundingClientRect().top * .003;
    })

    return (
        <mesh
            position={position}
            ref={mesh}
        >
            <boxGeometry args={[6, 7, 2]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}


const Box3 = () => {

    const position = useMemo(() => {
        return [5, -1, 26]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);

    useFrame(() => {
        mesh.current.rotation.x = document.body.getBoundingClientRect().top * .003;
        mesh.current.rotation.y = document.body.getBoundingClientRect().top * .002;
    })

    return (
        <mesh
            position={position}
            ref={mesh}
        >
            <boxGeometry args={[2, 7, 5]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}

const Box4 = () => {

    const position = useMemo(() => {
        return [-5, -1, 36]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);

    useFrame(() => {
        mesh.current.rotation.x = document.body.getBoundingClientRect().top * .004;
        mesh.current.rotation.y = document.body.getBoundingClientRect().top * .0002;
    })

    return (
        <mesh
            position={position}
            ref={mesh}
        >
            <boxGeometry args={[8, 3, 7.5]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}

const Box5 = () => {

    const position = useMemo(() => {
        return [5, -1, 45]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);

    useFrame(() => {
        mesh.current.rotation.y = document.body.getBoundingClientRect().top * .00025;
        mesh.current.rotation.z = document.body.getBoundingClientRect().top * -.004;
    })

    return (
        <mesh
            position={position}
            ref={mesh}
        >
            <boxGeometry args={[3, 3, 7.5]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}

const Box6 = () => {

    const position = useMemo(() => {
        return [-5, -1, 55]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);

    useFrame(() => {
        mesh.current.rotation.y = document.body.getBoundingClientRect().top * .00025;
        mesh.current.rotation.z = document.body.getBoundingClientRect().top * -.00451;
    })

    return (
        <mesh
            position={position}
            ref={mesh}
        >
            <boxGeometry args={[3, 3, 7.5]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}

// MOVE CAMERA ON Z AXIS / THIS FUNCTION RUNS WHEN CONTENT IS SCROLLED////////////////////////////////////////
const MyCamera = () => {
    useFrame(({ camera }) => {
        camera.position.z = document.body.getBoundingClientRect().top * -0.009;
    });
    return null;
}


export default function App(props) {

    return (
        <>
            <div className="layout">
                <Canvas style={{ position: "fixed" }}>
                    <ambientLight intensity={1.00} color={0xffffff} />
                    <pointLight position={[5, 5, 5]} color={0xffffff} />
                    <Suspense fallback={null}>
                        <Box1 />
                        <Box2 />
                        <Box3 />
                        <Box4 />
                        <Box5 />
                        <Box6 />
                    </Suspense>
                    <MyCamera />
                </Canvas >
                <Content onScroll={() => { MyCamera(); Box1(); Box2(); Box3(); Box4(); Box5(); Box6(); }} />
                <div className="img" role="img"></div>
            </div>
        </>
    )
}
