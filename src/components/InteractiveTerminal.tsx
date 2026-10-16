import { useEffect, useRef, useState } from 'react';
import { Terminal } from 'lucide-react';
import profile from '../data/profile.json';
import { openCv } from './cvEvents';

type Line = { type: 'cmd' | 'out' | 'err'; text: string };
const initial: Line[] = [
  { type: 'cmd', text: './meet-malek --interactive' },
  { type: 'out', text: 'Welcome. I’m Malek — IBM Maximo consultant, Java developer and infrastructure builder.' },
  { type: 'out', text: '3+ years · SUEZ France assignment · Sinorfi · personal Kubernetes platforms' },
  { type: 'out', text: 'Type help, or choose a command below. This workspace is yours to explore.' },
];
const commands: Record<string, string[]> = {
  help: ['about → my profile', 'skills → explore my stack', 'projects → what I’ve built', 'contact → get in touch', 'resume → preview my CV', 'download → download my CV', 'clear → clear this terminal'],
  about: [profile.summary],
  skills: profile.skills.map(s => s.title + ': ' + s.items.join(' · ')),
  projects: profile.projects.map((p, i) => '0' + (i + 1) + ' · ' + p.title + ' [' + p.status + ']'),
  contact: [profile.email, profile.phone, profile.location + ' · UTC+1', profile.linkedin],
  resume: ['Opening the updated two-page CV…'],
  download: ['Downloading the updated two-page CV…'],
};
export default function InteractiveTerminal() {
  const [history, setHistory] = useState<Line[]>(initial);
  const [input, setInput] = useState('');
  const [entered, setEntered] = useState<string[]>([]);
  const cursor = useRef(0);
  const body = useRef<HTMLDivElement>(null);
  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    setEntered(previous => { const next = [...previous, cmd]; cursor.current = next.length; return next; });
    setInput('');
    if (cmd === 'clear') { setHistory([]); return; }
    const output = commands[cmd];
    setHistory(previous => [...previous, { type: 'cmd', text: cmd } as Line, ...(output
      ? output.map(text => ({ type: 'out' as const, text }))
      : [{ type: 'err' as const, text: 'Unknown command: ' + cmd + '. Try help.' }])].slice(-100));
    if (cmd === 'resume') openCv();
    if (cmd === 'download') {
      const link = document.createElement('a');
      link.href = profile.cv; link.download = 'Malek_Ferjani_resume.pdf'; link.click();
    }
  };
  useEffect(() => { if (body.current) body.current.scrollTop = body.current.scrollHeight; }, [history]);
  return <section id="terminal" className="terminal-section container">
    <div className="terminal-intro"><p className="eyebrow">Go beyond the scroll</p><h2>Your command.<br /><span>My experience.</span></h2><p>Explore my profile like a developer. Type a command, use the shortcuts, or press ↑ to revisit your last command.</p><span className="terminal-prompt-decoration" aria-hidden="true">&gt;_</span></div>
    <div className="interactive-terminal">
      <div className="console-heading"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>malek@portfolio:~</span><Terminal size={15} /></div>
      <div className="terminal-output" ref={body} role="log" aria-label="Terminal output" aria-live="polite" tabIndex={0}>{history.map((line, i) => <div key={i} className={'terminal-line line-' + line.type}><span aria-hidden="true">{line.type === 'cmd' ? '❯' : line.type === 'err' ? '!' : '›'}</span><p>{line.text}</p></div>)}</div>
      <div className="terminal-chips">{Object.keys(commands).map(command => <button key={command} onClick={() => run(command)}>{command}</button>)}</div>
      <form onSubmit={e => { e.preventDefault(); run(input); }}><span aria-hidden="true">❯</span><input aria-label="Terminal command" placeholder="type help…" value={input} spellCheck={false} autoComplete="off" onChange={e => setInput(e.target.value)} onKeyDown={e => {
        if (e.key === 'ArrowUp') { e.preventDefault(); cursor.current = Math.max(0, cursor.current - 1); setInput(entered[cursor.current] ?? ''); }
        if (e.key === 'ArrowDown') { e.preventDefault(); cursor.current = Math.min(entered.length, cursor.current + 1); setInput(entered[cursor.current] ?? ''); }
      }} /><button type="submit" aria-label="Run command">ENTER ↵</button></form>
    </div>
  </section>;
}
