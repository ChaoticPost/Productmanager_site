import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import styles from './SkillBricks.module.css';

export type SkillBrickCategory = 'pm' | 'analytics' | 'mgmt';

export interface SkillBrickItem {
  id: string;
  label: string;
  category: SkillBrickCategory;
}

interface SkillBricksProps {
  title: string;
  skills: SkillBrickItem[];
}

const SkillBricks: React.FC<SkillBricksProps> = ({ title, skills }) => {
  const playgroundRef = useRef<HTMLDivElement>(null);
  const brickRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const playground = playgroundRef.current;
    if (!playground || skills.length === 0) {
      return;
    }

    const { Engine, Bodies, Composite, Runner, Mouse, MouseConstraint, Events } = Matter;

    let engine: Matter.Engine | null = null;
    let runner: Matter.Runner | null = null;
    let rafId = 0;
    let mouseConstraint: Matter.MouseConstraint | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let disposed = false;

    const clearWorld = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }

      if (runner) {
        Runner.stop(runner);
        runner = null;
      }

      if (engine) {
        Composite.clear(engine.world, false);
        Engine.clear(engine);
        engine = null;
      }

      mouseConstraint = null;
    };

    const syncBricks = (bodies: Matter.Body[]) => {
      const tick = () => {
        if (disposed) {
          return;
        }

        bodies.forEach((body) => {
          const el = (body as Matter.Body & { el?: HTMLSpanElement }).el;
          if (!el) {
            return;
          }

          const x = body.position.x - el.offsetWidth / 2;
          const y = body.position.y - el.offsetHeight / 2;
          el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${body.angle}rad)`;
        });

        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);
    };

    const build = () => {
      clearWorld();

      const width = playground.clientWidth;
      const height = playground.clientHeight;
      if (width < 48 || height < 48) {
        return;
      }

      engine = Engine.create({
        gravity: { x: 0, y: 0.95, scale: 0.001 },
      });

      const wallOpts: Matter.IChamferableBodyDefinition = {
        isStatic: true,
        friction: 0.9,
        restitution: 0.05,
      };

      const thickness = 80;
      const walls = [
        Bodies.rectangle(width / 2, height + thickness / 2, width + thickness * 2, thickness, wallOpts),
        Bodies.rectangle(-thickness / 2, height / 2, thickness, height * 2, wallOpts),
        Bodies.rectangle(width + thickness / 2, height / 2, thickness, height * 2, wallOpts),
      ];

      const bodies: Matter.Body[] = [];

      skills.forEach((skill, index) => {
        const el = brickRefs.current[index];
        if (!el) {
          return;
        }

        const w = Math.max(el.offsetWidth, 36);
        const h = Math.max(el.offsetHeight, 28);
        const x = 24 + Math.random() * Math.max(width - 48, 1);
        const y = -30 - index * 28 - Math.random() * 40;

        const body = Bodies.rectangle(x, y, w, h, {
          chamfer: { radius: Math.min(12, h / 2) },
          restitution: 0.12,
          friction: 0.35,
          frictionAir: 0.02,
          density: 0.0018,
          label: skill.id,
        });

        (body as Matter.Body & { el?: HTMLSpanElement }).el = el;
        bodies.push(body);
      });

      Composite.add(engine.world, [...walls, ...bodies]);

      const mouse = Mouse.create(playground);
      mouse.pixelRatio = window.devicePixelRatio || 1;
      mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: 0.18,
          damping: 0.1,
          render: { visible: false },
        },
      });
      Composite.add(engine.world, mouseConstraint);

      Events.on(mouseConstraint, 'startdrag', () => {
        playground.classList.add(styles.dragging);
      });
      Events.on(mouseConstraint, 'enddrag', () => {
        playground.classList.remove(styles.dragging);
      });

      runner = Runner.create();
      Runner.run(runner, engine);
      syncBricks(bodies);
    };

    const bootId = window.setTimeout(() => {
      if (!disposed) {
        build();
      }
    }, 40);

      const resizeTimer = { id: 0 as number };
    resizeObserver = new ResizeObserver(() => {
      window.clearTimeout(resizeTimer.id);
      resizeTimer.id = window.setTimeout(() => {
        if (!disposed) {
          build();
        }
      }, 120);
    });
    resizeObserver.observe(playground);

    return () => {
      disposed = true;
      window.clearTimeout(bootId);
      window.clearTimeout(resizeTimer.id);
      resizeObserver?.disconnect();
      playground.classList.remove(styles.dragging);
      clearWorld();
    };
  }, [skills]);

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      <div ref={playgroundRef} className={styles.playground} aria-label={title}>
        {skills.map((skill, index) => (
          <span
            key={skill.id}
            ref={(node) => {
              brickRefs.current[index] = node;
            }}
            className={styles.brick}
            data-category={skill.category}
          >
            {skill.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillBricks;
