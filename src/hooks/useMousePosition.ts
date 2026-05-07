import { useState, useEffect } from 'react';

export interface MousePosition {
  x: number;
  y: number;
  normX: number;
  normY: number;
}

export function useMousePosition(): MousePosition {
  const [pos, setPos] = useState<MousePosition>({ x: 0, y: 0, normX: 0, normY: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
        normX: (e.clientX / window.innerWidth) * 2 - 1,
        normY: -((e.clientY / window.innerHeight) * 2 - 1),
      });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return pos;
}
