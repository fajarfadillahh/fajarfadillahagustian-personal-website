"use client";

import { projects } from "@/data/site";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function SectionProjects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Selected works</h2>

        <div className="mt-10 md:mt-16 lg:mt-20">
          {projects.map((project, index) => (
            <a
              href="#"
              key={index}
              className="flex flex-col border-t border-dotted border-stone-400 py-6 last:border-b md:py-8 lg:py-10"
            >
              <div className="">
                <div className="aspect-video md:hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={300}
                    height={168}
                    className="size-full object-cover"
                  />
                </div>

                <div className="mt-8 flex items-center justify-between md:mt-0">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl">
                    {project.name}
                  </h3>
                  <ArrowUpRightIcon size={24} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
