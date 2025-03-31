import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Preload, PresentationControls, useGLTF } from "@react-three/drei";
import * as THREE from 'three';

import CanvasLoader from "../Loader";
import Baudruches from "./Baudruches";

const SmallWorld = ({ isMobile }) => {

  const baloon = useGLTF("./balloon/balloon.glb");
  const gnome = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/young-korrigan/model.gltf");

  const mixer = useRef(new THREE.AnimationMixer(gnome.scene));

  useEffect(() => {
    if (gnome.animations && gnome.animations.length > 0) {
      // Trouver l'animation "pose_jeune"
      const poseJeuneAnimation = gnome.animations.find(anim => anim.name === 'pose_jeune');
      
      if (poseJeuneAnimation) {
        const action = mixer.current.clipAction(poseJeuneAnimation);
        action.play(); // Démarre l'animation
        action.setLoop(THREE.LoopRepeat, Infinity); // Fait tourner l'animation en boucle
        action.setEffectiveTimeScale(1); // Contrôle la vitesse si besoin
      }
    }
  }, [gnome.animations]);

  useEffect(() => {
    const clock = new THREE.Clock();
    const animate = () => {
      const delta = clock.getDelta();
      if (mixer.current) {
        mixer.current.update(delta); // Met à jour l'animation
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);


  return (
    <group>
      <PresentationControls 
        enabled={isMobile ? false: true}
        polar={[0, Math.PI / 12]}
      >
        <Float>
          <mesh>
            <primitive
              object={baloon.scene}
            />
          </mesh>
          <mesh>
            <primitive
              object={gnome.scene}
              position={[-0.84, -6.7, 0.12]}
              scale={[3,3,3]}
            />
          </mesh>
        </Float>
      </PresentationControls>
    </group>
  );
};

const SmallWorldCanvas = () => {
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
      camera={{ position: [10, 0, 0], fov: 45 }}
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
              <SmallWorld isMobile={isMobile} />
              <Baudruches />
        </group>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default SmallWorldCanvas;
