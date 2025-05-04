import React, { useEffect, useRef, ReactNode } from 'react';

interface AnimatePresenceProps {
  children: ReactNode;
}

export const AnimatePresence: React.FC<AnimatePresenceProps> = ({ children }) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          
          // Add slide-up animation to children
          const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
          animatedElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('slide-up');
            }, index * 150); // Staggered animation
          });
          
          // Stop observing once it's animated
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, options);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observerRef.current?.observe(section);
    });
    
    return () => {
      if (observerRef.current) {
        sections.forEach(section => {
          observerRef.current?.unobserve(section);
        });
      }
    };
  }, []);
  
  return <>{children}</>;
};