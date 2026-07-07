import React, { ReactNode, useEffect } from 'react';
import DotCursor from '../DotCursor/DotCursor';
import Footer from '../Footer/Footer';
import HugeIcon from '../icons/HugeIcon';
import { ArrowLeft01Icon } from '../icons/iconMap';
import { SectionId } from '../../types/sections';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
  currentView: SectionId;
  onNavigate: (sectionId: SectionId) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  const isHome = currentView === 'intro';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  useEffect(() => {
    if (!isHome) {
      document.body.style.overflow = '';
      return;
    }

    const media = window.matchMedia('(max-width: 639px)');

    const updateOverflow = () => {
      document.body.style.overflow = media.matches ? '' : 'hidden';
    };

    updateOverflow();
    media.addEventListener('change', updateOverflow);

    return () => {
      media.removeEventListener('change', updateOverflow);
      document.body.style.overflow = '';
    };
  }, [isHome]);

  return (
    <div className={`${styles.layout} ${isHome ? styles.layoutHome : ''}`}>
      {isHome && <DotCursor />}
      {!isHome && (
        <button type="button" className={styles.backButton} onClick={() => onNavigate('intro')}>
          <HugeIcon icon={ArrowLeft01Icon} size={16} />
          Home
        </button>
      )}
      <main className={`${styles.main} ${isHome ? styles.mainHome : ''}`}>{children}</main>
      {!isHome && <Footer />}
    </div>
  );
};

export default Layout;
