import * as THREE from 'three';

export function createParticles(isMobile: boolean): THREE.Points {
  const count = isMobile ? 400 : 800;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  const blue  = new THREE.Color(0x89B4FA);
  const cyan  = new THREE.Color(0x74C7EC);
  const green = new THREE.Color(0x22C55E);

  for (let i = 0; i < count; i++) {
    const r = 3 + Math.random() * 8;
    const theta = Math.acos(2 * Math.random() - 1);
    const phi   = Math.random() * Math.PI * 2;

    positions[i * 3]     = r * Math.sin(theta) * Math.cos(phi);
    positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = r * Math.cos(theta);

    const rnd = Math.random();
    const c = rnd < 0.78 ? blue : rnd < 0.94 ? cyan : green;
    colors[i * 3]     = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.022,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
    sizeAttenuation: true,
    depthWrite: false,
  });

  return new THREE.Points(geo, mat);
}
