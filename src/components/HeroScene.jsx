import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

import { Suspense } from "react";

import Loader from "./Loader";
import Watch from "./Watch";
import Lights from "./Lights";
import CameraRig from "./CameraRig";
import FloatingParticles from "./FloatingParticles";
import EnergyRing from "./EnergyRing";
import HologramScan from "./HologramScan";
import VideoBackgroundPlane from "./VideoBackgroundPlane";

export default function HeroScene() {
  const isMobile =
    window.innerWidth < 768;

  return (
    <Canvas
      shadows
      camera={{
        position: isMobile
          ? [0, 0.5, 12]
          : [0, 0.5, 8],
        fov: 35,
      }}
      gl={{
        antialias: true,
        alpha: true,
        outputColorSpace:
          THREE.SRGBColorSpace,
      }}
    >
      <fog
        attach="fog"
        args={[
          "#000000",
          10,
          40,
        ]}
      />

      <Lights />

      <Environment
        preset="warehouse"
      />

      {/* AI City Video inside 3D World */}
      <VideoBackgroundPlane />

      {/* Cinematic Camera */}
      <CameraRig />

      {/* Atmosphere */}
      <FloatingParticles />

      <EnergyRing />

      <HologramScan />

      {/* Product */}
      <Suspense fallback={<Loader />}>
        <Watch />
      </Suspense>

      {/* Premium Glow */}
      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.3}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  );
}