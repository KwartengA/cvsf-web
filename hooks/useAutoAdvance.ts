"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface UseAutoAdvanceOptions {
  count: number;
  interval?: number;
}

interface UseAutoAdvanceReturn {
  active: number;
  visible: boolean;
  progress: number;
  goTo: (index: number) => void;
}

export function useAutoAdvance({
  count,
  interval = 10000,
}: UseAutoAdvanceOptions): UseAutoAdvanceReturn {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    setVisible(false);
    setTimeout(() => {
      setActive(index);
      setVisible(true);
    }, 220);
  }, []);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);

    setProgress(0);
    const start = Date.now();

    progressRef.current = setInterval(() => {
      setProgress(Math.min(((Date.now() - start) / interval) * 100, 100));
    }, 30);

    timerRef.current = setTimeout(() => {
      setActive((prev) => {
        const next = (prev + 1) % count;
        setVisible(false);
        setTimeout(() => {
          setActive(next);
          setVisible(true);
        }, 220);
        return prev;
      });
    }, interval);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [active, count, interval]);

  return { active, visible, progress, goTo };
}
