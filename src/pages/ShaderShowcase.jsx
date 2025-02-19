import ShaderCanvas from "../components/canvas/Shader";
import React from "react";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { motion } from "framer-motion";
import NavbarSecondary from "../components/NavbarSecondary";
import * as THREE from 'three';

import holographicVertexShader from './../shaders/hologram/vertex.glsl'
import holographicFragmentShader from './../shaders/hologram/fragment.glsl'

import waterVertexShader from './../shaders/water/vertex.glsl';
import waterFragmentShader from './../shaders/water/fragment.glsl';

import normalBlobVertexShader from './../shaders/normalBlob/vertex.glsl';
import normalBlobFragmentShader from './../shaders/normalBlob/fragment.glsl';

import discoWaveVertexShader from './../shaders/discoWaves/vertex.glsl';
import discoWaveFragmentShader from './../shaders/discoWaves/fragment.glsl';

const hologramMaterial = new THREE.ShaderMaterial({
  vertexShader: holographicVertexShader,
  fragmentShader: holographicFragmentShader,
  uniforms:
  {
      uTime: new THREE.Uniform(0),
      uColor: new THREE.Uniform(new THREE.Color('#70c1ff')),
  },
  transparent: true,
  side: THREE.DoubleSide,
  depthWrite: false,
  blending: THREE.AdditiveBlending
})

const waterMaterial = new THREE.ShaderMaterial({
    vertexShader: waterVertexShader,
    fragmentShader: waterFragmentShader,
    uniforms: {
        uTime: { value: 0 },
    },
    transparent: true,
    // side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending
});

const normalBlobMaterial = new THREE.ShaderMaterial({
    vertexShader: normalBlobVertexShader,
    fragmentShader: normalBlobFragmentShader,
    uniforms: {
      uTime: { value: 0 },
    },
});

const discoWaveMaterial = new THREE.ShaderMaterial({
    vertexShader: discoWaveVertexShader,
    fragmentShader: discoWaveFragmentShader,
    uniforms: {
      uTime: { value: 0 },
    },
    transparent: true,
});

const ShaderShowcase = () => {

    return (
        <>
            <div className='relative z-0 bg-primary'>
                    <NavbarSecondary />

                <section  className="sm:px-16 px-6 sm:py-20 py-20 max-w-7xl mx-auto relative z-0 w-full">
                    <motion.div variants={textVariant()}>
                        <p className={`${styles.sectionSubText} text-center`}>
                        Mes Shaders et VFX développé en GLSL
                        </p>
                        <h2 className={`${styles.sectionHeadText} text-center`}>
                        Shader Showcase
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        <div className="h-[400px] w-full">
                            <ShaderCanvas material={normalBlobMaterial} />
                            <motion.div variants={textVariant()} className="text-center">
                                <h3 className='text-white font-bold text-[24px]'>Blob</h3>
                                <p className="sm:text-[12px] text-[12px] text-secondary uppercase tracking-wider">Animation des Vertices / generation de bruit</p>
                            </motion.div>
                        </div>
                        
                        <div className="h-[400px] w-full">
                            <ShaderCanvas material={discoWaveMaterial} />
                            <motion.div variants={textVariant()} className="text-center">
                                <h3 className='text-white font-bold text-[24px]'>Disco Zebra</h3>
                                <p className="sm:text-[12px] text-[12px] text-secondary uppercase tracking-wider">Normales / Animation des fragments</p>
                            </motion.div>
                        </div>
                        <div className="h-[400px] w-full">
                            <ShaderCanvas material={waterMaterial} />
                            <motion.div variants={textVariant()} className="text-center">
                                <h3 className='text-white font-bold text-[24px]'>Eau (Version Alpha)</h3>
                                <p className="sm:text-[12px] text-[12px] text-secondary uppercase tracking-wider">Animation des vertices / Transparence</p>
                            </motion.div>
                        </div>
                        <div className="h-[400px] w-full">
                            <ShaderCanvas material={hologramMaterial} />
                            <motion.div variants={textVariant()} className="text-center">
                                <h3 className='text-white font-bold text-[24px]'>Holographique</h3>
                                <p className="sm:text-[12px] text-[12px] text-secondary uppercase tracking-wider">Transparence / Fresnel / Rayures </p>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
  }

export default ShaderShowcase;
