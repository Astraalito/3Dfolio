uniform float uTime;

varying vec3 vNormal;
varying vec3 vPosition;

#include ../includes/noise.glsl

void main() {
    vNormal = normal;

    // Utilisez les coordonnées x et y de position pour cnoise
    float displacement = 0.1 * cnoise(vec2(position.x, position.y) * 0.7 + uTime);
    vec3 newPos = position + normal * displacement;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
}