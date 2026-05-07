interface StatCardProps {
  label: string;
  value: string;
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div
      className="px-4 py-3 rounded border"
      style={{ borderColor: 'var(--border)', background: 'rgba(28,25,22,0.5)' }}
    >
      <div className="font-mono text-xs text-muted tracking-widest uppercase mb-1">{label}</div>
      <div className="font-mono text-sm text-fg">{value}</div>
    </div>
  );
}
