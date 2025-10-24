"use client";

import { useEffect, useRef, useState } from "react";

interface NumberTickerProps {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export function NumberTicker({ value, duration = 1200, className, suffix = "" }: NumberTickerProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const start = useRef<number>();

  useEffect(() => {
    let frame: number;
    const step = (timestamp: number) => {
      if (start.current === undefined) {
        start.current = timestamp;
      }
      const progress = Math.min((timestamp - start.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplayValue(Math.round(value * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  return <span className={className}>{displayValue.toLocaleString("pt-BR")}{suffix}</span>;
}
