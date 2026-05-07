export const fragmentShader = /* glsl */`
  uniform float uTime;

  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vNoise;

  void main() {
    vec3 viewDir = normalize(cameraPosition - vPosition);
    vec3 normal  = normalize(vNormal);

    float fresnel = pow(1.0 - dot(viewDir, normal), 2.3);
    float pulse   = 0.5 + 0.5 * sin(uTime * 0.8);

    vec3 colorA = vec3(0.020, 0.031, 0.078);
    vec3 colorB = vec3(0.086, 0.145, 0.271);
    float t     = clamp(vNoise * 0.5 + 0.5, 0.0, 1.0);
    vec3 base   = mix(colorA, colorB, t);

    vec3 rimColor = vec3(0.537, 0.706, 0.980);
    float rimMult = 1.6 + pulse * 0.4;

    vec3 color = base + rimColor * fresnel * rimMult;
    float alpha = 0.85 + fresnel * 0.15;

    gl_FragColor = vec4(color, alpha);
  }
`;
