import { GitBranch } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="relative z-10 py-6"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-mono text-[11px] text-muted">
          <GitBranch size={12} style={{ color: 'var(--accent)' }} />
          <span>malek.ferjani / portfolio / main</span>
        </div>
        <div className="font-mono text-[11px] text-muted flex items-center gap-2 flex-wrap justify-center">
          <span>© 2026 — Tunis, TN</span>
          <span className="text-dim">·</span>
          <span>
            built with{' '}
            <span style={{ color: 'var(--accent)' }}>three.js</span>
            {' · '}
            <span style={{ color: 'var(--accent)' }}>react</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
