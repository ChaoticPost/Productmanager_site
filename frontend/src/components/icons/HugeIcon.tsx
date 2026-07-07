import React from 'react';
import { HugeiconsIcon, type IconSvgElement } from '@hugeicons/react';

interface HugeIconProps {
  icon: IconSvgElement;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

const HugeIcon: React.FC<HugeIconProps> = ({ icon, size = 18, className, strokeWidth = 1.75 }) => (
  <HugeiconsIcon
    icon={icon}
    size={size}
    color="currentColor"
    strokeWidth={strokeWidth}
    className={className}
    aria-hidden={className ? undefined : true}
  />
);

export default HugeIcon;
