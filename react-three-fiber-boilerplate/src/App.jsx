import { Canvas } from '@react-three/fiber';
import Box from './Box';



export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 3], rotation: [0, 0, 0] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-0.75, 0, 0]} name="A" />
      <Box position={[0.75, 0, 0]} name="B" />
    </Canvas>
  );
}
