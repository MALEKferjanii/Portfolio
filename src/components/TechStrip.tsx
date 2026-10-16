import { techStrip } from '../data/resume';

const items = [...techStrip, ...techStrip];

export default function TechStrip() {
  return (
    <div
      style={{
        overflow: 'hidden',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface)',
        padding: '12px 0',
      }}
    >
      <div className="marquee-inner">
        {items.map((tech, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--fg-muted)',
              marginRight: 40,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ color: 'var(--accent)', fontSize: 8 }}>◆</span>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
