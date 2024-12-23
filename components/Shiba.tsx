"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader  } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

function MeshComponent() {
  const fileUrl = "/shiba/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function Shiba() {
  return (
    <div className='absolute z-30	 justify-center items-center h-screen'>
      <Canvas className='h-2xl w-2xl'
      shadows
      >
        <OrbitControls />
       
        <MeshComponent />
        <ambientLight color={"red"} intensity={1} />
      </Canvas>
    </div>
  );
}
