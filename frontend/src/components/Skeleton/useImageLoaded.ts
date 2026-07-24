import { useEffect, useState } from 'react';

export const useImageLoaded = (src: string): boolean => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    setLoaded(false);

    const image = new Image();
    const markLoaded = () => {
      if (active) {
        setLoaded(true);
      }
    };

    image.onload = markLoaded;
    image.onerror = markLoaded;
    image.src = src;

    if (image.complete && image.naturalWidth > 0) {
      markLoaded();
    }

    return () => {
      active = false;
    };
  }, [src]);

  return loaded;
};
