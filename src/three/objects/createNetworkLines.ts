import * as THREE from 'three';

export function createNetworkLines(particles: THREE.Points): THREE.LineSegments {
  const posAttr = particles.geometry.getAttribute('position') as THREE.BufferAttribute;
  const count = posAttr.count;
  const vertices: number[] = [];
  const maxDist = 0.9;
  const maxNeighbors = 30;

  for (let i = 0; i < count; i++) {
    const ax = posAttr.getX(i);
    const ay = posAttr.getY(i);
    const az = posAttr.getZ(i);

    let neighbors = 0;
    for (let j = i + 1; j < count && neighbors < maxNeighbors; j++) {
      const dx = ax - posAttr.getX(j);
      const dy = ay - posAttr.getY(j);
      const dz = az - posAttr.getZ(j);
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (dist < maxDist) {
        vertices.push(ax, ay, az, posAttr.getX(j), posAttr.getY(j), posAttr.getZ(j));
        neighbors++;
      }
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  const mat = new THREE.LineBasicMaterial({
    color: 0x89B4FA,
    transparent: true,
    opacity: 0.12,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  return new THREE.LineSegments(geo, mat);
}
