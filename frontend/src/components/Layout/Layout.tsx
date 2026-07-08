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
  const isResourcesFlow = currentView === 'resources' || currentView === 'resource-detail';
  const isFullBleedView = isBentoView || isResourcesFlow;
  const showDotCursor = isBentoView || isResourcesFlow;
  const showBack = currentView !== 'intro';
  const backTarget: SectionId = currentView === 'resource-detail' ? 'resources' : 'intro';
  const backLabel = currentView === 'resource-detail' ? 'Resources' : 'Home';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  useEffect(() => {
    if (!isFullBleedView) {
      document.body.style.overflow = '';
      return;
    }

    if (isResourcesFlow) {
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
  }, [isFullBleedView, isResourcesFlow]);

  return (
    <div
      className={`${styles.layout} ${isFullBleedView ? styles.layoutHome : ''} ${
        isResourcesFlow ? styles.layoutResources : ''
      }`}
    >
      {showDotCursor && <DotCursor />}
      {showBack && (
        <button type="button" className={styles.backButton} onClick={() => onNavigate(backTarget)}>
          <HugeIcon icon={ArrowLeft01Icon} size={16} />
          {backLabel}
        </button>
      )}
      <main
        className={`${styles.main} ${isFullBleedView ? styles.mainHome : ''} ${
          isResourcesFlow ? styles.mainResources : ''
        }`}
      >
        {children}
      </main>
      {!isFullBleedView && <Footer />}
    </div>
  );
};

export default Layout;
