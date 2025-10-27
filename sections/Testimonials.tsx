"use client";

import { testimonials } from "@/data/site";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function SectionTestimonials() {
  const testiIndex = 0;

  return (
    <section id="testimonials" className="section">
      <h2 className="flex flex-col overflow-hidden text-4xl md:text-7xl lg:text-8xl">
        <span className="whitespace-nowrap">
          Some nice words from my past clients
        </span>
        <span className="self-end whitespace-nowrap text-orange-500">
          Some nice words from my past clients
        </span>
      </h2>

      <div className="container">
        <div className="mt-20">
          {testimonials.map(
            (testi, index) =>
              index === testiIndex && (
                <div
                  key={index}
                  className="grid md:grid-cols-5 md:items-center md:gap-8 lg:gap-16"
                >
                  <div className="aspect-square md:col-span-2 md:aspect-9/16">
                    <Image
                      src={testi.image}
                      alt={testi.name}
                      width={390}
                      height={694}
                      className="size-full object-cover"
                      style={{
                        objectPosition: `50% ${testi.imagePositionY * 100}%`,
                      }}
                    />
                  </div>

                  <blockquote className="md:col-span-3">
                    <div className="mt-8 text-3xl md:mt-0 md:text-5xl lg:text-6xl">
                      <span>&ldquo;</span>
                      <span>{testi.quote}</span>
                      <span>&rdquo;</span>
                    </div>

                    <cite className="mt-4 block not-italic md:mt-8 md:text-lg lg:text-lg">
                      {testi.name}, {testi.role} at {testi.company}
                    </cite>
                  </blockquote>
                </div>
              ),
          )}
        </div>

        <div className="mt-6 flex items-center gap-4 lg:mt-10">
          <button className="inline-flex size-11 items-center justify-center rounded-full border border-stone-400">
            <ArrowLeftIcon size={24} />
          </button>

          <button className="inline-flex size-11 items-center justify-center rounded-full border border-stone-400">
            <ArrowRightIcon size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
