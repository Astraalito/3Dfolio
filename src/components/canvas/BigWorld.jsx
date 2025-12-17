import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Preload, PresentationControls, useGLTF } from "@react-three/drei";
import * as THREE from 'three';

import CanvasLoader from "../Loader";

const BigWorld = ({ isMobile }) => {

  return (
    <group>
        <OrbitControls
            enabled={isMobile ? false: true}
            polar={[0, Math.PI / 12]}
        />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
            <mesh position={[0, 1 ,1]}>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
    </group>
  );
};

const BigWorldCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, -5, 0], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <hemisphereLight intensity={0.33} groundColor='white' />
        <spotLight
              position={[20, 50, 10]}
              angle={0.12}
              penumbra={1}
              intensity={1}
              castShadow
              shadow-mapSize={1024}
        />
        <group
          position={isMobile ? [0, -0.2, 0] : [0, 0.8, -3]}
          rotation={[0, Math.PI/2, 0]}
          scale={isMobile ? 0.35 : 0.6}
        >
              <BigWorld isMobile={isMobile} />
        </group>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BigWorldCanvas;
