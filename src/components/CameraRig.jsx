import { useThree } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";

export default function CameraRig() {
  const { camera } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    camera.position.x =
      Math.sin(t * 0.3) * 1.5;

    camera.position.z =
      5 + Math.cos(t * 0.3);

    camera.lookAt(0, 0, 0);
  });

  return null;
}