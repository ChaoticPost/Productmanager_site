import React from 'react';

interface TenChatIconProps {
  size?: number;
  className?: string;
}

/** Official TenChat mark (chat bubble + T), monochrome via currentColor */
const TenChatIcon: React.FC<TenChatIconProps> = ({ size = 16, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 34 32"
    fill="none"
    className={className}
    aria-hidden
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.04 1.47a43.8 43.8 0 0 0-22.53 0 6.72 6.72 0 0 0-4.86 5.2 35.21 35.21 0 0 0 0 13.5 6.72 6.72 0 0 0 4.86 5.2 43.8 43.8 0 0 0 13.7 1.41c.6-.03 1.19.16 1.65.55l5.43 4.6a.34.34 0 0 0 .55-.27v-5.33c0-.38.27-.72.64-.80l.56-.16a6.72 6.72 0 0 0 4.86-5.2c.87-4.45.87-9.04 0-13.5a6.72 6.72 0 0 0-4.86-5.2Zm-4.27 4.47c.5 0 .91.41.91.92v3.2c0 .5-.4.91-.91.91h-3.2c-.5 0-.92.41-.92.92v8.68c0 .5-.4.92-.91.92h-3.66c-.5 0-.91-.41-.91-.92V11.9c0-.5-.41-.92-.91-.92h-3.2c-.5 0-.92-.4-.92-.91v-3.2c0-.5.41-.92.92-.92h13.7Z"
    />
  </svg>
);

export default TenChatIcon;
