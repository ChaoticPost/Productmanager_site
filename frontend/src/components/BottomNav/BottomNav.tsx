import React, { useEffect, useState } from 'react';
import { SectionId } from '../../types/sections';
import styles from './BottomNav.module.css';

interface BottomNavProps {
  onNavigate: (sectionId: SectionId) => void;
}

interface NavLink {
  id: SectionId;
  label: string;
}

const navLinks: NavLink[] = [
  { id: 'work', label: 'Work' },
  { id: 'job', label: 'About' },
  { id: 'education', label: 'Education' },
];

const sectionIds: SectionId[] = ['intro', 'work', 'job', 'education', 'license', 'contact'];

const HomeIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 17 17 7M17 7H9M17 7v8"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BottomNav: React.FC<BottomNavProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState<SectionId>('intro');

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id as SectionId);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.wrapper} aria-label="Main navigation">
      <div className={styles.bar}>
        <button
          type="button"
          className={`${styles.homeButton} ${activeSection === 'intro' ? styles.homeButtonActive : ''}`}
          onClick={() => onNavigate('intro')}
          aria-label="Home"
          aria-current={activeSection === 'intro' ? 'page' : undefined}
        >
          <HomeIcon />
        </button>

        {navLinks.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`${styles.link} ${activeSection === item.id ? styles.linkActive : ''}`}
            onClick={() => onNavigate(item.id)}
            aria-current={activeSection === item.id ? 'page' : undefined}
          >
            {item.label}
          </button>
        ))}

        <button
          type="button"
          className={`${styles.cta} ${activeSection === 'contact' ? styles.ctaActive : ''}`}
          onClick={() => onNavigate('contact')}
          aria-current={activeSection === 'contact' ? 'page' : undefined}
        >
          <span>Get in Touch</span>
          <ArrowIcon />
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
