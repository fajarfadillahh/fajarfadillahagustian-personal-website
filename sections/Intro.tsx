"use client";

import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

export default function SectionIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, scope, entranceAnimation]);

  return (
    <section
      id="intro"
      className="section mt-12 lg:mt-20 lg:py-40"
      ref={sectionRef}
    >
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:w-[80%] lg:text-8xl" ref={scope}>
          Blending creativity and clean code to build digital experiences that
          inspire, engage, and set your brand apart
        </h2>
      </div>
    </section>
  );
}
