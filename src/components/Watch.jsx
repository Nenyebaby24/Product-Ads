import { useGLTF } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Watch() {
  const ref = useRef();

  const [isMobile, setIsMobile] =
    useState(false);

  const { scene } = useGLTF(
    "/models/wrist_watch.glb"
  );

  useEffect(() => {
    const mediaQuery =
      window.matchMedia(
        "(max-width: 768px)"
      );

    setIsMobile(
      mediaQuery.matches
    );

    const handleChange = (e) => {
      setIsMobile(
        e.matches
      );
    };

    mediaQuery.addEventListener(
      "change",
      handleChange
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleChange
      );
    };
  }, []);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.material) {
          child.material.metalness = 1;
          child.material.roughness = 0.1;
          child.material.envMapIntensity = 4;
          child.material.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  useFrame((state) => {
    if (!ref.current) return;

    const t =
      state.clock.elapsedTime;

    // Luxury slow rotation
    ref.current.rotation.y =
      t * 0.4;

    // Floating animation
    ref.current.position.y =
      (isMobile ? 0.15 : 0.3) +
      Math.sin(t) * 0.1;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={
        isMobile
          ? 0.08
          : 0.2
      }
      position={[
        0,
        isMobile ? 0.15 : 0,
        0,
      ]}
      rotation={[
        -Math.PI / 2,
        0,
        0,
      ]}
    />
  );
}

useGLTF.preload(
  "/models/wrist_watch.glb"
);