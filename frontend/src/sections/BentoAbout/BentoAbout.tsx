import React, { useEffect, useRef, useState } from 'react';
import HugeIcon from '../../components/icons/HugeIcon';
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Copy01Icon,
  aboutStackIconMap,
} from '../../components/icons/iconMap';
import { Lang } from '../BentoHome/bentoCopy';
import { useBentoScale } from '../BentoHome/useBentoScale';
import { bentoImages } from '../BentoHome/bentoImages';
import { aboutCopy } from './aboutCopy';
import styles from './BentoAbout.module.css';

const galleryImages = [
  { id: 'portrait', src: bentoImages.portrait, alt: 'Portrait' },
  { id: 'cashless', src: bentoImages.cashless, alt: 'Cashless project' },
  { id: 'job-portal', src: bentoImages.jobPortal, alt: 'Job portal project' },
  { id: 'laptop', src: bentoImages.laptop, alt: 'BoostPro project' },
];

const BentoAbout: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { isMobile } = useBentoScale(containerRef);
  const [skillIndex, setSkillIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);
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

  const email = 'hello@example.com';
  const copy = aboutCopy[lang];
  const activeSkill = copy.skills[skillIndex];
  const activeGallery = galleryImages[galleryIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSkillIndex((current) => (current + 1) % copy.skills.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [copy.skills.length]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      setEmailCopied(false);
    }
  };

  const showPrevGallery = () => {
    setGalleryIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length);
  };

  const showNextGallery = () => {
    setGalleryIndex((current) => (current + 1) % galleryImages.length);
  };

  return (
    <section
      ref={containerRef}
      id="about"
      className={`${styles.section} ${isMobile ? styles.sectionMobile : ''}`}
    >
      <div className={isMobile ? styles.mobileWrap : styles.desktopWrap}>
        <div className={`${styles.grid} ${isMobile ? styles.gridMobile : ''}`}>
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

          <article className={`${styles.tile} ${styles.experience}`}>
            <p className={styles.eyebrow}>{copy.experienceEyebrow}</p>
            <ul className={styles.experienceList}>
              {copy.experience.map((item) => (
                <li key={item.role} className={styles.experienceItem}>
                  <span className={styles.experienceRole}>{item.role}</span>
                  <span className={styles.experienceLine} aria-hidden="true" />
                  <span className={styles.experiencePeriod}>{item.period}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className={`${styles.tile} ${styles.gallery}`}>
            <img
              key={activeGallery.id}
              className={styles.galleryImage}
              src={activeGallery.src}
              alt={activeGallery.alt}
            />
            <div className={styles.galleryNav}>
              <button
                type="button"
                className={styles.galleryButton}
                onClick={showPrevGallery}
                aria-label={copy.galleryPrev}
              >
                <HugeIcon icon={ArrowLeft01Icon} size={14} />
              </button>
              <button
                type="button"
                className={styles.galleryButton}
                onClick={showNextGallery}
                aria-label={copy.galleryNext}
              >
                <HugeIcon icon={ArrowRight01Icon} size={14} />
              </button>
            </div>
          </article>

          <article className={`${styles.tile} ${styles.contact}`}>
            <h3 className={styles.contactTitle}>{copy.contactTitle}</h3>
            <button type="button" className={styles.copyButton} onClick={() => void handleCopyEmail()}>
              <span className={styles.copyButtonIcon} aria-hidden="true">
                <HugeIcon icon={Copy01Icon} size={16} />
              </span>
              <span>{emailCopied ? copy.copied : copy.copyEmail}</span>
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BentoAbout;
