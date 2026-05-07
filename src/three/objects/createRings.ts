import * as THREE from 'three';

export function createRings(): THREE.Mesh[] {
  const configs = [
    { radius: 2.1, tube: 0.003, color: 0x89B4FA, opacity: 0.35, rx: Math.PI / 3, ry: 0, rz: 0 },
    { radius: 2.4, tube: 0.003, color: 0x74C7EC, opacity: 0.22, rx: -Math.PI / 4, ry: 0, rz: Math.PI / 6 },
    { radius: 2.7, tube: 0.003, color: 0x22C55E, opacity: 0.14, rx: 0, ry: Math.PI / 3, rz: 0 },
  ];

  return configs.map(({ radius, tube, color, opacity, rx, ry, rz }) => {
    const geo = new THREE.TorusGeometry(radius, tube, 4, 128);
    const mat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity,
      wireframe: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.set(rx, ry, rz);
    return mesh;
  });
}
