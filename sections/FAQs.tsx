"use client";

import { faqs } from "@/data/site";
import { PlusIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function SectionFAQs() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="section">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>

        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={twMerge(
                "group/faqs relative isolate border-t border-dotted border-stone-400 py-6 last:border-b hover:cursor-pointer md:py-8 lg:py-10",
                index === selectedIndex && "bg-stone-300",
              )}
              onClick={() => {
                index === selectedIndex
                  ? setSelectedIndex(null)
                  : setSelectedIndex(index);
              }}
            >
              <div className="absolute bottom-0 left-0 -z-10 h-0 w-full bg-stone-300 transition-all duration-500 group-hover/faqs:h-full"></div>

              <div
                className={twMerge(
                  "flex items-center justify-between gap-4 transition-all duration-500 group-hover/faqs:lg:pl-8",
                  index === selectedIndex && "lg:pl-8",
                )}
              >
                <div className={"text-2xl md:text-3xl lg:text-4xl"}>
                  {faq.question}
                </div>

                <div
                  className={twMerge(
                    "inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-stone-400 bg-stone-200 transition-all duration-500 group-hover/faqs:-translate-x-8",
                    index === selectedIndex && "-translate-x-8 rotate-45",
                  )}
                >
                  <PlusIcon size={24} />
                </div>
              </div>

              <AnimatePresence>
                {index === selectedIndex && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="overflow-hidden lg:pl-8"
                  >
                    <p className="mt-4 text-xl">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
