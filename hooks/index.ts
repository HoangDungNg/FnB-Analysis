import React, { useEffect, useState } from 'react';

export const useComponentSize = (ref: React.RefObject<HTMLElement>) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      if (ref.current) {
        const { clientHeight, clientWidth } = ref.current;
        setSize({ width: clientWidth, height: clientHeight });
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

  return size;
};
