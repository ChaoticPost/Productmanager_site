import React from 'react';
import type { BrandIconProps } from './stackBrandIcons';
import styles from './BrandToolIcon.module.css';

interface BrandToolIconProps {
  label: string;
  Icon: React.FC<BrandIconProps>;
  size?: number;
}

export const BrandToolIcon: React.FC<BrandToolIconProps> = ({ label, Icon, size = 20 }) => (
  <span className={styles.root} aria-label={label}>
    <span className={styles.icon} aria-hidden="true">
      <Icon size={size} />
    </span>
    <span className={styles.label} aria-hidden="true">
      {label}
    </span>
  </span>
);
