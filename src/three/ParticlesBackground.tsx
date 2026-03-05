'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import type { Points } from 'three';

function Particles() {
  const pointsRef = useRef<Points>(null);

  const positions = useMemo(() => {
    const amount = 1400;
    const coords = new Float32Array(amount * 3);

    for (let i = 0; i < amount; i++) {
      const i3 = i * 3;
      coords[i3] = (Math.random() - 0.5) * 22;
      coords[i3 + 1] = (Math.random() - 0.5) * 16;
      coords[i3 + 2] = (Math.random() - 0.5) * 12;
    }

    return coords;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.02;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.06) * 0.1;
  });

  return (
      <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#22d3ee" size={0.02} transparent opacity={0.5} />
    </points>
  );
}

export function ParticlesBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-75">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Particles />
      </Canvas>
    </div>
  );
}
