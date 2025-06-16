// src/hooks/useScrollAnimation.ts - Complete Hook Implementation

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Create scroll trigger animation
    const ctx = gsap.context(() => {
      gsap.fromTo(element,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, element);

    // Cleanup function
    return () => {
      ctx.revert();
    };
  }, []);

  return ref;
};

// Counter Animation Hook
export const useCounterAnimation = (target: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        onEnter: () => {
          gsap.to({ count: 0 }, {
            count: target,
            duration: duration / 1000,
            ease: 'power2.out',
            onUpdate: function() {
              setCount(Math.floor(this.targets()[0].count));
            }
          });
        }
      });
    }, element);

    return () => {
      ctx.revert();
    };
  }, [target, duration]);

  return { count, ref };
};