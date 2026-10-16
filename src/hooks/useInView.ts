import { useEffect, useRef, useState } from 'react';

export function useInView(once = true) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        }
      },
      { rootMargin: '-60px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return [ref, visible] as const;
}
