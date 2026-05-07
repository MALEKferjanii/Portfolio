import Scene from './three/Scene';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-fg">
      {/* Layer 0: Three.js canvas */}
      <Scene />

      {/* Layer 1: Radial vignette */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 65% 40%, transparent 0%, #0A0908 75%)',
        }}
      />

      {/* Layer 2: Content */}
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Layer 3: Scanline overlay */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-40 pointer-events-none"
        style={{
          opacity: 0.02,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.08) 3px)',
        }}
      />

      {/* Layer 4: Grain overlay */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-50 pointer-events-none"
        style={{
          opacity: 0.035,
          mixBlendMode: 'overlay',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />
    </div>
  );
}
