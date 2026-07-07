import React, { ReactNode } from 'react';
import BottomNav from '../BottomNav/BottomNav';
import Footer from '../Footer/Footer';
import { SectionId } from '../../types/sections';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const handleNavigate = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.layout}>
      <main className={styles.main}>{children}</main>
      <Footer />
      <BottomNav onNavigate={handleNavigate} />
    </div>
  );
};

export default Layout;
