import React, { useEffect, useState } from 'react';
import HugeIcon from '../../components/icons/HugeIcon';
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  Tick01Icon,
} from '../../components/icons/iconMap';
import { SectionId } from '../../types/sections';
import { Lang } from '../BentoHome/bentoCopy';
import { getResourceProject, resourcesCopy } from './resourcesData';
import SkeletonImage from '../../components/Skeleton/SkeletonImage';
import styles from './BentoResourceDetail.module.css';

interface BentoResourceDetailProps {
  projectId: string;
  onNavigate: (sectionId: SectionId) => void;
}

const BentoResourceDetail: React.FC<BentoResourceDetailProps> = ({ projectId, onNavigate }) => {
  const [lang] = useState<Lang>(() => {
    if (typeof window === 'undefined') {
      return 'ru';
    }

    const saved = window.localStorage.getItem('lang');
    if (saved === 'ru' || saved === 'en') {
      return saved;
    }

    return 'ru';
  });
  const [slideIndex, setSlideIndex] = useState(0);

  const project = getResourceProject(projectId);
  const copy = resourcesCopy[lang];

  useEffect(() => {
    if (!project) {
      onNavigate('resources');
    }
  }, [onNavigate, project]);

  if (!project) {
    return null;
  }

  const slides = project.previewImages;
  const activeSlide = slides[slideIndex] ?? project.image;

  const showPrev = () => {
    setSlideIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setSlideIndex((current) => (current + 1) % slides.length);
  };

  return (
    <section id="resource-detail" className={styles.section}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>{project.title[lang]}</h1>
        <p className={styles.pageSubtitle}>{project.subtitle[lang]}</p>
      </header>

      <div className={styles.layout}>
        <article className={styles.galleryCard}>
          <div className={styles.galleryFrame}>
            <SkeletonImage
              key={`${project.id}-${slideIndex}`}
              className={styles.galleryImage}
              src={activeSlide}
              alt={project.title[lang]}
            />
            <div className={styles.galleryNav}>
              <button type="button" className={styles.galleryButton} onClick={showPrev} aria-label={copy.galleryPrev}>
                <HugeIcon icon={ArrowLeft01Icon} size={14} />
              </button>
              <button type="button" className={styles.galleryButton} onClick={showNext} aria-label={copy.galleryNext}>
                <HugeIcon icon={ArrowRight01Icon} size={14} />
              </button>
            </div>
            <div className={styles.dots} role="tablist" aria-label={project.title[lang]}>
              {slides.map((slide, index) => (
                <button
                  key={`${project.id}-slide-${index}`}
                  type="button"
                  className={`${styles.dot} ${index === slideIndex ? styles.dotActive : ''}`}
                  onClick={() => setSlideIndex(index)}
                  aria-label={`${copy.galleryNext} ${index + 1}`}
                  aria-selected={index === slideIndex}
                  role="tab"
                />
              ))}
            </div>
          </div>
        </article>

        <article className={styles.infoCard}>
          <span className={styles.badge}>{copy.freeLabel}</span>
          <p className={styles.description}>{project.description[lang]}</p>
          <ul className={styles.features}>
            {project.features[lang].map((feature) => (
              <li key={feature} className={styles.featureItem}>
                <span className={styles.featureIcon} aria-hidden="true">
                  <HugeIcon icon={Tick01Icon} size={12} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <a href={project.href} className={styles.primaryAction} target="_blank" rel="noreferrer">
              <span>{copy.getForFree}</span>
              <HugeIcon icon={ArrowUpRight01Icon} size={14} />
            </a>
            <a href={project.previewUrl} className={styles.secondaryAction} target="_blank" rel="noreferrer">
              <span>{copy.livePreview}</span>
              <HugeIcon icon={ArrowUpRight01Icon} size={14} />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BentoResourceDetail;
