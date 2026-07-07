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
  const isBentoView = currentView === 'intro' || currentView === 'about';
  const showBack = currentView !== 'intro';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  useEffect(() => {
    if (!isBentoView) {
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
  }, [isBentoView]);

  return (
    <div className={`${styles.layout} ${isBentoView ? styles.layoutHome : ''}`}>
      {currentView === 'intro' && <DotCursor />}
      {showBack && (
        <button type="button" className={styles.backButton} onClick={() => onNavigate('intro')}>
          <HugeIcon icon={ArrowLeft01Icon} size={16} />
          Home
        </button>
      )}
      <main className={`${styles.main} ${isBentoView ? styles.mainHome : ''}`}>{children}</main>
      {!isBentoView && <Footer />}
    </div>
  );
};

export default Layout;
