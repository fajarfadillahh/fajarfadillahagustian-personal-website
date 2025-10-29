"use client";

import { projects } from "@/data/site";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView } from "motion/react";
import Image from "next/image";
import { useEffect } from "react";

export default function SectionProjects() {
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
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl" ref={scope}>
          Selected works
        </h2>

        <div className="mt-10 md:mt-16 lg:mt-20">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.href}
              target="_blank"
              className="group/projects relative flex flex-col border-t border-dotted border-stone-400 py-6 last:border-b hover:cursor-pointer md:py-8 lg:py-10"
            >
              <div className="absolute bottom-0 left-0 h-0 w-full bg-stone-300 transition-all duration-500 group-hover/projects:h-full"></div>

              <div className="relative">
                <div className="aspect-video md:hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={300}
                    height={168}
                    className="size-full object-cover"
                  />
                </div>

                <div className="mt-8 flex items-center justify-between md:mt-0 md:grid md:grid-cols-[1fr_300px_max-content] md:gap-8">
                  <div className="transition-all duration-500 lg:group-hover/projects:pl-8">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl">
                      {project.name}
                    </h3>
                  </div>

                  <div className="relative">
                    <div className="absolute top-1/2 z-10 aspect-video w-full -translate-y-1/2 scale-0 opacity-0 transition-all duration-500 group-hover/projects:scale-100 group-hover/projects:opacity-100 lg:group-hover/projects:scale-110">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={300}
                        height={168}
                        className="size-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="transition-all duration-500 lg:group-hover/projects:pr-8">
                    <div className="size-6 overflow-hidden">
                      <div className="flex h-6 w-12 transition-transform duration-500 group-hover/projects:-translate-x-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
