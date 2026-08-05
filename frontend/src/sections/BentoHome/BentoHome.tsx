import React, { useEffect, useRef, useState } from 'react';
import { SectionId } from '../../types/sections';
import HugeIcon from '../../components/icons/HugeIcon';
import TenChatIcon from '../../components/icons/TenChatIcon';
import {
  ArrowUpRight01Icon,
  Copy01Icon,
  Download01Icon,
  Moon02Icon,
  Sun02Icon,
  socialIconMap,
  stackIconMap,
} from '../../components/icons/iconMap';
import styles from './BentoHome.module.css';
import { useBentoScale } from './useBentoScale';
import { bentoCopy, Lang } from './bentoCopy';
import { bentoImages } from './bentoImages';
import SkeletonImage from '../../components/Skeleton/SkeletonImage';
import SkeletonBackground from '../../components/Skeleton/SkeletonBackground';

interface BentoHomeProps {
  onNavigate: (sectionId: SectionId) => void;
  onOpenProjectCase: (projectId: string) => void;
}

const socialLinks = [
  { id: 'tenchat', label: 'TenChat', href: 'https://tenchat.ru/daria_chugu' },
  { id: 'dribbble', label: 'Dribbble', href: 'https://dribbble.com/Daria_Chugunova' },
  { id: 'setka', label: 'Сетка', href: 'https://setka.ru/users/e52593fc-b3f2-4a8b-86aa-575cab9d3c88' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/daria-chugunova-21a737390/' },
  { id: 'behance', label: 'Behance', href: 'https://www.behance.net/daria_chugu' },
  { id: 'mail', label: 'Email', href: 'mailto:dariachugu_work@inbox.ru' },
];

const stackTools = stackIconMap;
const stackStripItems = [...stackTools, ...stackTools, ...stackTools, ...stackTools];

const projectPreviews = [
  { id: 'campus-care', title: 'Campus Care', image: 'campusCare' as const },
  { id: 'sorting-center', title: 'Sorting Center', image: 'jobPortal' as const },
];

const ArrowButton: React.FC<{ onClick?: () => void; label?: string }> = ({ onClick, label = 'Open' }) => (
  <button type="button" className={styles.arrowButton} onClick={onClick} aria-label={label}>
    <HugeIcon icon={ArrowUpRight01Icon} size={15} />
  </button>
);

const BentoHome: React.FC<BentoHomeProps> = ({ onNavigate, onOpenProjectCase }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { isMobile } = useBentoScale(containerRef);
  const [emailCopied, setEmailCopied] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') {
      return true;
    }

    const saved = window.localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      return saved === 'dark';
    }

    return true;
  });
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') {
      return 'ru';
    }

    const saved = window.localStorage.getItem('lang');
    if (saved === 'ru' || saved === 'en') {
      return saved;
    }

    return 'ru';
  });
  const email = 'dariachugu_work@inbox.ru';
  const copy = bentoCopy[lang];

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem('lang', lang);
  }, [lang]);

  const navigate = (id: SectionId) => {
    onNavigate(id);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      setEmailCopied(false);
    }
  };

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
  };

  const toggleLang = () => {
    setLang((current) => (current === 'ru' ? 'en' : 'ru'));
  };

  return (
    <section
      ref={containerRef}
      id="intro"
      className={`${styles.section} ${isMobile ? styles.sectionMobile : ''}`}
    >
      <div className={isMobile ? styles.mobileWrap : styles.desktopWrap}>
        <div className={`${styles.grid} ${isMobile ? styles.gridMobile : ''}`}>
        <article className={`${styles.tile} ${styles.hero}`}>
          <h1 className={styles.heroTitle}>
            {copy.heroTitleBefore} <span className={styles.heroName}>{copy.heroName}</span>
            {copy.heroTitleAfter}
          </h1>
          <p className={styles.heroSubtitle}>
            {copy.heroSubtitle}{' '}
            <a
              href={copy.companyUrl}
              className={styles.underline}
              target="_blank"
              rel="noreferrer"
            >
              {copy.companyName}
            </a>
          </p>
        </article>

        {projectPreviews.map((project, index) => {
          const imageSrc = bentoImages[project.image];

          return (
            <SkeletonBackground
              key={project.id}
              type="button"
              src={imageSrc}
              className={`${styles.tile} ${styles.project} ${index === 0 ? styles.projectOne : styles.projectTwo}`}
              onClick={() => onOpenProjectCase(project.id)}
              ariaLabel={project.title}
            >
              <span className={styles.projectOverlay}>
                <span className={styles.projectTitle}>{project.title}</span>
                <span className={styles.projectArrow} aria-hidden="true">
                  →
                </span>
              </span>
            </SkeletonBackground>
          );
        })}

        <div className={`${styles.tile} ${styles.socials}`}>
          {socialLinks.map((link) => {
            const showBlockedNotice = link.id === 'linkedin';

            return (
              <div key={link.id} className={styles.socialCell}>
                <a
                  href={link.href}
                  className={styles.socialLink}
                  data-social={link.id}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  {link.id === 'tenchat' ? (
                    <TenChatIcon size={16} />
                  ) : (
                    <HugeIcon icon={socialIconMap[link.id]} size={16} strokeWidth={1.5} />
                  )}
                </a>

                {showBlockedNotice ? (
                  <span className={styles.socialNotice}>
                    <button
                      type="button"
                      className={styles.socialNoticeBtn}
                      aria-label={copy.linkedinBlockedNotice}
                      aria-describedby="linkedin-blocked-tip"
                    >
                      i
                    </button>
                    <span id="linkedin-blocked-tip" role="tooltip" className={styles.socialNoticeTip}>
                      {copy.linkedinBlockedNotice}
                    </span>
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className={`${styles.tile} ${styles.photo}`}>
          <SkeletonImage className={styles.photoImage} src={bentoImages.portrait} alt="Portrait" />
        </div>

        <article
          className={`${styles.tile} ${styles.about}`}
          onClick={() => navigate('about')}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              navigate('about');
            }
          }}
        >
          <p className={styles.tileEyebrow}>{copy.aboutEyebrow}</p>
          <p className={styles.aboutText}>{copy.aboutText}</p>
          <ArrowButton onClick={() => navigate('about')} label="Go to about" />
        </article>

        <SkeletonBackground
          type="button"
          src={bentoImages.laptop}
          className={`${styles.tile} ${styles.laptop}`}
          onClick={() => onOpenProjectCase('laptop')}
          ariaLabel="BoostPro"
        >
          <span className={styles.laptopOverlay}>
            <span className={styles.laptopTitle}>BoostPro</span>
            <span className={styles.laptopArrow} aria-hidden="true">
              →
            </span>
          </span>
        </SkeletonBackground>

        <article className={`${styles.tile} ${styles.resources}`}>
          <p className={styles.tileEyebrow}>{copy.resourcesEyebrow}</p>
          <p className={styles.resourcesText}>{copy.resourcesText}</p>
          <ArrowButton onClick={() => navigate('resources')} label="Go to resources" />
        </article>

        <article className={`${styles.tile} ${styles.resume}`}>
          <p className={styles.tileEyebrow}>{copy.downloadTitle}</p>
          <a
            href={`${import.meta.env.BASE_URL}CV_DariaChugunova_PM.pdf`}
            download={copy.downloadFileName}
            className={styles.resumeButton}
          >
            <span className={styles.resumeButtonIcon} aria-hidden="true">
              <HugeIcon icon={Download01Icon} size={16} />
            </span>
            <span className={styles.resumeButtonLabel}>{copy.downloadPdf}</span>
          </a>
        </article>

        <article className={`${styles.tile} ${styles.stack}`}>
          <div className={styles.stackContent}>
            <p className={styles.tileEyebrow}>{copy.stackEyebrow}</p>
            <div className={styles.stackStrip} aria-hidden="true">
              <div className={styles.stackStripTrack}>
                {stackStripItems.map((tool, index) => (
                  <div key={`${tool.id}-${index}`} className={styles.stackIcon} title={tool.label}>
                    <tool.Icon size={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        <article className={`${styles.tile} ${styles.theme}`}>
          <div className={styles.themeControls}>
            <button
              type="button"
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-pressed={isDark}
              aria-label={isDark ? copy.switchToLight : copy.switchToDark}
            >
              <span className={styles.themeTrack}>
                <span className={`${styles.themeThumb} ${!isDark ? styles.themeThumbLight : ''}`}>
                  <HugeIcon
                    icon={isDark ? Moon02Icon : Sun02Icon}
                    size={14}
                    className={isDark ? styles.themeMoonIcon : styles.themeSunIcon}
                  />
                </span>
              </span>
            </button>

            <button
              type="button"
              className={styles.langToggle}
              onClick={toggleLang}
              aria-pressed={lang === 'en'}
              aria-label={lang === 'ru' ? copy.switchToEn : copy.switchToRu}
            >
              <span className={styles.langTrack}>
                <span className={`${styles.langThumb} ${lang === 'en' ? styles.langThumbEn : ''}`}>
                  {lang === 'ru' ? 'RU' : 'EN'}
                </span>
              </span>
            </button>
          </div>
        </article>

        <article className={`${styles.tile} ${styles.contact}`}>
          <p className={styles.tileEyebrow}>{copy.contactTitle}</p>
          <button type="button" className={styles.copyButton} onClick={() => void handleCopyEmail()}>
            <span className={styles.copyButtonIcon} aria-hidden="true">
              <HugeIcon icon={Copy01Icon} size={16} />
            </span>
            <span className={styles.copyButtonLabel}>{emailCopied ? copy.copied : copy.copyEmail}</span>
          </button>
        </article>
        </div>
      </div>
    </section>
  );
};

export default BentoHome;
