import React, { CSSProperties, ReactNode } from 'react';
import Skeleton from './Skeleton';
import { useImageLoaded } from './useImageLoaded';
import styles from './Skeleton.module.css';

interface SkeletonBackgroundProps {
  src: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'div';
  ariaLabel?: string;
}

const SkeletonBackground: React.FC<SkeletonBackgroundProps> = ({
  src,
  className = '',
  style,
  children,
  onClick,
  type = 'div',
  ariaLabel,
}) => {
  const loaded = useImageLoaded(src);
  const mergedStyle: CSSProperties = {
    ...style,
    backgroundImage: loaded ? `url(${src})` : undefined,
  };

  const content = (
    <>
      {!loaded ? <Skeleton className={styles.cover} /> : null}
      {children}
    </>
  );

  if (type === 'button') {
    return (
      <button
        type="button"
        className={className}
        style={mergedStyle}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {content}
      </button>
    );
  }

  return (
    <div className={className} style={mergedStyle}>
      {content}
    </div>
  );
};

export default SkeletonBackground;
