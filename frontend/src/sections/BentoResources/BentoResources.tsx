import React, { useState } from 'react';
import { Lang } from '../BentoHome/bentoCopy';
import { SectionId } from '../../types/sections';
import { resourceProjects, resourcesCopy } from './resourcesData';
import styles from './BentoResources.module.css';

interface BentoResourcesProps {
  onOpenProject: (projectId: string) => void;
}

const BentoResources: React.FC<BentoResourcesProps> = ({ onOpenProject }) => {
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

  const copy = resourcesCopy[lang];

  return (
    <section id="resources" className={styles.section}>
      <div className={styles.grid}>
        {resourceProjects.map((project) => (
          <button
            key={project.id}
            type="button"
            className={styles.card}
            onClick={() => onOpenProject(project.id)}
          >
            <div
              className={styles.preview}
              style={{ backgroundImage: `url(${project.image})` }}
              aria-hidden="true"
            />
            <div className={styles.meta}>
              <div className={styles.metaTop}>
                <h3 className={styles.title}>{project.title[lang]}</h3>
                <span className={styles.badge}>{copy.freeLabel}</span>
              </div>
              <p className={styles.subtitle}>{project.subtitle[lang]}</p>
            </div>
          </button>
        ))}
      </div>

    </section>
  );
};

export default BentoResources;
