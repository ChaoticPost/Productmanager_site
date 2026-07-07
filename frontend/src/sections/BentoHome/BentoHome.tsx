import React, { useEffect, useRef, useState } from 'react';
import { SectionId } from '../../types/sections';
import HugeIcon from '../../components/icons/HugeIcon';
import {
  ArrowUpRight01Icon,
  Copy01Icon,
  Moon02Icon,
  Sun02Icon,
  socialIconMap,
  stackIconMap,
} from '../../components/icons/iconMap';
import styles from './BentoHome.module.css';
import { useBentoScale } from './useBentoScale';
import { bentoCopy, Lang } from './bentoCopy';
import { bentoImages } from './bentoImages';

interface BentoHomeProps {
  onNavigate: (sectionId: SectionId) => void;
}

const socialLinks = [
  { id: 'telegram', label: 'Telegram', href: 'https://t.me/' },
  { id: 'setka', label: 'Сетка', href: 'https://setka.ru' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
  { id: 'behance', label: 'Behance', href: 'https://behance.net' },
  { id: 'dribbble', label: 'Dribbble', href: 'https://dribbble.com' },
  { id: 'dprofile', label: 'Dprofile', href: 'https://dprofile.me' },
];

const stackTools = stackIconMap;
const stackStripItems = [...stackTools, ...stackTools, ...stackTools, ...stackTools];

const projectPreviews = [
  { id: 'cashless', title: 'Cashless' },
  { id: 'job-portal', title: 'Job Portal' },
];

const ArrowButton: React.FC<{
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
}> = ({ onClick, label = 'Open' }) => (
  <button
    type="button"
    className={styles.arrowButton}
    onClick={(event) => {
      event.stopPropagation();
      onClick?.(event);
    }}
    aria-label={label}
  >
    <HugeIcon icon={ArrowUpRight01Icon} size={15} />
  </button>
);

const BentoHome: React.FC<BentoHomeProps> = ({ onNavigate }) => {
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
  const email = 'hello@example.com';
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
            Hi, I&apos;m <span className={styles.heroName}>Tamer</span>
            <span className={styles.heroDash}> ⎯</span>
          </h1>
          <p className={styles.heroSubtitle}>
            {copy.heroSubtitle} <span className={styles.underline}>mano</span>
            {lang === 'ru' ? ', Каир' : ' based in Cairo'}
          </p>
        </article>

        {projectPreviews.map((project, index) => (
          <button
            key={project.id}
            type="button"
            className={`${styles.tile} ${styles.project} ${index === 0 ? styles.projectOne : styles.projectTwo}`}
            onClick={() => navigate('work')}
            aria-label={project.title}
            style={{
              backgroundImage: `url(${index === 0 ? bentoImages.cashless : bentoImages.jobPortal})`,
            }}
          />
        ))}

        <div className={`${styles.tile} ${styles.socials}`}>
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`${styles.socialLink} ${link.id === 'behance' ? styles.socialLinkAccent : ''}`}
              data-cursor-accent={link.id === 'behance' ? 'true' : undefined}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
            >
              <HugeIcon icon={socialIconMap[link.id]} size={16} strokeWidth={1.5} />
            </a>
          ))}
        </div>

        <div className={`${styles.tile} ${styles.photo}`}>
          <img className={styles.photoImage} src={bentoImages.portrait} alt="Portrait" />
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

        <button
          type="button"
          className={`${styles.tile} ${styles.laptop}`}
          onClick={() => navigate('work')}
          aria-label="BoostPro"
          style={{ backgroundImage: `url(${bentoImages.laptop})` }}
        />

        <article className={`${styles.tile} ${styles.resources}`}>
          <p className={styles.tileEyebrow}>{copy.resourcesEyebrow}</p>
          <p className={styles.resourcesText}>{copy.resourcesText}</p>
          <ArrowButton onClick={() => navigate('education')} label="Go to resources" />
        </article>

        <article className={`${styles.tile} ${styles.newsletter}`}>
          <h2 className={styles.newsletterTitle}>{copy.newsletterTitle}</h2>
          <form
            className={styles.newsletterForm}
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <input
              type="email"
              className={styles.newsletterInput}
              placeholder={copy.emailPlaceholder}
              aria-label={copy.emailPlaceholder}
            />
            <button type="submit" className={styles.newsletterButton}>
              {copy.subscribe}
            </button>
          </form>
        </article>

        <article className={`${styles.tile} ${styles.stack}`}>
          <div className={styles.stackContent}>
            <p className={styles.tileEyebrow}>{copy.stackEyebrow}</p>
            <div className={styles.stackStrip} aria-hidden="true">
              <div className={styles.stackStripTrack}>
                {stackStripItems.map((tool, index) => (
                  <div key={`${tool.id}-${index}`} className={styles.stackIcon} title={tool.label}>
                    <HugeIcon icon={tool.icon} size={22} />
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
          <h3 className={styles.contactTitle}>{copy.contactTitle}</h3>
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
