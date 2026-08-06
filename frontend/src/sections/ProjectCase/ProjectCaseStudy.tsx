import React, { useEffect, useState } from 'react';
import HugeIcon from '../../components/icons/HugeIcon';
import { ArrowRight01Icon, ArrowUpRight01Icon } from '../../components/icons/iconMap';
import { SectionId } from '../../types/sections';
import { Lang } from '../BentoHome/bentoCopy';
import { caseToolIconMap } from '../../components/icons/stackBrandIcons';
import { BrandToolIcon } from '../../components/icons/BrandToolIcon';
import { caseStudyCopy } from './caseStudyCopy';
import { getProjectCase } from './projectCaseData';
import SkeletonImage from '../../components/Skeleton/SkeletonImage';
import styles from './ProjectCaseStudy.module.css';

interface ProjectCaseStudyProps {
  projectId: string;
  onNavigate: (sectionId: SectionId) => void;
  fallbackView?: SectionId;
}

const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({
  projectId,
  onNavigate,
  fallbackView = 'about',
}) => {
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
    if (!project || project.inDevelopment) {
      onNavigate(fallbackView);
    }
  }, [fallbackView, onNavigate, project]);

  if (!project) {
    return null;
  }

  return (
    <section id="project-case" className={styles.section}>
      <div className={styles.bento}>
        <article className={`${styles.tile} ${styles.titleTile}`}>
          <p className={styles.eyebrow}>{project.subtitle[lang]}</p>
          <h1 className={styles.pageTitle}>{project.title[lang]}</h1>
          {project.appUrl ? (
            <a href={project.appUrl} className={styles.ctaButton} target="_blank" rel="noreferrer">
              <span>{copy.checkApp}</span>
              <HugeIcon icon={ArrowUpRight01Icon} size={14} />
            </a>
          ) : null}
        </article>

        <article className={`${styles.tile} ${styles.heroTile}`}>
          <SkeletonImage className={styles.heroImage} src={project.heroImage} alt={project.title[lang]} />
        </article>

        <article className={`${styles.tile} ${styles.metaTile}`}>
          <p className={styles.eyebrow}>{copy.company}</p>
          <p className={styles.metaValue}>{project.company[lang]}</p>
        </article>

        <article className={`${styles.tile} ${styles.metaTile}`}>
          <p className={styles.eyebrow}>{copy.myRole}</p>
          <p className={styles.metaValue}>{project.role[lang]}</p>
        </article>

        <article className={`${styles.tile} ${styles.metaTile}`}>
          <p className={styles.eyebrow}>{copy.timeline}</p>
          <p className={styles.metaValue}>{project.timeline}</p>
        </article>

        <article className={`${styles.tile} ${styles.toolsTile}`}>
          <p className={styles.eyebrow}>{copy.tools}</p>
          <ul className={styles.toolsList}>
            {project.tools.map((tool) => {
              const Icon = caseToolIconMap[tool.id];

              return (
                <li key={tool.id} className={styles.toolIcon}>
                  {Icon ? (
                    <BrandToolIcon label={tool.label} Icon={Icon} size={18} />
                  ) : (
                    <span className={styles.toolFallback}>{tool.label}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </article>

        <article className={`${styles.tile} ${styles.descTile}`}>
          <p className={styles.eyebrow}>{copy.description}</p>
          <p className={styles.bodyText}>{project.description[lang]}</p>
        </article>

        <article className={`${styles.tile} ${styles.contextTile}`}>
          <p className={styles.eyebrow}>{copy.context}</p>
          <p className={styles.bodyText}>{project.context[lang]}</p>
        </article>

        <article className={`${styles.tile} ${styles.problemTile}`}>
          <h2 className={styles.tileHeading}>{copy.problem}</h2>
          <p className={styles.bodyText}>{project.problem[lang]}</p>
        </article>

        <article className={`${styles.tile} ${styles.mediaTile}`}>
          <SkeletonImage className={styles.mediaImage} src={project.problemImage} alt="" />
        </article>

        <article className={`${styles.tile} ${styles.processIntroTile}`}>
          <h2 className={styles.tileHeading}>{copy.process}</h2>
          <p className={styles.bodyText}>{project.processIntro[lang]}</p>
        </article>

        {project.processSteps[lang].map((step, index, steps) => {
          const spanClass = steps.length <= 3 ? styles.stepTileThird : styles.stepTileHalf;
          const flow = step.flow;

          return (
            <article key={step.title} className={`${styles.tile} ${styles.stepTile} ${spanClass}`}>
              <h3 className={styles.stepTitle}>
                <span className={styles.stepIndex}>{String(index + 1).padStart(2, '0')}</span>
                {step.title}
              </h3>
              {step.text ? <p className={styles.stepText}>{step.text}</p> : null}
              {step.chips?.length ? (
                <ul className={styles.stepChips}>
                  {step.chips.map((chip) => (
                    <li key={chip} className={styles.stepChip}>
                      {chip}
                    </li>
                  ))}
                </ul>
              ) : null}
              {flow?.length ? (
                <ol className={styles.stepFlow}>
                  {flow.map((node, nodeIndex) => (
                    <li key={node} className={styles.stepFlowItem}>
                      <span className={styles.stepChip}>{node}</span>
                      {nodeIndex < flow.length - 1 ? (
                        <span className={styles.stepFlowArrow} aria-hidden>
                          <HugeIcon icon={ArrowRight01Icon} size={14} />
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
              ) : null}
            </article>
          );
        })}

        {project.valueBlocks?.length ? (
          <>
            <article className={`${styles.tile} ${styles.valueHeaderTile}`}>
              <h2 className={styles.tileHeading}>{copy.value}</h2>
            </article>
            {project.valueBlocks.map((block) => (
              <article key={block.title[lang]} className={`${styles.tile} ${styles.valueTile}`}>
                <p className={styles.eyebrow}>{copy.valueFor}</p>
                <h3 className={styles.valueTitle}>{block.title[lang]}</h3>
                <p className={styles.bodyText}>{block.text[lang]}</p>
              </article>
            ))}
          </>
        ) : null}

        <article className={`${styles.tile} ${styles.solutionTile}`}>
          <h2 className={styles.tileHeading}>{copy.solution}</h2>
          <p className={styles.bodyText}>{project.solution[lang]}</p>
        </article>

        <article className={`${styles.tile} ${styles.mediaTile} ${styles.solutionMedia}`}>
          <SkeletonImage className={styles.mediaImage} src={project.showcaseMain} alt="" />
        </article>

        {project.metrics ? (
          <article className={`${styles.tile} ${styles.metricsTile}`}>
            <h2 className={styles.tileHeading}>{copy.metrics}</h2>
            <ul className={styles.metricChips}>
              {project.metrics[lang].map((metric) => (
                <li key={metric} className={styles.metricChip}>
                  {metric}
                </li>
              ))}
            </ul>
          </article>
        ) : null}

        <article className={`${styles.tile} ${styles.insightsTile}`}>
          <h2 className={styles.tileHeading}>{copy.keyInsights}</h2>
          <p className={styles.bodyText}>{project.insights[lang]}</p>
        </article>
      </div>
    </section>
  );
};

export default ProjectCaseStudy;
