import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";

export default function CameraRig() {
  const { camera } = useThree();

  const [isMobile, setIsMobile] =
    useState(false);

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

  useFrame((state) => {
    const t =
      state.clock.elapsedTime;

    const baseZ =
      isMobile ? 10 : 8;

    camera.position.x =
      Math.sin(t * 0.25) *
      (isMobile ? 0.8 : 1.8);

    camera.position.y =
      0.5 +
      Math.sin(t * 0.4) *
      (isMobile ? 0.1 : 0.3);

    camera.position.z =
      baseZ +
      Math.cos(t * 0.2) * 0.5;

    camera.lookAt(
      0,
      0,
      0
    );
  });

  return null;
}