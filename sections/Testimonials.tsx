"use client";

import Testimonial from "@/components/Testimonial";
import { testimonials } from "@/data/site";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

export default function SectionTestimonials() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });
  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const handleClickPrev = () => {
    setTestimonialIndex((curr) => {
      if (curr === 0) return testimonials.length - 1;

      return curr - 1;
    });
  };

  const handleClickNext = () => {
    setTestimonialIndex((curr) => {
      if (curr === testimonials.length - 1) return 0;

      return curr + 1;
    });
  };

  return (
    <section id="testimonials" className="section">
      <h2
        className="flex flex-col overflow-hidden text-4xl md:text-7xl lg:text-8xl"
        ref={titleRef}
      >
        <motion.span
          className="whitespace-nowrap"
          style={{
            x: transformTop,
          }}
        >
          Some love from the cool folks I've worked with
        </motion.span>
        <motion.span
          className="self-end whitespace-nowrap text-orange-500"
          style={{
            x: transformBottom,
          }}
        >
          Some love from the cool folks I've worked with
        </motion.span>
      </h2>

      <div className="container">
        <div className="mt-20">
          <AnimatePresence mode="wait" initial={false}>
            {testimonials.map(
              (testimonial, index) =>
                index === testimonialIndex && (
                  <Testimonial key={index} {...testimonial} />
                ),
            )}
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center gap-4 lg:mt-10">
          <button
            className="inline-flex size-11 items-center justify-center rounded-full border border-stone-400 transition-all duration-300 hover:cursor-pointer hover:border-orange-600 hover:bg-orange-500 hover:text-white"
            onClick={handleClickPrev}
          >
            <ArrowLeftIcon size={24} />
          </button>

          <button
            className="inline-flex size-11 items-center justify-center rounded-full border border-stone-400 transition-all duration-300 hover:cursor-pointer hover:border-orange-600 hover:bg-orange-500 hover:text-white"
            onClick={handleClickNext}
          >
            <ArrowRightIcon size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
