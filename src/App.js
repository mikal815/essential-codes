import React, { useRef, Suspense, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei';
import './App.css';
import stone from '../src/assets/images/stone.jpg'
import { random } from 'lodash'
import Content from './Content'


const Box = ({ color, ...props }) => {

    const position = useMemo(() => {
        return [random(-20, 20, true), random(-5, 5, true), random(-35, 60, true)]
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
            <boxGeometry args={[3, 3, 7.5]} />
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


// const Box1 = () => {

//     const position = useMemo(() => {
//         return [1, 0, 2]
//     }, [])

//     const mesh = useRef();

//     const [boxTexture] = useTexture([stone]);

//     useFrame(() => {
//         mesh.current.rotation.x = document.body.getBoundingClientRect().top * .002;
//         mesh.current.rotation.y = document.body.getBoundingClientRect().top * .002;
//         mesh.current.rotation.z = document.body.getBoundingClientRect().top * .002;
//     })

//     return (
//         <mesh
//             position={position}
//             ref={mesh}
//         // rotation-x={0.1}
//         // rotateX={10}
//         >
//             <boxGeometry args={[3, 3, 7]} />
//             <meshStandardMaterial attach="material" map={boxTexture} />
//         </mesh >
//     )
// }


const Box2 = () => {

    const position = useMemo(() => {
        return [-5, -2, 13]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);

    useFrame(() => {
        mesh.current.rotation.x = document.body.getBoundingClientRect().top * .005;
        mesh.current.rotation.y = document.body.getBoundingClientRect().top * .002;
        // mesh.current.rotation.z = document.body.getBoundingClientRect().top * .002;
    })

    return (
        <mesh
            position={position}
            ref={mesh}
        // rotation-x={0.1}
        // rotateX={10}
        >
            <boxGeometry args={[3, 3, 7.5]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}


const Box3 = () => {

    const position = useMemo(() => {
        return [5, 2, 19]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);

    useFrame(() => {
        mesh.current.rotation.x = document.body.getBoundingClientRect().top * .003;
        mesh.current.rotation.y = document.body.getBoundingClientRect().top * .00002;
        mesh.current.rotation.z = document.body.getBoundingClientRect().top * .002;
    })

    return (
        <mesh
            position={position}
            ref={mesh}
        // rotation-x={0.1}
        // rotateX={10}
        >
            <boxGeometry args={[3, 3, 7.5]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}

const Box4 = () => {

    const position = useMemo(() => {
        return [-5, -1, 33]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);

    useFrame(() => {
        mesh.current.rotation.x = document.body.getBoundingClientRect().top * .004;
        mesh.current.rotation.y = document.body.getBoundingClientRect().top * .0002;
        mesh.current.rotation.z = document.body.getBoundingClientRect().top * .002;
    })

    return (
        <mesh
            position={position}
            ref={mesh}
        // rotation-x={0.1}
        // rotateX={10}
        >
            <boxGeometry args={[3, 3, 7.5]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}


const Box5 = () => {

    const position = useMemo(() => {
        return [1, 1, -5]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);

    useFrame(() => {
        mesh.current.rotation.z = document.body.getBoundingClientRect().top * .002;
        mesh.current.rotation.x = document.body.getBoundingClientRect().top * .002;
        // mesh.current.rotation.y = document.body.getBoundingClientRect().top * -.002;
    })

    return (
        <mesh
            position={position}
            ref={mesh}
        // rotation-x={0.1}
        // rotateX={10}
        >
            <boxGeometry args={[3, 3, 7.5]} />
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
                {/* <ambientLight intensity={0.95} color={0xffffff} /> */}
                <ambientLight intensity={1.00} color={0xffffff} />
                <pointLight position={[5, 5, 5]} color={0xffffff} />
                <Suspense fallback={null}>
                    <Boxes className="boxes" />
                    {/* <Box1 /> */}
                    <Box2 />
                    <Box3 />
                    <Box4 />
                    <Box5 />
                </Suspense>
                <MyCamera />
            </Canvas >
            <Content onScroll={() => {
                MyCamera();
                // Box1(); 
                Box2(); Box3(); Box4(); Box5()
            }} />
        </div>
    )
}
