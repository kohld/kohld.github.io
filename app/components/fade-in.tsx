'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FadeInProps } from '@/lib/definitions';

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-5'}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
