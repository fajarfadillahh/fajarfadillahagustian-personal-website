"use client";

import Button from "@/components/Button";
import { navItems } from "@/data/site";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { scrollToHash } from "@/lib/scrollToHash";
import { useInView } from "motion/react";
import { useEffect } from "react";

export default function SectionFooter() {
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope);

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  return (
    <footer id="contact" className="bg-stone-900 text-white">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 animate-pulse rounded-full bg-green-400"></div>
            <span className="uppercase">available for your project</span>
          </div>

          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2
                className="mt-8 text-4xl font-light md:text-7xl lg:text-8xl"
                ref={scope}
              >
                Enough talk. Let&apos;s make something great together.
              </h2>

              <a
                href="mailto:fajarfadillahagustian@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  className="mt-8"
                  iconAfter={
                    <div className="size-6 overflow-hidden">
                      <div className="flex h-6 w-12 transition-transform duration-500 group-hover/button:-translate-x-1/2">
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
                  }
                >
                  Send to My Email
                </Button>
              </a>
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
