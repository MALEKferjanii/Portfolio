import * as THREE from 'three';
import { vertexShader } from '../shaders/vertex.glsl';
import { fragmentShader } from '../shaders/fragment.glsl';

export function createCore(isMobile: boolean): THREE.Mesh {
  const detail = isMobile ? 40 : 80;
  const geo = new THREE.IcosahedronGeometry(1.3, detail);

  const mat = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime:       { value: 0 },
      uIntensity:  { value: 0.32 },
      uMouseBoost: { value: 0 },
    },
    transparent: true,
    side: THREE.FrontSide,
  });

  return new THREE.Mesh(geo, mat);
}
