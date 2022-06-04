import React, { useRef, Suspense, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei';
import './App.css';
import stone from '../src/assets/images/stone.jpg'
import Content from './components/Content'
import ContentMobile from './components/ContentMobile'
import ContentTablet from './components/ContentTablet'
import MediaQuery from 'react-responsive';

// 3D BOXES ON LAPTOP ////////////////////////////////////////////////////////////////////////////////
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
            {/* <boxGeometry args={[1.8, 1.8, 4.8]} /> */}
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
        mesh.current.rotation.y = document.body.getBoundingClientRect().top * .001;
    })

    return (
        <mesh
            position={position}
            ref={mesh}
        >
            <boxGeometry args={[5, 3, 7.5]} />
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
        mesh.current.rotation.z = document.body.getBoundingClientRect().top * -.0045;
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

// 3D BOXES ON MOBILE ////////////////////////////////////////////////////////////////////////////////
const MobileBox = () => {

    const position = useMemo(() => {
        return [0, 0, -3]
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
            <boxGeometry args={[1, 1, 3]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}

const MobileBox2 = () => {

    const position = useMemo(() => {
        return [-1, -1, 10]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);

    useFrame(() => {
        mesh.current.rotation.x = document.body.getBoundingClientRect().top * .005;
        mesh.current.rotation.y = document.body.getBoundingClientRect().top * .001;
    })

    return (
        <mesh
            position={position}
            ref={mesh}
        >
            <boxGeometry args={[1, 1, 3]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}

const MobileBox3 = () => {

    const position = useMemo(() => {
        return [1, -1, 20]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);

    useFrame(() => {
        mesh.current.rotation.x = document.body.getBoundingClientRect().top * .003;
        mesh.current.rotation.y = document.body.getBoundingClientRect().top * .002;
        mesh.current.rotation.z = document.body.getBoundingClientRect().top * .002;
    })

    return (
        <mesh
            position={position}
            ref={mesh}
        >
            <boxGeometry args={[1, 1, 3]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}

const MobileBox4 = () => {

    const position = useMemo(() => {
        return [-1, -1, 65]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);

    useFrame(() => {
        mesh.current.rotation.x = document.body.getBoundingClientRect().top * .005;
        mesh.current.rotation.y = document.body.getBoundingClientRect().top * .002;
        mesh.current.rotation.z = document.body.getBoundingClientRect().top * 0.009;
    })

    return (
        <mesh
            position={position}
            ref={mesh}
        >
            <boxGeometry args={[1, 1, 3]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}

const MobileBox5 = () => {

    const position = useMemo(() => {
        return [0, -1, 78]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);

    useFrame(() => {
        mesh.current.rotation.y = document.body.getBoundingClientRect().top * .002;
        mesh.current.rotation.z = document.body.getBoundingClientRect().top * 0.009;
    })

    return (
        <mesh
            position={position}
            ref={mesh}
        >
            <boxGeometry args={[1, 1, 3]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}


// 3D BOXES ON TABLET ////////////////////////////////////////////////////////////////////////////////
const TabletBox = () => {

    const position = useMemo(() => {
        return [0, 0, -1.5]
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
            <boxGeometry args={[0.6, 0.6, 1.75]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}

const TabletBox2 = () => {

    const position = useMemo(() => {
        return [-1, -1, 10]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);

    useFrame(() => {
        mesh.current.rotation.x = document.body.getBoundingClientRect().top * .005;
        mesh.current.rotation.y = document.body.getBoundingClientRect().top * .001;
    })

    return (
        <mesh
            position={position}
            ref={mesh}
        >
            <boxGeometry args={[1, 1, 3]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}

const TabletBox3 = () => {

    const position = useMemo(() => {
        return [1, -1, 20]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);

    useFrame(() => {
        mesh.current.rotation.x = document.body.getBoundingClientRect().top * .003;
        mesh.current.rotation.y = document.body.getBoundingClientRect().top * .002;
        mesh.current.rotation.z = document.body.getBoundingClientRect().top * .002;
    })

    return (
        <mesh
            position={position}
            ref={mesh}
        >
            <boxGeometry args={[1, 1, 3]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}

const TabletBox4 = () => {

    const position = useMemo(() => {
        return [-1, -1, 65]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);

    useFrame(() => {
        mesh.current.rotation.x = document.body.getBoundingClientRect().top * .005;
        mesh.current.rotation.y = document.body.getBoundingClientRect().top * .002;
        mesh.current.rotation.z = document.body.getBoundingClientRect().top * 0.009;
    })

    return (
        <mesh
            position={position}
            ref={mesh}
        >
            <boxGeometry args={[1, 1, 3]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}

const TabletBox5 = () => {

    const position = useMemo(() => {
        return [0, -1, 78]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);

    useFrame(() => {
        mesh.current.rotation.y = document.body.getBoundingClientRect().top * .002;
        mesh.current.rotation.z = document.body.getBoundingClientRect().top * 0.009;
    })

    return (
        <mesh
            position={position}
            ref={mesh}
        >
            <boxGeometry args={[1, 1, 3]} />
            <meshStandardMaterial attach="material" map={boxTexture} />
        </mesh >
    )
}

const TabletBox6 = () => {

    const position = useMemo(() => {
        return [0, -2, 58]
    }, [])

    const mesh = useRef();

    const [boxTexture] = useTexture([stone]);

    useFrame(() => {
        mesh.current.rotation.y = document.body.getBoundingClientRect().top * -.001;
        mesh.current.rotation.z = document.body.getBoundingClientRect().top * 0.01;
    })

    return (
        <mesh
            position={position}
            ref={mesh}
        >
            <boxGeometry args={[1, 1, 3]} />
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
            <MediaQuery minDeviceWidth={850}>
                <div className="laptop-layout">
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
            </MediaQuery>

            <MediaQuery maxDeviceWidth={500}>
                <div className="mobile-layout">
                    <Canvas style={{ position: "fixed" }}>
                        <ambientLight intensity={1.00} color={0xffffff} />
                        <pointLight position={[5, 5, 5]} color={0xffffff} />
                        <Suspense fallback={null}>
                            <MobileBox />
                            <MobileBox2 />
                            <MobileBox3 />
                            <MobileBox4 />
                            <MobileBox5 />
                        </Suspense>
                        <MyCamera />
                    </Canvas >
                    <ContentMobile onScroll={() => { MyCamera(); }} />
                    <div className="img" role="img"></div>
                </div>
            </MediaQuery>

            <MediaQuery minDeviceWidth={500} maxDeviceWidth={850}>
                <div className="tablet-layout">
                    <Canvas style={{ position: "fixed" }}>
                        <ambientLight intensity={1.00} color={0xffffff} />
                        <pointLight position={[5, 5, 5]} color={0xffffff} />
                        <Suspense fallback={null}>
                            <TabletBox />
                            <TabletBox2 />
                            <TabletBox3 />
                            <TabletBox4 />
                            <TabletBox5 />
                            <TabletBox6 />
                        </Suspense>
                        <MyCamera />
                    </Canvas >
                    <ContentTablet onScroll={() => { MyCamera(); Box1(); Box2(); Box3(); Box4(); Box5(); Box6(); }} />
                    <div className="img" role="img"></div>
                </div>
            </MediaQuery>
        </>
    )
}
