import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function useScrollAnimation(defaultThreshold = 0.2) {
  const [threshold, setThreshold] = useState(defaultThreshold);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // Example mobile breakpoint
        setThreshold(0.1); // Or a different value you find works better
      } else {
        setThreshold(defaultThreshold);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [defaultThreshold]);

  const { ref, inView } = useInView({
    threshold,
  });

  return { ref, inView };
}