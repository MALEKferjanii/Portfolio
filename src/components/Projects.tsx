import { useState } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import profile from '../data/profile.json';
const filters = ['All work', 'Enterprise', 'Cloud & DevOps'];
export default function Projects() {
  const [active, setActive] = useState('All work');
  const projects = profile.projects.filter(p => active === 'All work' || p.category === active);
  return <section id="projects" className="section container"><div className="section-heading"><p className="eyebrow">03 / Selected work</p><h2>Built to connect.<br /><span>Built to keep learning.</span></h2><p>Professional integration work and personal platforms, with a clear view of what I contributed.</p></div>
    <div className="project-toolbar"><div className="filters" aria-label="Filter projects">{filters.map(f => <button key={f} aria-pressed={f === active} onClick={() => setActive(f)}>{f}</button>)}</div><span aria-live="polite" className="result-count">{projects.length} projects</span></div>
    <div className="projects-grid">{projects.map(p => <article key={p.id} className="project-card">
      <div className="project-top"><span>{p.category}</span><span className={p.status === 'In progress' ? 'tag progress' : 'tag'}>{p.status}</span></div>
      <div className={'project-visual visual-' + p.id} aria-hidden="true">{p.id === 'oslc' ? <><span>MAXIMO</span><i>← OSLC / REST →</i><span>WEB APP</span></> : p.id === 'openstack' ? <><span>CONTROL</span><div className="node-branches"><span>NODE 01</span><span>NODE 02</span><span>NODE 03</span></div></> : p.id === 'k3s' ? <><span>K3s</span><i>↗</i><span>WEB + LOCAL AI</span></> : <><span>CODE</span><i>→</i><span>POLICY</span><i>→</i><span>CLUSTER</span></>}</div>
      <h3>{p.title}</h3><p>{p.summary}</p><div className="tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
      <details><summary>Read project details <Plus size={16} /></summary><div className="project-detail"><h4>My contribution</h4><p>{p.contribution}</p><h4>Why it matters</h4><p>{p.purpose}</p><a href={'mailto:' + profile.email + '?subject=' + encodeURIComponent('Let’s discuss: ' + p.title)}>Discuss this project <ArrowUpRight size={14} /></a></div></details>
    </article>)}</div>
  </section>;
}
