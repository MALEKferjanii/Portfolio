import React from 'react';

interface SectionHeaderProps {
  num: string;
  path: string;
  label: string;
  title: React.ReactNode;
}

export default function SectionHeader({ num, path, label, title }: SectionHeaderProps) {
  return (
    <div className="mb-16 md:mb-20">
      <div className="flex items-center gap-4 mb-4">
        <span className="font-mono text-xs text-muted">{path}</span>
        <div className="flex-1 h-px bg-white/5" />
        <span className="font-mono text-xs text-accent">{num}</span>
      </div>
      <div className="mb-3">
        <span className="font-mono text-xs text-accent tracking-[0.25em] uppercase">
          <span className="text-muted">// </span>{label}
        </span>
      </div>
      <h2
        className="font-display font-medium leading-[1.05]"
        style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', letterSpacing: '-0.025em' }}
      >
        {title}
      </h2>
    </div>
  );
}
