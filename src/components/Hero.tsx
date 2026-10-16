import { ArrowUpRight, ArrowDown, Download, FileText, Workflow, Code2, Server } from 'lucide-react';
import profile from '../data/profile.json';
import { openCv } from './cvEvents';
export default function Hero() {
  return <section id="top" className="hero container">
    <div className="hero-topline"><span><i className="status-dot" /> IBM MAXIMO · JAVA · CLOUD & DEVOPS</span><span>TUNIS, TN / UTC+1</span></div>
    <div className="hero-grid"><div className="hero-copy">
      <p className="eyebrow">Hello, I’m Malek Ferjani</p>
      <h1>Complex systems.<br /><span>Clear solutions.</span></h1>
      <p className="hero-role">IBM Maximo consultant.<br />Java developer. Infrastructure builder.</p>
      <p className="hero-description">I turn business needs into connected applications, from Maximo integrations for a water utility to the cloud platforms I build and run myself.</p>
      <div className="actions"><a className="button primary" href="#projects">Explore my work <ArrowUpRight size={18} /></a><button className="button secondary" onClick={openCv}><FileText size={17} /> View CV <span className="file-type">PDF</span></button><a className="button secondary" href={profile.cv} download aria-label="Download CV"><Download size={17} /> Download</a></div>
      <a className="hero-contact" href="#contact">Have a Maximo, Java or platform challenge? Let’s talk <span>↗</span></a>
    </div>
    <aside className="system-card" aria-label="My approach: understand, integrate, operate">
      <div className="system-top"><span>FROM BUSINESS NEED TO RUNNING SYSTEM</span><span>+</span></div>
      <div className="orbital" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="orb-core">mf<span>.</span></div><span className="orbit-point p1" /><span className="orbit-point p2" /></div>
      <div className="system-steps">
        <div><Workflow size={19} /><span><strong>Understand</strong><small>Workshops · requirements · design</small></span><em>01</em></div>
        <div><Code2 size={19} /><span><strong>Integrate</strong><small>Maximo · Java · OSLC / REST</small></span><em>02</em></div>
        <div><Server size={19} /><span><strong>Operate</strong><small>Containers · CI/CD · infrastructure</small></span><em>03</em></div>
      </div><div className="system-bottom"><i className="status-dot" /> BUSINESS CONTEXT. TECHNICAL OWNERSHIP.</div>
    </aside></div>
    <div className="hero-evidence"><div><strong>3+ years</strong><span>Professional experience</span></div><div><strong>SUEZ France</strong><span>Maximo assignment · 2023–2025</span></div><div><strong>Sinorfi</strong><span>Full-Stack & DevOps · 2025–present</span></div><a href="#about">The short version <ArrowDown size={17} /></a></div>
  </section>;
}
