import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // If Lenis is being used, use its scrollTo method for an immediate jump
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    
    // Fallback for standard document scroll
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
