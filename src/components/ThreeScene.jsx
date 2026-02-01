import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { GymModel } from "./Model";
/* ---- Individual floating mesh ---- */
function FloatingMesh({ geometry, position, rotationSpeed, color, scale = 1 }) {
  const meshRef = useRef(null);
  const clock = useRef(new THREE.Clock());

  useFrame(() => {
    if (!meshRef.current) return;
    const t = clock.current.getElapsedTime();
    meshRef.current.rotation.x += rotationSpeed[0] * 0.01;
    meshRef.current.rotation.y += rotationSpeed[1] * 0.01;
    // gentle bob
    meshRef.current.position.y =
      position[1] + Math.sin(t * 0.8 + position[0]) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {geometry === "torus" && <torusGeometry args={[1, 0.3, 16, 100]} />}
      {geometry === "icosahedron" && <icosahedronGeometry args={[1, 1]} />}
      {geometry === "dodecahedron" && <dodecahedronGeometry args={[1, 0]} />}
      <meshStandardMaterial
        color={color}
        wireframe={geometry !== "torus"}
        transparent
        opacity={0.6}
        emissive={color}
        emissiveIntensity={0.15}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* ---- Scene wrapper ---- */
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#e8ff00" intensity={1.2} />
      <pointLight position={[-5, -3, -2]} color="#ffffff" intensity={0.4} />

      <FloatingMesh
        geometry="torus"
        position={[0, 0, -1]}
        rotationSpeed={[0.4, 0.6, 0]}
        color="#e8ff00"
        scale={1.8}
      />
      <GymModel
        url="/models/dumbbell.glb"
        position={[-0.2, -0.1, -1]}
        scale={1.8}
        rotationSpeed={0.9}
      />

      {/* <FloatingMesh
        geometry="icosahedron"
        position={[-3.5, 1.2, -4]}
        rotationSpeed={[0.3, 0.5, 0.2]}
        color="#a8a8a8"
        scale={1.1}
      />
      <FloatingMesh
        geometry="dodecahedron"
        position={[3.8, -0.8, -3.5]}
        rotationSpeed={[0.5, 0.3, 0.1]}
        color="#e8ff00"
        scale={0.9}
      />
      <FloatingMesh
        geometry="icosahedron"
        position={[1.5, 2.2, -5]}
        rotationSpeed={[0.2, 0.7, 0.3]}
        color="#6e6e6e"
        scale={0.6}
      />
      <FloatingMesh
        geometry="dodecahedron"
        position={[-2, -2, -5.5]}
        rotationSpeed={[0.6, 0.2, 0.4]}
        color="#e8ff00"
        scale={0.5}
      /> */}
    </>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      camera={{ position: [0, 0, -2], fov: 40 }}
      // frameloop="demand"
    >
      <fog attach="fog" color="#0a0a0a" near={10} far={10} />
      <Scene />
    </Canvas>
  );
}
