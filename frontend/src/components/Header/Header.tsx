import React from 'react';
import { SectionId, NavItem } from '../../types/sections';
import styles from './Header.module.css';

interface HeaderProps {
  onNavigate: (sectionId: SectionId) => void;
}

const navItems: NavItem[] = [
  { id: 'intro', label: 'Intro' },
  { id: 'work', label: 'Work' },
  { id: 'job', label: 'Job' },
  { id: 'education', label: 'Education' },
  { id: 'license', label: 'License' },
  { id: 'contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ onNavigate }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <button
        type="button"
        className={styles.logo}
        onClick={() => onNavigate('intro')}
        aria-label="Daria Chugunova — go to home"
      >
        Daria Chugunova
      </button>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={styles.navItem}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
