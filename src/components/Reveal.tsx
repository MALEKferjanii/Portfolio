import { CSSProperties, ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
}

export default function Reveal({ children, delay = 0, style, className }: RevealProps) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(24px)',
        transition: `opacity .7s ${delay}s ease, transform .7s ${delay}s ease`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
