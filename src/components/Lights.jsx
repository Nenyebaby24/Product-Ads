export default function Lights() {
  return (
    <>
      <ambientLight
        intensity={0.25}
      />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <directionalLight
        position={[-5, 2, 3]}
        intensity={1}
      />

      <pointLight
        position={[0, 4, 4]}
        intensity={1.5}
      />
    </>
  );
}