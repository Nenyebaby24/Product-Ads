import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export default function Watch() {
  const ref = useRef();

  const { scene } = useGLTF(
    "/models/wrist_watch.glb"
  );

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        console.log("Mesh:", child.name);
        console.log("Material:", child.material);

        console.log("Map:", child.material?.map);
        console.log(
          "MetalnessMap:",
          child.material?.metalnessMap
        );
        console.log(
          "RoughnessMap:",
          child.material?.roughnessMap
        );
      }
    });
  }, [scene]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y =
        state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.2}
      position={[0, 0, 0]}
    />
  );
}