import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export default function EnergyRing() {
  const ring = useRef();
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive breakpoint
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Check on initial mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame((state) => {
    if (!ring.current) return;

    ring.current.rotation.z =
      state.clock.elapsedTime * 0.5;

    ring.current.rotation.y =
      state.clock.elapsedTime * 0.3;
  });

  // Dynamic geometry dimensions: [radius, tubeRadius, radialSegments, tubularSegments]
  // Mobile: [0.8, 0.015, 16, 100] | Desktop (Original): [2, 0.03, 16, 100]
  const ringArgs = isMobile ? [0.8, 0.015, 16, 100] : [1.7, 0.028, 16, 100];

  return (
    <mesh
      ref={ring}
      rotation={[
        Math.PI / 2,
        0,
        0,
      ]}
    >
      <torusGeometry args={ringArgs} />

      <meshStandardMaterial
        emissive="#00ffff"
        emissiveIntensity={5}
      />
    </mesh>
  );
}