import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

const logs = [
  ['CONNECT', 'Opening Malek’s engineering workspace'],
  ['PROFILE', 'IBM Maximo · Java integration · Cloud & DevOps'],
  ['EXPERIENCE', 'SUEZ France assignment → Sinorfi internal development'],
  ['LOAD', 'MBO extensions · OSLC / REST · Spring Boot'],
  ['BUILD', 'Kubernetes · Terraform · Ansible · CI/CD'],
  ['READY', 'Explore the work. Meet the engineer.'],
];
const modules = ['java.spring-boot', 'maximo.oslc-mif', 'angular.react', 'kubernetes.platforms', 'terraform.ansible', 'devops.delivery'];

export default function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const dialog = useRef<HTMLDivElement>(null);
  const enter = useRef<HTMLButtonElement>(null);
  const ready = step === logs.length;
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    enter.current?.focus();
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timers = logs.map((_, i) => setTimeout(() => setStep(i + 1), reduced ? 0 : 450 + i * 620));
    return () => { timers.forEach(clearTimeout); document.body.style.overflow = previousOverflow; };
  }, []);
  return <div ref={dialog} className="welcome-screen" role="dialog" aria-modal="true" aria-labelledby="welcome-title"
    onKeyDown={e => {
      if (e.key === 'Escape') { e.preventDefault(); onComplete(); }
      if (e.key === 'Enter' && e.target === dialog.current) onComplete();
      if (e.key === 'Tab') {
        const controls = dialog.current?.querySelectorAll<HTMLButtonElement>('button');
        if (!controls?.length) return;
        const first = controls[0], last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }}>
    <div className="intro-grid" aria-hidden="true" />
    <div className="welcome-top"><span><i className="status-dot" /> MALEK.DEV / {ready ? 'READY TO EXPLORE' : 'INITIALIZING'}</span><button onClick={onComplete}>Skip intro <span>ESC ↗</span></button></div>
    <div className="welcome-layout">
      <div className="welcome-console">
        <div className="console-heading"><Terminal size={16} /><span>~/portfolio · engineer.profile</span><span className="console-live">● LIVE</span></div>
        <div className="welcome-logs"><p className="terminal-command">$ ./meet-malek --interactive</p>
          {logs.slice(0, step).map(([label, text]) => <div className="intro-line boot-line" key={label}><span>{label === 'READY' ? '✓' : '›'} {label}</span><p>{text}</p></div>)}
          {!ready && <span className="boot-cursor">▌</span>}
        </div>
        <div className="welcome-modules">{modules.map((name, i) => <div key={name} className={i < step ? 'module-loaded' : ''}><span>{i < step ? '✓' : '○'}</span>{name}<span>{i < step ? 'LOADED' : 'WAIT'}</span></div>)}</div>
        <div className="boot-progress" role="progressbar" aria-label="Welcome sequence" aria-valuenow={step} aria-valuemin={0} aria-valuemax={logs.length}><span style={{ width: step / logs.length * 100 + '%' }} /></div>
      </div>
      <div className="welcome-profile"><p className="eyebrow">Welcome to my workspace</p><h1 id="welcome-title" className="ascii-glow">MALEK<br /><span>FERJANI.</span></h1>
        <p className="welcome-description">The business context.<br />The code. The infrastructure.<br /><strong>I connect the pieces.</strong></p>
        <div className="tags">{['IBM Maximo', 'Java / Spring', 'Kubernetes', 'Tunis · UTC+1'].map(t => <span key={t} className="tag">{t}</span>)}</div>
        <div className="welcome-facts"><div><span>experience</span><strong>3+ years</strong></div><div><span>approach</span><strong>Understand → build → operate</strong></div><div><span>explore</span><strong>Projects · terminal · live 3D</strong></div></div>
        <button ref={enter} className={'button primary welcome-enter ' + (ready ? 'enter-button' : '')} onClick={onComplete}>Enter portfolio <ArrowRight size={20} /></button>
        <p className="welcome-hint">Press Enter to explore · Escape to skip</p>
      </div>
    </div>
    <div className="welcome-bottom"><span>ENGINEERING, WITH PERSONALITY.</span><span>MOVE YOUR POINTER. EXPLORE THE SYSTEM.</span></div>
  </div>;
}
