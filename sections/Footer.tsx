"use client";

import Button from "@/components/Button";
import { navItems } from "@/data/site";
import { scrollToHash } from "@/lib/scrollToHash";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

export default function SectionFooter() {
  return (
    <footer id="contact" className="bg-stone-900 text-white">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400"></div>
            <span className="uppercase">
              One spot available for the next month
            </span>
          </div>

          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="mt-8 text-4xl font-light md:text-7xl lg:text-8xl">
                Enough talk. Let's make something great together.
              </h2>

              <Button
                variant="secondary"
                iconAfter={<ArrowUpRightIcon size={24} />}
                className="mt-8"
              >
                Contact Me
              </Button>
            </div>

            <div>
              <nav className="mt-16 flex flex-col gap-8 md:mt-0 md:items-end">
                {navItems.map((item, index) => (
                  <a href={item.href} key={index} onClick={scrollToHash}>
                    <Button variant="text" className="text-lg">
                      {item.label}
                    </Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <p className="py-16 text-sm text-white/30">
          Copyrights &copy; Fajar Fadillah A &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
}
