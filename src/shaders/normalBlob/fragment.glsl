uniform float uTime;

varying vec3 vNormal;
varying vec3 vPosition;


void main() {
    // Normaliser les composantes des normales pour les ramener dans l'intervalle [0, 1]
    vec3 normalColor = vec3(vNormal.x  * 0.2 + 0.5, vNormal.x * 0.5, vNormal.z * 0.5);


    // Afficher les normales comme une couleur RGB
    gl_FragColor = vec4(normalColor, 1.0);
}