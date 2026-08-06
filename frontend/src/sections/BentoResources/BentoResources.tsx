import React, { useState } from 'react';
import { Lang, bentoCopy } from '../BentoHome/bentoCopy';
import SkeletonBackground from '../../components/Skeleton/SkeletonBackground';
import { projectCases } from '../ProjectCase/projectCaseData';
import styles from './BentoResources.module.css';

interface BentoResourcesProps {
  onOpenProjectCase: (projectId: string) => void;
}

const BentoResources: React.FC<BentoResourcesProps> = ({ onOpenProjectCase }) => {
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

  const copy = bentoCopy[lang];

  return (
    <section id="resources" className={styles.section}>
      <div className={styles.grid}>
        {projectCases.map((project) => {
          const isInDevelopment = project.inDevelopment ?? false;

          return (
            <button
              key={project.id}
              type="button"
              className={`${styles.card} ${isInDevelopment ? styles.inDevelopment : ''}`}
              onClick={() => {
                if (!isInDevelopment) {
                  onOpenProjectCase(project.id);
                }
              }}
              aria-disabled={isInDevelopment}
              aria-label={
                isInDevelopment
                  ? `${copy.inDevelopmentLabel}: ${project.title[lang]}`
                  : project.title[lang]
              }
            >
              <SkeletonBackground
                src={project.heroImage}
                className={styles.preview}
                ariaLabel={project.title[lang]}
              />
              {isInDevelopment ? (
                <span className={styles.inDevelopmentLabel}>{copy.inDevelopmentLabel}</span>
              ) : null}
              <div className={styles.meta}>
                <div className={styles.metaTop}>
                  <h3 className={styles.title}>{project.title[lang]}</h3>
                </div>
                <p className={styles.subtitle}>{project.subtitle[lang]}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default BentoResources;
