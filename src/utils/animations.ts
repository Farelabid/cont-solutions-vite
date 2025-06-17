import { gsap } from 'gsap';

export const fadeIn = (element: string | Element, delay = 0) => {
  return gsap.fromTo(element, 
    {
      opacity: 0,
      y: 20
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: "power2.out"
    }
  );
};

export const slideIn = (element: string | Element, direction: 'left' | 'right' | 'up' | 'down' = 'up', delay = 0) => {
  const initialPos = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: 100 },
    down: { x: 0, y: -100 }
  };

  return gsap.fromTo(element,
    {
      opacity: 0,
      ...initialPos[direction]
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1,
      delay,
      ease: "power3.out"
    }
  );
};

export const staggerFadeIn = (elements: string | Element[], staggerDelay = 0.1, delay = 0) => {
  return gsap.fromTo(elements,
    {
      opacity: 0,
      y: 30
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      stagger: staggerDelay,
      ease: "power2.out"
    }
  );
};

export const scaleIn = (element: string | Element, delay = 0) => {
  return gsap.fromTo(element,
    {
      opacity: 0,
      scale: 0.8
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      delay,
      ease: "back.out(1.7)"
    }
  );
};

export const rotateIn = (element: string | Element, delay = 0) => {
  return gsap.fromTo(element,
    {
      opacity: 0,
      rotation: -180,
      scale: 0.5
    },
    {
      opacity: 1,
      rotation: 0,
      scale: 1,
      duration: 1,
      delay,
      ease: "power3.out"
    }
  );
};

export const parallaxScroll = (element: string | Element, speed = 0.5) => {
  return gsap.to(element, {
    yPercent: -100 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
};

export const textReveal = (element: string | Element, delay = 0) => {
  const tl = gsap.timeline({ delay });
  
  tl.fromTo(element,
    {
      opacity: 0,
      y: 100,
      skewY: 7
    },
    {
      opacity: 1,
      y: 0,
      skewY: 0,
      duration: 1.5,
      ease: "power4.out"
    }
  );
  
  return tl;
};

export const magneticHover = (element: HTMLElement) => {
  const strength = 40;
  
  element.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY, target } = e;
    const { offsetWidth, offsetHeight } = target as HTMLElement;
    const moveX = (offsetX / offsetWidth - 0.5) * strength;
    const moveY = (offsetY / offsetHeight - 0.5) * strength;
    
    gsap.to(element, {
      x: moveX,
      y: moveY,
      duration: 0.3,
      ease: "power2.out"
    });
  });
  
  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "elastic.out(1, 0.3)"
    });
  });
};