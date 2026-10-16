import { useState } from 'react';
import { ArrowUpRight, FileText, Menu, X } from 'lucide-react';
import { openCv } from './cvEvents';
const links = [['Strengths', '#about'], ['Experience', '#experience'], ['Projects', '#projects'], ['Expertise', '#skills']];
export default function Nav() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container nav-inner">
    <a className="wordmark" href="#top" aria-label="Malek Ferjani, home">mf<span>.</span><span className="wordmark-name">MALEK FERJANI</span></a>
    <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
    <nav id="primary-nav" className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation" onKeyDown={e => { if (e.key === 'Escape') { setOpen(false); document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus(); } }}>
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <button className="nav-cv" onClick={() => { setOpen(false); openCv(); }}><FileText size={14} /> CV</button>
      <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={15} /></a>
    </nav>
  </div></header>;
}
