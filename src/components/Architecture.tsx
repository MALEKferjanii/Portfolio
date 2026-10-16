import { useState } from 'react';
import { Code2, Database, Network, Server, ShieldCheck, Workflow } from 'lucide-react';

const stacks = [
  { name: 'Maximo integration', context: 'A simplified view of the integration work from my SUEZ France assignment.', nodes: [
    { name: 'Web application', tech: 'Angular / React', icon: Code2, description: 'A third-party interface for intervention scheduling, developed with Angular and React alongside a Spring Boot backend.' },
    { name: 'Integration services', tech: 'Spring Boot · OSLC / REST', icon: Network, description: 'Java services and OSLC/REST integrations connect the application to Maximo assets, work orders and locations.' },
    { name: 'IBM Maximo', tech: 'MBO · Scripts · MIF', icon: Database, description: 'Custom Java MBO extensions, Automation Scripts, business rules and MIF channels connect Maximo to ERP and other applications.' },
  ] },
  { name: 'Kubernetes platform', context: 'A simplified view of my personal multi-node Kubernetes project on OpenStack.', nodes: [
    { name: 'Provision', tech: 'OpenStack Heat · Ansible', icon: Workflow, description: 'Infrastructure and cluster provisioning automated with OpenStack Heat and Ansible.' },
    { name: 'Orchestrate', tech: 'Multi-node Kubernetes', icon: Server, description: 'A Kubernetes cluster built end to end to practice application hosting and infrastructure operations.' },
    { name: 'Secure & observe', tech: 'Vault · Prometheus', icon: ShieldCheck, description: 'Vault and cert-manager for secrets and certificates; Falco, Trivy and kube-bench for security checks; Prometheus and Grafana for monitoring.' },
  ] },
];
export default function Architecture() {
  const [stack, setStack] = useState(0);
  const [selected, setSelected] = useState(0);
  const current = stacks[stack];
  return <section id="architecture" className="section container architecture-section"><div className="section-heading"><p className="eyebrow">Inside the systems</p><h2>Follow the flow.<br /><span>Explore the architecture.</span></h2><p>Choose a system, then select a layer to see how the pieces fit together.</p></div>
    <div className="architecture-console"><div className="architecture-toolbar"><span>system.architecture</span><div className="filters">{stacks.map((s, i) => <button key={s.name} aria-pressed={stack === i} onClick={() => { setStack(i); setSelected(0); }}>{s.name}</button>)}</div></div>
    <p className="architecture-context">{current.context}</p>
    <div className="architecture-flow">{current.nodes.map((node, i) => <div key={node.name} className="architecture-stage"><button aria-pressed={selected === i} onClick={() => setSelected(i)} aria-controls="architecture-detail"><node.icon size={28} /><strong>{node.name}</strong><span>{node.tech}</span><small>0{i + 1} / EXPLORE ↗</small></button>{i < 2 && <span className="data-connector" aria-hidden="true"><i /></span>}</div>)}</div>
    <div className="architecture-detail" id="architecture-detail" aria-live="polite"><span>0{selected + 1} / {current.nodes[selected].name}</span><p>{current.nodes[selected].description}</p></div></div>
  </section>;
}
