import React from 'react';
import styles from './Skeleton.module.css';

interface SkeletonProps {
  className?: string;
  rounded?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = '', rounded = true }) => (
  <div
    className={`${styles.skeleton} ${rounded ? styles.rounded : ''} ${className}`.trim()}
    aria-hidden="true"
  />
);

export default Skeleton;
