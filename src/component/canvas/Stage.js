import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Preload } from "@react-three/drei";

const Stage = () => {
  const WeddingStage = useGLTF("./WeddingStage/WeddingStage.gltf");
  return (
    <group>
      {/* Lights */}
      <directionalLight
        intensity={1}
        position={[-20, 24, 36]}
        rotation={[Math.PI / -180 * 50, Math.PI / 180 * 44, Math.PI / -180 * 20]}
      />
      <ambientLight intensity={1.75} />
      <hemisphereLight intensity={0.15} groundColor={"#727b8a"} />

      {/* Wedding Stage with Shadows */}
      <mesh
        receiveShadow  
        castShadow     
        position={[-2, -3.25, -2]}
        scale={1.75}
      >
        <primitive object={WeddingStage.scene} />
      </mesh>
    </group>
  );
};

const StageCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [11, 9, 40], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Stage />
        {/* Directional Light (Sun-like light) */}
       
      </Suspense>

      <Preload all />
    </Canvas>
  );
};
export default StageCanvas;
