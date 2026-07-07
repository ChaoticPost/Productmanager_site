import React, { useEffect, useRef, useState } from 'react';
import styles from './DotCursor.module.css';

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, label, summary';

const DotCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const position = useRef({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isAccent, setIsAccent] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');

    if (!media.matches) {
      return;
    }

    let frame = 0;

    const animate = () => {
      const node = cursorRef.current;
      if (node) {
        position.current.x += (target.current.x - position.current.x) * 0.2;
        position.current.y += (target.current.y - position.current.y) * 0.2;
        node.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
      }

      frame = window.requestAnimationFrame(animate);
    };

    const handleMove = (event: MouseEvent) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;
      setIsVisible(true);

      const element = document.elementFromPoint(event.clientX, event.clientY);
      const interactive = element?.closest(INTERACTIVE_SELECTOR);
      setIsHover(Boolean(interactive));
      setIsAccent(Boolean(interactive?.closest('[data-cursor-accent="true"]')));
    };

    const handleLeave = () => {
      setIsVisible(false);
    };

    const handleDown = () => {
      setIsHover(true);
    };

    frame = window.requestAnimationFrame(animate);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', handleLeave);
    window.addEventListener('mousedown', handleDown);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
      window.removeEventListener('mousedown', handleDown);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`${styles.cursor} ${isVisible ? styles.visible : ''} ${isHover ? styles.hover : ''} ${
        isAccent ? styles.accent : ''
      }`}
      aria-hidden="true"
    />
  );
};

export default DotCursor;
