import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo } from 'react';
import ConfettiExplosion  from './Confetti';


const colorsBaudruches = [
    "0x60e5e5",
    "0xDB6A8F",
    "0x96e54b",
    "0x70C7C6",
    "0xffd580",
  ];

const BaudrucheModel = ({ position, color, onPop }) => {
    const { scene } = useGLTF("./balloon/baudruche.gltf");
    const meshRef = useRef();
    const [isPopped, setIsPopped] = useState(false);

    const clonedScene = useMemo(() => scene.clone(), [scene]);

    useEffect(() => {
        if (meshRef.current) {
            meshRef.current.traverse((child) => {
                if (child.isMesh) {
                    child.material = child.material.clone();
                    child.material.color.setHex(color);
                }
            });
        }
    }, [color]);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.position.y += 0.05; 
        }
    });

    const handleClick = () => {
        setIsPopped(true);

        const popSound = new Audio("./sfx/pop.mp3");
        popSound.play();

        if (onPop && meshRef.current) {
            onPop(meshRef.current.position.clone());
          }
    };

    if (isPopped) return null; // Ne pas afficher le ballon s'il est éclaté

    return <primitive 
        ref={meshRef}
        object={clonedScene}
        position={position} 
        scale={0.7} 
        onClick={handleClick}
    />;
};

const Baudruches = ({ numberBaudruche = 20, rayon = 8, yPosition = -7.3, offset = 3 }) => {
    const [confettis, setConfettis] = useState([]);
  
    const handlePop = (position) => {
      const id = Math.random();
      setConfettis((prev) => [...prev, { id, position }]);
  
      setTimeout(() => {
        setConfettis((prev) => prev.filter((c) => c.id !== id));
      }, 2000);
    };
  
    const generateRandomPosition = (radius, yPosition, offset) => {
      const angle = Math.random() * Math.PI * 2;
      const offSetRadius = ((Math.random() - 0.5) * 2) * offset + radius;
      const x = Math.cos(angle) * offSetRadius;
      const y = (((Math.random() - 0.5) * 2) * offset * 10) + yPosition;
      const z = Math.sin(angle) * offSetRadius;
      return [x, y, z];
    };
  
    const balloons = useMemo(() => {
      const arr = [];
      for (let i = 0; i < numberBaudruche; i++) {
        const pos = generateRandomPosition(rayon, yPosition, offset);
        const color = colorsBaudruches[Math.floor(Math.random() * colorsBaudruches.length)];
        arr.push({ pos, color });
      }
      return arr;
    }, [numberBaudruche, rayon, yPosition, offset]);
  
    return (
      <>
        {balloons.map(({ pos, color }, index) => (
          <BaudrucheModel
            key={index}
            position={pos}
            color={color}
            onPop={handlePop}
          />
        ))}
  
        {confettis.map(({ id, position }) => (
          <ConfettiExplosion key={id} position={position} />
        ))}
      </>
    );
  };
  
  export default Baudruches;