import React from 'react';

interface CodeLineProps {
  lineNum?: number;
  children: React.ReactNode;
  className?: string;
}

export default function CodeLine({ lineNum, children, className = '' }: CodeLineProps) {
  return (
    <div className={`flex items-start gap-4 font-mono text-sm ${className}`}>
      {lineNum !== undefined && (
        <span className="text-dim select-none w-6 text-right flex-shrink-0 text-xs leading-6">
          {lineNum}
        </span>
      )}
      <span className="text-fg leading-6">{children}</span>
    </div>
  );
}
