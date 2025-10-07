import { useEffect, useRef, useState } from 'react';

export function useFadeInMoon() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 1 });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: `fade-in-moon ${visible ? 'visible' : ''}`
  };
}
