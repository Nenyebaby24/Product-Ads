import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export default function HologramScan() {
  const scanRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive breakpoint
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Check on initial mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame((state) => {
    if (!scanRef.current) return;

    // Adjust vertical movement speed/range dynamically
    // Mobile range: 0.4 | Desktop range: 1.5
    const travelRange = isMobile ? 0.4 : 1.5;
    
    scanRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 2) * travelRange;
  });

  // Dynamic geometry dimensions: [width, height, depth]
  // Mobile: [1.5, 0.02, 1.5] | Desktop (Original): [3, 0.05, 3]
  const geometryArgs = isMobile ? [1.5, 0.02, 1.5] : [2, 0.04, 2];

  return (
    <mesh ref={scanRef}>
      <boxGeometry args={geometryArgs} />

      <meshStandardMaterial
        emissive="#00ffff"
        emissiveIntensity={8}
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}