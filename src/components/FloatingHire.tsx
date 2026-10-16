import { useEffect, useState } from 'react';
import { FileText, Mail, RotateCcw } from 'lucide-react';
import profile from '../data/profile.json';
import { openCv } from './cvEvents';

export default function FloatingHire({ onReplay }: { onReplay: () => void }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const check = () => setShow(window.scrollY > 500 && window.scrollY + window.innerHeight < document.documentElement.scrollHeight - 300);
    check(); window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, []);
  if (!show) return null;
  return <aside className="floating-hire" aria-label="Quick actions"><button onClick={onReplay} aria-label="Replay welcome"><RotateCcw size={15} /><span>Replay</span></button><button onClick={openCv}><FileText size={15} /> CV</button><a href={'mailto:' + profile.email}><Mail size={15} /> Email</a><a className="floating-contact" href="#contact">Let’s talk ↗</a></aside>;
}
