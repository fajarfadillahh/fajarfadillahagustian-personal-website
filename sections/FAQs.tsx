"use client";

import { faqs } from "@/data/site";
import { PlusIcon } from "@phosphor-icons/react";

export default function SectionFAQs() {
  return (
    <section id="faqs" className="section">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>

        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-t border-dotted border-stone-400 py-6 last:border-b md:py-8 lg:py-10"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-2xl md:text-3xl">{faq.question}</div>

                <div className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-stone-400">
                  <PlusIcon size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
