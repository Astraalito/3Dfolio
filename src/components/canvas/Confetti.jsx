import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ConfettiExplosion = ({ position = [0, 0, 0], onComplete }) => {
  const groupRef = useRef();
  const start = useRef(Date.now());
  const velocities = useRef([]);

  const numParticles = 20;

  useEffect(() => {
    // Initialisation des vitesses des particules
    velocities.current = Array.from({ length: numParticles }, () => {
      return new THREE.Vector3(
        (Math.random() - 0.5) * 0.4,  // Mouvement X
        Math.random() * 0.4 + 0.2,    // Mouvement Y
        (Math.random() - 0.5) * 0.4   // Mouvement Z
      );
    });
  }, []);

  useFrame(() => {
    const elapsed = Date.now() - start.current;

    if (groupRef.current) {
      groupRef.current.children.forEach((particle, index) => {
        const velocity = velocities.current[index];
        if (velocity) {
          particle.position.add(velocity);
          particle.rotation.x += 0.1;
          particle.rotation.y += 0.1;
          velocity.y -= 0.01;  
        }
      });
    }

    if (elapsed > 2000) {
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {Array.from({ length: numParticles }).map((_, i) => (
        <mesh key={i} position={[0, 0, 0]}>
          <planeGeometry args={[0.2, 0.2]} />
          <meshStandardMaterial color={`hsl(${Math.random() * 360}, 100%, 60%)`} />
        </mesh>
      ))}
    </group>
  );
};

export default ConfettiExplosion;