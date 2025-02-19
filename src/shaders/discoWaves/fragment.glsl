uniform float uTime;

varying vec3 vNormal;
varying vec3 vPosition;

#include ../includes/noise.glsl

void main() {
    // Normaliser les composantes des normales pour les ramener dans l'intervalle [0, 1]
    vec3 normalColor = vNormal * 0.5 + 0.5;

    float strength = abs(step(0.1, sin(cnoise(vec2(vPosition.y + 10.0, vPosition.z + 10.0) * 12.0 + uTime * 0.5))));

    // Afficher les normales comme une couleur RGB
    gl_FragColor = vec4(normalColor, strength);
}