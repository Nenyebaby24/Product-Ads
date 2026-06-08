export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.25} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
      />

      <directionalLight
        position={[-5, 2, 3]}
        intensity={0.5}
      />
    </>
  );
}