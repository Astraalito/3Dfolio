import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const BaudrucheModel = ({ position }) => {
    const { scene } = useGLTF("./balloon/baudruche.gltf");
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.position.y += 0.05; // Ajustez la vitesse de déplacement ici
        }
    });

    return <primitive 
        ref={meshRef}
        object={scene.clone()} 
        position={position} 
        scale={0.7} 
    />;
}

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


    return (
        <>
            {positions.map((pos, index) => (
                <BaudrucheModel key={index} position={pos} />
            ))}
        </>
    )
}

export default Baudruches