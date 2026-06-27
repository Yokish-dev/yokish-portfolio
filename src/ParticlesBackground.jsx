import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";

export default function ParticlesBackground() {
  const particles = useMemo(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    return positions;
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 2] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -5, // behind everything
      }}
    >
      <Points positions={particles} stride={3}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.015}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </Canvas>
  );
}
