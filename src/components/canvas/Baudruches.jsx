import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';


const colorsBaudruches = [
    [1, 0, 0], // Rouge
    [0, 1, 0], // Vert
    [1, 1, 0], // Jaune
    [1, 0, 1], // Magenta
    [0, 1, 1], // Cyan
  ];

const BaudrucheModel = ({ position, color }) => {
    const { scene } = useGLTF("./balloon/baudruche.gltf");
    const meshRef = useRef();

    useEffect(() => {
        if (meshRef.current) {
            meshRef.current.traverse((child) => {
                if (child.isMesh) {
                    child.material = child.material.clone();
                    child.material.color.setRGB(...color);
                }
            });
        }
    }, [color]);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.position.y += 0.05; 
        }
    });

    return <primitive 
        ref={meshRef}
        object={scene.clone()} 
        position={position} 
        scale={0.7} 
    />;
};

const Baudruches = ({ numberBaudruche = 20, rayon = 8, yPosition = -7.3, offset = 3 }) => {
    
    const generateRandomPosition = (radius, yPosition, offset) => {
        const angle = Math.random() * Math.PI * 2;
        const offSetRadius = ((Math.random() - 0.5) * 2) * offset + radius
        const x = Math.cos(angle) * offSetRadius;
        const y = ((Math.random() - 0.5) * 2) * offset * yPosition 
        const z = Math.sin(angle) * offSetRadius;
        return [x, y ,z];
    };

    const generateRandomPositions = (num, rayon, y) => {
        const positions = [];
        for (let i = 0; i < num; i++) {
            const pos = generateRandomPosition(rayon, yPosition, offset)
            positions.push(pos);
        }
        return positions;
    };


    const positions = generateRandomPositions(numberBaudruche, rayon, yPosition);

    const choseRandomColor = () => {
        return colorsBaudruches[Math.floor(Math.random() * colorsBaudruches.length)];
    }


    return (
        <>
            {positions.map((pos, index) => {
                return <BaudrucheModel key={index} position={pos} color={choseRandomColor()} />
            })}
        </>
    )
}

export default Baudruches