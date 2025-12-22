import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapFadeIn = (
  ref: RefObject<HTMLElement>,
  vars?: gsap.TweenVars
) => {
  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
        ...vars,
      }
    );
  }, [ref, vars]);
};
