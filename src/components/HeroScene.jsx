import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

import Watch from "./Watch";

import Lights from "./Lights";

export default function HeroScene() {
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 0.5, 8],
        fov: 35,
      }}
      gl={{
        antialias: true,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
    >
      <color attach="background" args={["#111111"]} />

      <Environment preset="studio" />

      <Lights />

      

      <Watch />
    </Canvas>
  );
}