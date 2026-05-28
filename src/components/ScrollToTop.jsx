import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  // Extracts pathname property from the current URL location
  const { pathname } = useLocation();

  // Automatically runs every time the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render anything visually
  return null; 
}