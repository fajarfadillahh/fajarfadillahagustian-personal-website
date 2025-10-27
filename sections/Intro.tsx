"use client";

import { stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";
import SplitType from "split-type";

export default function SectionIntro() {
  const [introScope, introAnimate] = useAnimate();
  const inView = useInView(introScope, {
    once: true,
  });

  useEffect(() => {
    new SplitType(introScope.current.querySelector("h2"), {
      types: "lines,words",
      tagName: "span",
    });
  }, [introScope]);

  useEffect(() => {
    if (inView) {
      introAnimate(
        introScope.current.querySelectorAll(".word"),
        {
          transform: "translateY(0)",
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        },
      );
    }
  }, [inView, introScope, introAnimate]);

  return (
    <section
      id="intro"
      className="section mt-12 lg:mt-20 lg:py-40"
      ref={introScope}
    >
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:w-[80%] lg:text-8xl">
          Building beautiful websites with clean code and thoughtful design to
          help your business and stand out online
        </h2>
      </div>
    </section>
  );
}
