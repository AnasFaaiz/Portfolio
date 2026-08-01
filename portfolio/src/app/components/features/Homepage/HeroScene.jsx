'use client';

import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { useReducedMotion } from 'framer-motion';

/* ============================================================
   HERO SCENE  (client only — see Hero.jsx for the dynamic import)

   What's on screen:
     · a soft distorted core        → the thing being built
     · a wireframe shell around it  → the system around the thing
     · nodes on an outer sphere     → the services it talks to

   The whole cluster eases toward the cursor. Nothing snaps —
   every rotation is lerped so it feels weighted, not twitchy.

   Tuning knobs are all at the top of Cluster().
   ============================================================ */

/* Evenly spaced points on a sphere (Fibonacci lattice).
   Random placement clumps; this doesn't. */
function spherePoints(count, radius) {
  const golden = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: count }, (_, i) => {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    return [Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius];
  });
}

function Cluster({ still = false }) {
  /* --- tuning --- */
  const FOLLOW = 0.45;   // how far the cluster turns toward the cursor
  const EASE = 0.045;    // lower = heavier, laggier follow
  const SPIN = 0.12;     // idle spin of the shell, rad/sec

  const group = useRef();
  const shell = useRef();
  const nodes = useMemo(() => spherePoints(20, 2.45), []);

  useFrame((state, delta) => {
    if (!group.current || still) return;
    const { x, y } = state.pointer; // -1 … 1 across the canvas

    group.current.rotation.y += (x * FOLLOW - group.current.rotation.y) * EASE;
    group.current.rotation.x += (-y * FOLLOW * 0.7 - group.current.rotation.x) * EASE;

    if (shell.current) {
      shell.current.rotation.y += delta * SPIN;
      shell.current.rotation.z += delta * SPIN * 0.4;
    }
  });

  return (
    <group ref={group}>
      {/* Core — the soft blob. Distort/speed control how liquid it looks. */}
      <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.9}>
        <mesh>
          <icosahedronGeometry args={[1.35, 24]} />
          <MeshDistortMaterial
            color="#4c6fff"
            emissive="#1b2b7a"
            emissiveIntensity={0.6}
            roughness={0.18}
            metalness={0.65}
            distort={0.38}
            speed={1.6}
          />
        </mesh>
      </Float>

      {/* Shell — wireframe cage, always slowly turning */}
      <mesh ref={shell}>
        <icosahedronGeometry args={[2.15, 1]} />
        <meshBasicMaterial
          color="#8fb8ff"
          wireframe
          transparent
          opacity={0.16}
        />
      </mesh>

      {/* Nodes — small emissive dots on the outer sphere */}
      {nodes.map((pos, i) => (
        <Float key={i} speed={1 + (i % 4) * 0.25} floatIntensity={0.6}>
          <mesh position={pos}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshStandardMaterial
              color={i % 7 === 0 ? '#ff7a45' : '#8fb8ff'}
              emissive={i % 7 === 0 ? '#ff7a45' : '#4c6fff'}
              emissiveIntensity={2.2}
              toneMapped={false}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function HeroScene() {
  const reduce = useReducedMotion();

  return (
    <Canvas
      camera={{ position: [0, 0, 6.6], fov: 45 }}
      dpr={[1, 1.8]}                    /* caps pixel ratio — retina laptops stay smooth */
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      {/* Lighting: one cool key, one warm rim. No HDRI, so nothing
          has to be fetched over the network for the scene to render. */}
      <ambientLight intensity={0.45} />
      <pointLight position={[5, 5, 5]} intensity={70} color="#8fb8ff" />
      <pointLight position={[-6, -3, 2]} intensity={40} color="#ff7a45" />

      <Suspense fallback={null}>
        <Cluster still={reduce} />
      </Suspense>
    </Canvas>
  );
}
