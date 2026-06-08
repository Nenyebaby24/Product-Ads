import { Points, PointMaterial } from "@react-three/drei";

export default function FloatingParticles() {
  const particles = [];

  for (let i = 0; i < 500; i++) {
    particles.push(
      (Math.random() - 0.5) * 10
    );
  }

  return (
    <Points positions={particles}>
      <PointMaterial
        size={0.03}
        transparent
      />
    </Points>
  );
}