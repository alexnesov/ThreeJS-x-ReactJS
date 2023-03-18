export default function Box({position, frame, wireframe}) {
  console.log({position, frame, wireframe});

  return (
    <mesh position={position} name={name} >
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe={wireframe} />
    </mesh>
  );
}
