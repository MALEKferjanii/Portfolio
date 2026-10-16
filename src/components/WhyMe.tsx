import profile from '../data/profile.json';
export default function WhyMe() {
  return <section id="about" className="section container"><div className="section-heading"><p className="eyebrow">01 / What I bring</p><h2>A technical mind.<br /><span>A practical, people-first approach.</span></h2><p>The value is in connecting the business conversation to the system that makes it work.</p></div>
    <div className="strength-grid">{profile.strengths.map((s, i) => <article className="strength-card" key={s.title}><div className="card-kicker"><span>0{i + 1}</span>{s.label}</div><h3>{s.title}</h3><p>{s.body}</p><div className="proof"><span>IN PRACTICE</span><p>{s.proof}</p></div></article>)}</div>
  </section>;
}
