import { useState, useEffect, useCallback } from 'react';

function useScrollDirection(): 'down' | 'up' | null {
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up' | null>(null);
  const [scrollY, setScrollY] = useState<number>(0);

  const handleScroll = useCallback((): void => {
    const currentScrollY: number = window.scrollY;
    if (currentScrollY > scrollY) {
      setScrollDirection('down');
    } else if (currentScrollY < scrollY) {
      setScrollDirection('up');
    }
    setScrollY(currentScrollY);
  }, [scrollY, setScrollDirection]);

  useEffect(() => {
    setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return scrollDirection;
}

export default useScrollDirection;