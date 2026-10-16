import profile from '../data/profile.json';
export default function Experience() {
  return <section id="experience" className="section section-tint"><div className="container"><div className="section-heading"><p className="eyebrow">02 / Experience</p><h2>Enterprise context.<br /><span>Hands-on delivery.</span></h2><p>From an international Maximo assignment to building internal products and automating their delivery.</p></div>
    <div className="timeline">{profile.experience.map((job, i) => <article className="job" key={job.title}><div className="job-meta"><span className="period">{job.period}</span><h3>{job.company}</h3><p>{job.context}</p>{i === 0 && <span className="tag current">Current role</span>}</div><div className="job-content"><h4>{job.title}</h4><ul>{job.bullets.map(b => <li key={b}>{b}</li>)}</ul></div></article>)}</div>
  </div></section>;
}
