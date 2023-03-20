export default function Floor() {
    return (
      <mesh rotation-x={-Math.PI / 2} receiveShadow>
        <circleGeometry args={[5]} />
        <meshStandardMaterial color="grey"/>
      </mesh>
    )
  }