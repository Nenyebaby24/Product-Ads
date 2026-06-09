import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function VideoBackgroundPlane() {
  const meshRef = useRef();

  useEffect(() => {
    const video =
      document.createElement("video");

    video.src =
      "/videos/ai-city-background.mp4";

    video.crossOrigin =
      "anonymous";

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

    if (
      meshRef.current
    ) {
      meshRef.current.material.map =
        texture;
    }
  }, []);

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, -20]}
    >
      <planeGeometry
        args={[60, 34]}
      />

      <meshBasicMaterial />
    </mesh>
  );
}