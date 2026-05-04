import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, animate, useInView } from 'framer-motion';

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function Counter({ value, duration = 1.5, suffix = '', className = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const animation = animate(motionValue, value, { 
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Intl.NumberFormat('en-US').format(Math.round(latest));
          }
        }
      });
      return () => animation.stop();
    }
  }, [isInView, value, duration, motionValue]);

  return (
    <span className={className}>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}
