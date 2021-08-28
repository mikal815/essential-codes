import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import * as THREE from 'three';
import './App.css';
import stone from '../src/assets/images/stone.jpg'

function Stones(props) {
  // This reference will give us direct access to the mesh
  const ref = useRef()

  const stoneTexture = useLoader(TextureLoader, stone)

  return (
    <mesh
      {...props}
      ref={ref}
    >
      <boxGeometry attach="geometry" args={[6, 6, 11]} />
      <meshStandardMaterial attach="material" map={stoneTexture} />
    </mesh>
  )
}

function App() {

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100))

  Array(150).fill().forEach(Stones)

  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Stones position={[x, y, z]} />
      </Suspense>
    </Canvas>
  );
}

export default App;
