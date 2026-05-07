import { useEffect, useRef } from 'react';
import { useLiveClock } from '../hooks/useLiveClock';
import { useScrollProgress } from '../hooks/useScrollProgress';

const navLinks = [
  { num: '01', label: 'about',      href: '#about' },
  { num: '02', label: 'experience', href: '#experience' },
  { num: '03', label: 'skills',     href: '#skills' },
  { num: '04', label: 'projects',   href: '#projects' },
  { num: '05', label: 'contact',    href: '#contact' },
];

export default function Nav() {
  const clock = useLiveClock();
  const progress = useScrollProgress();
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (barRef.current) {
      barRef.current.style.width = `${progress}%`;
    }
  }, [progress]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40"
      style={{
        background: 'rgba(10,9,8,0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between gap-6">
        {/* Left: terminal prompt */}
        <div className="font-mono text-sm flex items-center gap-0 flex-shrink-0">
          <span className="text-accent">$</span>
          <span className="text-muted ml-1.5">malek</span>
          <span style={{ color: 'var(--accent)' }}>.</span>
          <span style={{ color: 'var(--accent)' }}>ferjani</span>
          <span className="text-muted">@dev:</span>
          <span style={{ color: 'var(--accent-2)' }}>~</span>
          <span
            className="text-accent ml-0.5 inline-block w-[0.55em] h-[1em] bg-accent align-middle"
            style={{ animation: 'blink 1.1s step-end infinite', marginTop: '1px' }}
          />
        </div>

        {/* Center: nav links (desktop only) */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ num, label, href }) => (
            <a
              key={href}
              href={href}
              className="font-mono text-xs group transition-colors"
            >
              <span className="text-accent">{num}</span>
              <span className="text-muted group-hover:text-fg transition-colors ml-1">
                ./{label}
              </span>
            </a>
          ))}
        </nav>

        {/* Right: status + progress + clock */}
        <div className="font-mono text-xs flex items-center gap-4 flex-shrink-0">
          <div className="hidden sm:flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{
                background: 'var(--status)',
                boxShadow: '0 0 6px var(--status)',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }}
            />
            <span style={{ color: 'var(--status)' }}>available</span>
          </div>
          <span className="text-muted tabular-nums">
            {String(progress).padStart(2, '0')}%
          </span>
          <span className="text-fg tabular-nums">{clock}</span>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div className="h-px w-full" style={{ background: 'var(--border)' }}>
        <div
          ref={barRef}
          className="h-full transition-[width] duration-75"
          style={{
            background: 'var(--accent)',
            boxShadow: '0 0 8px rgba(137,180,250,0.5)',
            width: '0%',
          }}
        />
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
      `}</style>
    </header>
  );
}
