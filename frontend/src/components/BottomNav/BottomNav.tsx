import React from 'react';
import { SectionId } from '../../types/sections';
import HugeIcon from '../icons/HugeIcon';
import { ArrowLeft01Icon, ArrowUpRight01Icon, Home01Icon } from '../icons/iconMap';
import styles from './BottomNav.module.css';

interface BottomNavProps {
  activeView: SectionId;
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

const BottomNav: React.FC<BottomNavProps> = ({ activeView, onNavigate }) => (
  <nav className={styles.wrapper} aria-label="Main navigation">
    <div className={styles.bar}>
      <button
        type="button"
        className={`${styles.homeButton} ${activeView === 'intro' ? styles.homeButtonActive : ''}`}
        onClick={() => onNavigate('intro')}
        aria-label="Home"
        aria-current={activeView === 'intro' ? 'page' : undefined}
      >
        <HugeIcon icon={Home01Icon} size={18} />
      </button>

      {navLinks.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`${styles.link} ${activeView === item.id ? styles.linkActive : ''}`}
          onClick={() => onNavigate(item.id)}
          aria-current={activeView === item.id ? 'page' : undefined}
        >
          {item.label}
        </button>
      ))}

      <button
        type="button"
        className={`${styles.cta} ${activeView === 'contact' ? styles.ctaActive : ''}`}
        onClick={() => onNavigate('contact')}
        aria-current={activeView === 'contact' ? 'page' : undefined}
      >
        <span>Get in Touch</span>
        <HugeIcon icon={ArrowUpRight01Icon} size={14} />
      </button>
    </div>
  </nav>
);

export default BottomNav;
