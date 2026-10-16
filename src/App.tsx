import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import IntroScreen from './components/IntroScreen';
import InteractiveTerminal from './components/InteractiveTerminal';
import FloatingHire from './components/FloatingHire';
import CvViewer from './components/CvViewer';
import Architecture from './components/Architecture';
import TechStrip from './components/TechStrip';
import Nav from './components/Nav';
import Hero from './components/Hero';
import WhyMe from './components/WhyMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
const Scene = lazy(() => import('./three/Scene'));

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [effects, setEffects] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const enter = useCallback(() => {
    setShowIntro(false);
    requestAnimationFrame(() => document.getElementById('main')?.focus({ preventScroll: true }));
  }, []);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setEffects(!preference.matches);
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);
  return <div className="portfolio-world" data-effects={effects ? 'on' : 'off'}>
    <Suspense fallback={null}><Scene animated={effects} /></Suspense>
    <div className="scene-vignette" aria-hidden="true" />
    <div className="scanline-sweep" aria-hidden="true" />
    {showIntro && <IntroScreen onComplete={enter} />}
    <div hidden={showIntro}>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="grid-bg" aria-hidden="true" /><Nav />
    <main id="main" tabIndex={-1}><Hero /><TechStrip /><InteractiveTerminal /><WhyMe /><Experience /><Projects /><Architecture /><Skills /><Education /><Contact /></main>
    <footer className="site-footer container"><span>© {new Date().getFullYear()} Malek Ferjani</span><button onClick={() => setShowIntro(true)}>Replay welcome ↻</button><button aria-pressed={effects} onClick={() => setEffects(!effects)}>{effects ? 'Pause visual effects' : 'Play visual effects'}</button><a href="#top">Back to top ↑</a></footer>
    {!showIntro && <FloatingHire onReplay={() => setShowIntro(true)} />}
    </div>
    <CvViewer />
  </div>;
}
