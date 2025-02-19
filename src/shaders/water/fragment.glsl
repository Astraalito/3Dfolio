precision mediump float;

varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;

void main() {
    vec2 uv = vUv;
    
    // Simuler l'effet de l'eau avec une distorsion sinusoïdale
    float wave = sin(uv.x * 20.0 + uTime * 2.0) * 0.02 + cos(uv.y * 20.0 + uTime * 2.0) * 0.02;
    uv += vec2(wave, wave);
    
    // Génération d'une couleur bleutée dynamique
    vec3 waterColor = vec3(0.0, 0.3, 0.6) + wave * 0.1;
    
    gl_FragColor = vec4(waterColor, 1.0);
}