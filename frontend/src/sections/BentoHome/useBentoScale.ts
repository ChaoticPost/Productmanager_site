import { RefObject, useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 640;

export const useBentoScale = (containerRef: RefObject<HTMLElement | null>): { isMobile: boolean } => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const update = () => {
      setIsMobile(container.clientWidth < MOBILE_BREAKPOINT);
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(container);
    window.addEventListener('resize', update);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [containerRef]);

  return { isMobile };
};
