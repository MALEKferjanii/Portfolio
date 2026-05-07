import * as THREE from 'three';

export function createGlow(): THREE.Mesh {
  const geo = new THREE.IcosahedronGeometry(1.55, 16);
  const mat = new THREE.MeshBasicMaterial({
    color: 0x89B4FA,
    transparent: true,
    opacity: 0.08,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
    depthWrite: false,
  });
  return new THREE.Mesh(geo, mat);
}
