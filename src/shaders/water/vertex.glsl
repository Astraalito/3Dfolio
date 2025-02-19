precision mediump float;

varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;

void main() {
    vUv = uv;
    vPosition = position;

    // Simulation de vagues en perturbant la position du sommet
    vec3 waveOffset = vec3(
        0.0,
        sin(position.x * 5.0 + uTime * 2.0) * 0.1 + cos(position.z * 5.0 + uTime * 2.0) * 0.1,
        0.0
    );
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position + waveOffset, 1.0);
} 