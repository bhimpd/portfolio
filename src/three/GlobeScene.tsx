'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef } from 'react';
import type { Mesh } from 'three';

function RotatingGlobe() {
  const globeRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!globeRef.current) return;

    globeRef.current.rotation.y += delta * 0.4;
    globeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.3, 64, 64]} />
        <meshStandardMaterial
          color="#22d3ee"
          wireframe
          emissive="#0891b2"
          emissiveIntensity={0.45}
          transparent
          opacity={0.65}
        />
      </mesh>
      <mesh scale={1.03}>
        <sphereGeometry args={[1.3, 64, 64]} />
        <meshBasicMaterial color="#84cc16" transparent opacity={0.07} />
      </mesh>
    </Float>
  );
}

export function GlobeScene() {
  return (
    <div className="h-[320px] w-full md:h-[440px]">
      <Canvas camera={{ position: [0, 0, 4.1], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <pointLight position={[4, 4, 4]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[-4, -3, 2]} intensity={0.7} color="#f97316" />
        <RotatingGlobe />
      </Canvas>
    </div>
  );
}
