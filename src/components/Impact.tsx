import { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';
import Reveal from './Reveal';

interface CountUpProps {
  to: number;
  suffix?: string;
  duration?: number;
}

function CountUp({ to, suffix = '', duration = 1.4 }: CountUpProps) {
  const [ref, visible] = useInView();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min((t - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, to, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const STATS = [
  { n: 3,  suffix: '+', label: 'Years shipping production code',         sub: 'Java · Spring · Angular · Maximo' },
  { n: 20, suffix: '+', label: 'Enterprise integrations delivered',       sub: 'OSLC · REST · Event-driven' },
  { n: 90, suffix: '%', label: 'Manual deploy effort eliminated',         sub: 'via GitLab & Azure DevOps' },
  { n: 5,  suffix: '',  label: 'Cloud platforms in active use',           sub: 'AWS · Docker · Terraform · WebSphere' },
];

export default function Impact() {
  return (
    <section style={{
      padding: '80px 40px',
      borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
      background: 'var(--surface)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14, marginBottom: 36,
          fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-muted)',
          textTransform: 'uppercase', letterSpacing: '0.25em',
        }}>
          <span style={{ width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%' }} />
          Impact at a glance
          <div style={{ flex: 1, height: 1, background: 'var(--fg-dim)' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{
                padding: '8px 28px 8px 0',
                borderRight: i < STATS.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(48px,5.5vw,76px)',
                  fontWeight: 600, color: 'var(--fg)', letterSpacing: '-0.04em', lineHeight: 1,
                }}>
                  <CountUp to={s.n} suffix={s.suffix} />
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: 'var(--fg)', opacity: 0.85, marginTop: 12, lineHeight: 1.4 }}>
                  {s.label}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--fg-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 6 }}>
                  {s.sub}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
