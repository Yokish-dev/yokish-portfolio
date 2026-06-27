import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import { AdditiveBlending } from "three";
import { TextureLoader } from "three";
import { useMemo, useRef } from "react";

const tech = Array.from({ length: 80 }, (_, i) => {
  const icons = [
    "/react.png",
    "/javascript.png",
    "/html.png",
    "/css.png",
    "/nodejs.png",
    "/MongoDB.png",
    "/Git.png",
    "/android.png",
    "/ios.png",
  ];

  return icons[i % icons.length];
});

function TechIcon({ url, position, scale }) {
  const texture = useLoader(TextureLoader, url);
  const ref = useRef();

  useFrame((state) => {
    ref.current.rotation.z += 0.003;

    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
  });

  return (
    <Float speed={2} floatIntensity={2}>
      <group ref={ref} position={position}>
        {/* Glow */}
        <sprite scale={[scale * 1.4, scale * 1.4, 1]}>
          <spriteMaterial color="#00d4ff" transparent opacity={0.15} />
        </sprite>

        {/* Icon */}
        <sprite scale={[scale, scale, 1]}>
          <spriteMaterial
            map={texture}
            color="#00d4ff"
            transparent
            opacity={0.4}
            depthWrite={false}
          />
        </sprite>
      </group>
    </Float>
  );
}

function IconCloud() {
  const group = useRef();

  const items = useMemo(() => {
    return tech.map((icon) => ({
      url: icon,
      position: [
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 25,
        -Math.random() * 30,
      ],
      scale: Math.random() * 0.25 + 0.35,
    }));
  }, []);

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y = state.clock.elapsedTime * 0.02;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
  });

  return (
    <group ref={group}>
      {items.map((item, i) => (
        <TechIcon
          key={i}
          url={item.url}
          position={item.position}
          scale={item.scale}
        />
      ))}
    </group>
  );
}

export default function ParticlesBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 60 }}
      gl={{ alpha: true }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <fog attach="fog" args={["#0f172a", 10, 45]} />
      <color attach="background" args={["#0f172a"]} />

      <Stars radius={80} depth={60} count={5000} factor={5} fade />

      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} intensity={4} />

      <IconCloud />
    </Canvas>
  );
}
