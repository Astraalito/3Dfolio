import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { useFrame } from '@react-three/fiber';

function replaceMaterialToShader(mesh, shaderMaterial) {
    mesh.material.dispose();
    mesh.material = shaderMaterial;
}

const Shader = ({ model, material }) => {
    const clonedModel = useMemo(() => model.scene.clone(), [model]);
    const materialRef = useRef(material);

    useFrame((state, delta) => {
        if (materialRef.current && materialRef.current.uniforms.uTime) {
            materialRef.current.uniforms.uTime.value += delta;
        }
    });

    useEffect(() => {
        const shaderObject = clonedModel.children[0];
        replaceMaterialToShader(shaderObject, materialRef.current);
    }, [model.scene]);

    return (
        <mesh
            position={[0, -5, 0]}
            scale={[6, 6, 6]}
            rotation={[0, Math.PI / 2, 0]}
        >
            <primitive object={clonedModel} />
        </mesh>
    );
};

const ShaderCanvas = ({ material }) => {
    const [isMobile, setIsMobile] = useState(false);
    const model = useLoader(GLTFLoader, "./suzanne.glb");

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 0, 0], fov: 45 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} autoRotate={true} enablePan={false} />
                <hemisphereLight intensity={0.33} groundColor='white' />
                <spotLight
                    position={[20, 50, 10]}
                    angle={0.12}
                    penumbra={1}
                    intensity={1}
                    castShadow
                    shadow-mapSize={1024}
                />
                <Shader model={model} isMobile={isMobile} material={material} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default ShaderCanvas;