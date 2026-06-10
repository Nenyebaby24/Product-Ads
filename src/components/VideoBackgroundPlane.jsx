import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function VideoBackgroundPlane() {
  const meshRef = useRef();

  useEffect(() => {
    const video =
      document.createElement("video");

    video.src =
      "/videos/ai-city-background.mp4";

    video.loop = true;
    video.muted = true;
    video.playsInline = true;

    video.play();

    const texture =
      new THREE.VideoTexture(
        video
      );

    texture.colorSpace =
      THREE.SRGBColorSpace;

    if (meshRef.current) {
      meshRef.current.material.map =
        texture;

      meshRef.current.material.needsUpdate =
        true;
    }
  }, []);

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, -12]}
    >
      <planeGeometry
        args={[20, 12]}
      />

      <meshBasicMaterial
        toneMapped={false}
        transparent
        opacity={0.25}
      />
    </mesh>
  );
}