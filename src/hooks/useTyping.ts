import { useState, useEffect } from 'react';

export function useTyping(lines: readonly string[], speed = 38) {
  const [idx, setIdx] = useState(0);
  const [char, setChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    const current = lines[idx] ?? '';
    if (char < current.length) {
      const id = setTimeout(() => setChar(c => c + 1), speed + Math.random() * 20);
      return () => clearTimeout(id);
    }
    if (idx < lines.length - 1) {
      const id = setTimeout(() => { setIdx(i => i + 1); setChar(0); }, 600);
      return () => clearTimeout(id);
    }
    setDone(true);
  }, [idx, char, done, lines, speed]);

  return lines.map((line, i) => {
    if (i < idx) return line;
    if (i === idx) return line.slice(0, char);
    return '';
  });
}
