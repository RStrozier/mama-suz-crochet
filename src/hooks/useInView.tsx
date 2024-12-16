import { useEffect, useState } from 'react';

const useInView = (options?: IntersectionObserverInit): boolean => {
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect(); // Stop observing once in view
      }
    }, options);

    const element = document.querySelector('.observed-image'); // Use a class or ref
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return isInView;
};

export default useInView;