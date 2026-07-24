import React, { useEffect, useRef, useState } from 'react';
import HugeIcon from '../../components/icons/HugeIcon';
import {
  Cancel01Icon,
  Download01Icon,
  aboutStackIconMap,
} from '../../components/icons/iconMap';
import { Lang } from '../BentoHome/bentoCopy';
import { useBentoScale } from '../BentoHome/useBentoScale';
import { bentoImages } from '../BentoHome/bentoImages';
import { aboutCopy } from './aboutCopy';
import { isProjectCaseId } from '../ProjectCase/projectCaseData';
import SkeletonImage from '../../components/Skeleton/SkeletonImage';
import styles from './BentoAbout.module.css';

const personalPhotoImages = {
  cashless: { src: bentoImages.cashless, alt: 'Street photo' },
  'job-portal': { src: bentoImages.jobPortal, alt: 'Coast photo' },
  laptop: { src: bentoImages.laptop, alt: 'Workspace photo' },
  portrait: { src: bentoImages.portrait, alt: 'Portrait photo' },
} as const;

interface BentoAboutProps {
  onOpenProjectCase: (projectId: string) => void;
}

const BentoAbout: React.FC<BentoAboutProps> = ({ onOpenProjectCase }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { isMobile } = useBentoScale(containerRef);
  const [skillIndex, setSkillIndex] = useState(0);
  const [careerIndex, setCareerIndex] = useState(0);
  const [activePhotoId, setActivePhotoId] = useState<string | null>(null);
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

  const copy = aboutCopy[lang];
  const activeSkill = copy.skills[skillIndex];
  const activePhoto =
    copy.personalPhotos
      .map((photo) => ({
        ...photo,
        ...personalPhotoImages[photo.id as keyof typeof personalPhotoImages],
      }))
      .find((photo) => photo.id === activePhotoId) ?? null;

  useEffect(() => {
    if (!activePhotoId) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActivePhotoId(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoId]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSkillIndex((current) => (current + 1) % copy.skills.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [copy.skills.length]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCareerIndex((current) => (current + 1) % copy.careerSlides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [copy.careerSlides.length]);

  const handlePhotoClick = (photoId: string) => {
    if (isProjectCaseId(photoId)) {
      onOpenProjectCase(photoId);
      return;
    }

    setActivePhotoId(photoId);
  };

  return (
    <section
      ref={containerRef}
      id="about"
      className={`${styles.section} ${isMobile ? styles.sectionMobile : ''}`}
    >
      <div className={isMobile ? styles.mobileWrap : styles.desktopWrap}>
        <div className={isMobile ? undefined : styles.viewportGrid}>
          <div className={`${styles.grid} ${isMobile ? styles.gridMobile : ''}`}>
          <div className={styles.leftTrack}>
            <article className={`${styles.tile} ${styles.story}`}>
              <h1 className={styles.pageTitle}>{copy.pageTitle}</h1>

              <div className={styles.storyBlock}>
                <p className={styles.eyebrow}>{copy.myStory}</p>
                <p className={styles.bodyText}>{copy.storyText}</p>
              </div>

              <div className={styles.storyBlock}>
                <p className={styles.eyebrow}>{copy.whatIDoNow}</p>
                <p className={styles.nowText}>
                  {copy.whatIDoNowText}{' '}
                  <a
                    href="https://manoapp.com"
                    className={styles.underline}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {copy.companyName}
                  </a>{' '}
                  {lang === 'ru'
                    ? 'улучшаю ежедневный процесс заказа продуктов.'
                    : 'improving the daily process of ordering groceries.'}
                </p>
              </div>
            </article>

            <div className={styles.middleSlot}>
              <div className={styles.middleRow}>
                <article className={`${styles.tile} ${styles.experience}`}>
                  <div className={styles.careerBody}>
                    <div className={styles.careerSlides}>
                      {copy.careerSlides.map((slide, index) => {
                        const isActive = index === careerIndex;

                        return (
                          <div
                            key={slide.id}
                            className={`${styles.careerSlide} ${isActive ? styles.careerSlideActive : ''}`}
                            aria-hidden={!isActive}
                          >
                            <p className={styles.eyebrow}>{slide.eyebrow}</p>

                            {slide.kind === 'experience' ? (
                              <ul className={styles.experienceList}>
                                {slide.items.map((item) => (
                                  <li key={item.role} className={styles.experienceItem}>
                                    <span className={styles.experienceRole}>{item.role}</span>
                                    <span className={styles.experienceLine} aria-hidden="true" />
                                    <span className={styles.experiencePeriod}>{item.period}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : null}

                            {slide.kind === 'education' ? (
                              <div className={styles.educationList}>
                                {slide.items.map((item) => (
                                  <div key={`${item.degree}-${item.period}`} className={styles.educationBlock}>
                                    <div className={styles.experienceItem}>
                                      <span className={styles.experienceRole}>{item.school}</span>
                                      <span className={styles.experienceLine} aria-hidden="true" />
                                      <span className={styles.experiencePeriod}>{item.period}</span>
                                    </div>
                                    <p className={styles.educationDegree}>{item.degree}</p>
                                  </div>
                                ))}
                              </div>
                            ) : null}

                            {slide.kind === 'upskilling' ? (
                              <ul className={styles.upskillList}>
                                {slide.items.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className={styles.dots} role="tablist" aria-label={copy.careerCarouselLabel}>
                    {copy.careerSlides.map((slide, index) => (
                      <button
                        key={slide.id}
                        type="button"
                        className={`${styles.dot} ${index === careerIndex ? styles.dotActive : ''}`}
                        onClick={() => setCareerIndex(index)}
                        aria-label={slide.eyebrow}
                        aria-selected={index === careerIndex}
                        role="tab"
                      />
                    ))}
                  </div>
                </article>

                <article className={`${styles.tile} ${styles.personal}`}>
                  <p className={styles.personalEyebrow}>{copy.personalEyebrow}</p>
                  <p className={styles.personalText}>{copy.personalText}</p>

                  <div className={styles.musicCard}>
                    <div className={styles.musicMain}>
                      <div className={styles.musicCover} aria-hidden="true" />
                      <div className={styles.musicMeta}>
                        <p className={styles.musicTitle}>{copy.personalTrackTitle}</p>
                        <p className={styles.musicArtist}>{copy.personalTrackArtist}</p>
                      </div>
                    </div>
                    <div className={styles.musicFooter}>
                      <p className={styles.musicNote}>{copy.personalTrackNote}</p>
                      <span className={styles.musicLink}>{copy.personalListenCta}</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div className={styles.rightTrack}>
          <article className={`${styles.tile} ${styles.skills}`}>
            <div>
              <p className={styles.eyebrow}>{copy.skillsEyebrow}</p>
              <h2 className={styles.skillTitle}>{activeSkill.title}</h2>
              <p className={styles.skillText}>{activeSkill.text}</p>
            </div>

            <div className={styles.dots} role="tablist" aria-label={copy.skillsEyebrow}>
              {copy.skills.map((skill, index) => (
                <button
                  key={skill.title}
                  type="button"
                  className={`${styles.dot} ${index === skillIndex ? styles.dotActive : ''}`}
                  onClick={() => setSkillIndex(index)}
                  aria-label={skill.title}
                  aria-selected={index === skillIndex}
                  role="tab"
                />
              ))}
            </div>
          </article>

          <article className={`${styles.tile} ${styles.stack}`}>
            <h2 className={styles.stackTitle}>{copy.stackTitle}</h2>
            <div className={styles.stackRow}>
              {aboutStackIconMap.map((tool) => (
                <div key={tool.id} className={styles.stackIcon} title={tool.label}>
                  <HugeIcon icon={tool.icon} size={22} />
                </div>
              ))}
            </div>
          </article>

          <article className={`${styles.tile} ${styles.download}`}>
            <h3 className={styles.downloadTitle}>{copy.downloadTitle}</h3>
            <a
              href="/resume.pdf"
              download={copy.downloadFileName}
              className={styles.downloadButton}
            >
              <span className={styles.downloadButtonIcon} aria-hidden="true">
                <HugeIcon icon={Download01Icon} size={16} />
              </span>
              <span className={styles.downloadButtonLabel}>{copy.downloadPdf}</span>
            </a>
          </article>
          </div>
          </div>
        </div>

        <div className={styles.personalSection}>
          <article className={`${styles.personalTile} ${styles.personalPhotosTile}`}>
            <div className={styles.photoStrip}>
              <div className={styles.photoFan}>
                {copy.personalPhotos.map((photo, index) => {
                  const image = personalPhotoImages[photo.id as keyof typeof personalPhotoImages];

                  return (
                    <div
                      key={photo.id}
                      className={styles.photoItem}
                      style={{ zIndex: index + 1 }}
                    >
                      <div className={styles.photoItemInner}>
                        <button
                          type="button"
                          className={styles.photoCard}
                          onClick={() => handlePhotoClick(photo.id)}
                          aria-label={isProjectCaseId(photo.id) ? photo.title : copy.viewPhoto}
                        >
                          <SkeletonImage src={image.src} alt={image.alt} />
                        </button>
                        <div className={styles.photoCaption} aria-hidden="true">
                          <p className={styles.photoCaptionTitle}>{photo.title}</p>
                          <p className={styles.photoCaptionSubtitle}>{photo.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        </div>
      </div>

      {activePhoto && (
        <div
          className={styles.photoLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
          onClick={() => setActivePhotoId(null)}
        >
          <button
            type="button"
            className={styles.photoLightboxClose}
            onClick={() => setActivePhotoId(null)}
            aria-label={copy.closePhoto}
          >
            <HugeIcon icon={Cancel01Icon} size={18} />
          </button>
          <img
            className={styles.photoLightboxImage}
            src={activePhoto.src}
            alt={activePhoto.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default BentoAbout;
