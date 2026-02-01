import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  useGLTF,
  PresentationControls,
  OrbitControls,
} from "@react-three/drei";

export function GymModel({
  url = "/models/dumbbell.glb",
  position = [0, 0, -2],
  scale = 1,
  rotationSpeed = 0.4,
}) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += rotationSpeed * 0.01;
  });

  return (
    <primitive
      ref={ref}
      object={useGLTF(url).scene}
      position={position}
      scale={scale}
    />
  );
}
