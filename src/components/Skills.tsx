import profile from '../data/profile.json';
export default function Skills() {
  return <section id="skills" className="section section-tint"><div className="container"><div className="section-heading"><p className="eyebrow">04 / Technical expertise</p><h2>The right depth.<br /><span>Across the whole system.</span></h2><p>Enterprise specialization, full-stack development and practical infrastructure experience.</p></div><div className="skills-grid">{profile.skills.map(s => <article key={s.title}><p className="skill-context">{s.context}</p><h3>{s.title}</h3><ul>{s.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>;
}
