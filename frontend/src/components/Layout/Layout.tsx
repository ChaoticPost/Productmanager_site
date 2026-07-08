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
  backConfig?: { target: SectionId; label: string };
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate, backConfig }) => {
  const isIntroView = currentView === 'intro';
  const isAboutView = currentView === 'about';
  const isBentoView = isIntroView || isAboutView;
  const isResourcesFlow = currentView === 'resources' || currentView === 'resource-detail';
  const isProjectCaseView = currentView === 'project-case';
  const isScrollableBentoView = isAboutView || isResourcesFlow || isProjectCaseView;
  const isFullBleedView = isBentoView || isResourcesFlow || isProjectCaseView;
  const showDotCursor = isBentoView || isResourcesFlow || isProjectCaseView;
  const showBack = currentView !== 'intro';
  const backTarget: SectionId = backConfig?.target ?? (currentView === 'resource-detail' ? 'resources' : 'intro');
  const backLabel = backConfig?.label ?? (currentView === 'resource-detail' ? 'Resources' : 'Home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  useEffect(() => {
    if (!isFullBleedView) {
      document.body.style.overflow = '';
      return;
    }

    if (isScrollableBentoView) {
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
  }, [isFullBleedView, isScrollableBentoView]);

  return (
    <div
      className={`${styles.layout} ${isFullBleedView ? styles.layoutHome : ''} ${
        isScrollableBentoView ? styles.layoutResources : ''
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
          isScrollableBentoView ? styles.mainResources : ''
        }`}
      >
        {children}
      </main>
      {!isFullBleedView && <Footer />}
    </div>
  );
};

export default Layout;
