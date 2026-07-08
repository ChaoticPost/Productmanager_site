import React, { useEffect, useState } from 'react';
import HugeIcon from '../../components/icons/HugeIcon';
import { ArrowUpRight01Icon } from '../../components/icons/iconMap';
import { SectionId } from '../../types/sections';
import { Lang } from '../BentoHome/bentoCopy';
import { caseStudyCopy } from './caseStudyCopy';
import { getProjectCase } from './projectCaseData';
import styles from './ProjectCaseStudy.module.css';

interface ProjectCaseStudyProps {
  projectId: string;
  onNavigate: (sectionId: SectionId) => void;
}

const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({ projectId, onNavigate }) => {
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

  const project = getProjectCase(projectId);
  const copy = caseStudyCopy[lang];

  useEffect(() => {
    if (!project) {
      onNavigate('about');
    }
  }, [onNavigate, project]);

  if (!project) {
    return null;
  }

  return (
    <section id="project-case" className={styles.section}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>{project.title[lang]}</h1>
        <p className={styles.pageSubtitle}>{project.subtitle[lang]}</p>
      </header>

      <div className={styles.introGrid}>
        <article className={styles.card}>
          <div className={styles.metaList}>
            <div className={styles.metaItem}>
              <p className={styles.metaLabel}>{copy.company}</p>
              <p className={styles.metaValue}>{project.company[lang]}</p>
            </div>
            <div className={styles.metaItem}>
              <p className={styles.metaLabel}>{copy.myRole}</p>
              <p className={styles.metaValue}>{project.role[lang]}</p>
            </div>
            <div className={styles.metaItem}>
              <p className={styles.metaLabel}>{copy.tools}</p>
              <ul className={styles.toolsList}>
                {project.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
            <div className={styles.metaItem}>
              <p className={styles.metaLabel}>{copy.timeline}</p>
              <p className={styles.metaValue}>{project.timeline}</p>
            </div>
          </div>
        </article>

        <article className={styles.card}>
          <div className={styles.infoBlock}>
            <p className={styles.metaLabel}>{copy.description}</p>
            <p className={styles.infoText}>{project.description[lang]}</p>
          </div>
          <div className={styles.infoBlock}>
            <p className={styles.metaLabel}>{copy.context}</p>
            <p className={styles.infoText}>{project.context[lang]}</p>
          </div>
          <a href={project.appUrl} className={styles.ctaButton} target="_blank" rel="noreferrer">
            <span>{copy.checkApp}</span>
            <HugeIcon icon={ArrowUpRight01Icon} size={14} />
          </a>
        </article>
      </div>

      <article className={styles.mediaCard}>
        <img className={styles.mediaImage} src={project.heroImage} alt={project.title[lang]} />
      </article>

      <section className={styles.textSection}>
        <h2 className={styles.sectionTitle}>{copy.problem}</h2>
        <p className={styles.sectionText}>{project.problem[lang]}</p>
      </section>

      <article className={styles.mediaCard}>
        <img className={styles.mediaImage} src={project.problemImage} alt="" />
      </article>

      <section className={styles.textSection}>
        <h2 className={styles.sectionTitle}>{copy.process}</h2>
        <p className={styles.sectionText}>{project.processIntro[lang]}</p>
        <ol className={styles.processList}>
          {project.processSteps[lang].map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className={styles.textSection}>
        <h2 className={styles.sectionTitle}>{copy.solution}</h2>
        <p className={styles.sectionText}>{project.solution[lang]}</p>
      </section>

      <section className={styles.textSection}>
        <h2 className={styles.sectionTitle}>{copy.keyInsights}</h2>
        <p className={styles.sectionText}>{project.insights[lang]}</p>
      </section>

      <article className={styles.mediaCard}>
        <img className={styles.mediaImage} src={project.showcaseMain} alt="" />
      </article>

      <div className={styles.showcaseGrid}>
        {project.showcaseGrid.map((image, index) => (
          <article key={`${project.id}-showcase-${index}`} className={styles.showcaseItem}>
            <img className={styles.mediaImage} src={image} alt="" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectCaseStudy;
