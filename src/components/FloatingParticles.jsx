import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

export default function FloatingParticles() {
  const particles = useMemo(() => {
    const positions = [];

    for (let i = 0; i < 1500; i++) {
      positions.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
    }

    return new Float32Array(
      positions
    );
  }, []);

  useFrame((state) => {
    state.scene.rotation.y =
      Math.sin(
        state.clock.elapsedTime * 0.05
      ) * 0.03;
  });

  return (
    <Points
      positions={particles}
      stride={3}
    >
      <PointMaterial
        transparent
        size={0.04}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}