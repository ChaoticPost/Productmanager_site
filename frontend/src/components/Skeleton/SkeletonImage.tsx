import React, { ImgHTMLAttributes, useState } from 'react';
import Skeleton from './Skeleton';
import styles from './Skeleton.module.css';

type SkeletonImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  skeletonClassName?: string;
};

const SkeletonImage: React.FC<SkeletonImageProps> = ({
  className = '',
  skeletonClassName = '',
  onLoad,
  alt = '',
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`${styles.wrap} ${className}`.trim()}>
      {!loaded ? <Skeleton className={`${styles.overlay} ${skeletonClassName}`.trim()} /> : null}
      <img
        {...props}
        alt={alt}
        className={`${styles.media} ${loaded ? styles.mediaVisible : ''}`.trim()}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
      />
    </div>
  );
};

export default SkeletonImage;
