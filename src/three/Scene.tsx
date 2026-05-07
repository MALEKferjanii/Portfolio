import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createCore } from './objects/createCore';
import { createGlow } from './objects/createGlow';
import { createRings } from './objects/createRings';
import { createParticles } from './objects/createParticles';
import { createNetworkLines } from './objects/createNetworkLines';

export default function Scene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isMobile = window.innerWidth < 768;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0A0908, 0.055);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 5.5);

    // Objects
    const core = createCore(isMobile);
    core.position.x = 1.3;
    scene.add(core);

    const glow = createGlow();
    scene.add(glow);

    // Wireframe cage
    const cageGeo = new THREE.IcosahedronGeometry(1.7, 2);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x89B4FA,
      transparent: true,
      opacity: 0.10,
      wireframe: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const cage = new THREE.Mesh(cageGeo, cageMat);
    scene.add(cage);

    const rings = createRings();
    rings.forEach(r => scene.add(r));

    const particles = createParticles(isMobile);
    scene.add(particles);

    let networkLines: THREE.LineSegments | null = null;
    if (!isMobile) {
      networkLines = createNetworkLines(particles);
      scene.add(networkLines);
    }

    // State
    let scrollNorm = 0;
    let targetMx = 0;
    let mx = 0;
    let mouseBoost = 0;
    let rafId = 0;
    let t = 0;

    if (prefersReduced) {
      const mat = core.material as THREE.ShaderMaterial;
      mat.uniforms.uIntensity.value = 0.1;
    }

    // Event listeners
    const onScroll = () => {
      const doc = document.documentElement;
      scrollNorm = Math.min(1, window.scrollY / (doc.scrollHeight - window.innerHeight || 1));
    };

    const onMouseMove = (e: MouseEvent) => {
      if (prefersReduced) return;
      targetMx = (e.clientX / window.innerWidth) * 2 - 1;
      mouseBoost = 1;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('resize', onResize);

    // Animation loop
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      t += 0.01;

      mx += (targetMx - mx) * 0.05;
      mouseBoost *= 0.96;

      const coreMat = core.material as THREE.ShaderMaterial;
      coreMat.uniforms.uTime.value = t;
      coreMat.uniforms.uMouseBoost.value = mouseBoost;

      const coreX = 1.3 + mx * 0.1;
      const coreY = -scrollNorm * 0.35;
      const coreScale = Math.max(0.55, 1 - scrollNorm * 0.45);

      core.position.x = coreX;
      core.position.y = coreY;
      core.scale.setScalar(coreScale);

      glow.position.copy(core.position);
      glow.scale.copy(core.scale).multiplyScalar(1.02);
      glow.rotation.copy(core.rotation);

      cage.rotation.x = -0.06 * t;
      cage.rotation.y =  0.09 * t;
      cage.position.copy(core.position);
      cage.scale.copy(core.scale);

      rings[0].rotation.y += 0.003;
      rings[1].rotation.x += 0.002;
      rings[1].rotation.z += 0.001;
      rings[2].rotation.y -= 0.002;
      rings[2].rotation.z += 0.0015;

      particles.rotation.y += 0.0005;
      if (networkLines) networkLines.rotation.copy(particles.rotation);

      camera.position.x = mx * 0.15;
      camera.position.y = -scrollNorm * 0.2;
      camera.lookAt(0, -scrollNorm * 0.3, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);

      // Dispose everything
      core.geometry.dispose();
      (core.material as THREE.ShaderMaterial).dispose();
      glow.geometry.dispose();
      (glow.material as THREE.Material).dispose();
      cageGeo.dispose();
      cageMat.dispose();
      rings.forEach(r => {
        r.geometry.dispose();
        (r.material as THREE.Material).dispose();
      });
      particles.geometry.dispose();
      (particles.material as THREE.Material).dispose();
      if (networkLines) {
        networkLines.geometry.dispose();
        (networkLines.material as THREE.Material).dispose();
      }
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
}
