"use client";

import Button from "@/components/Button";
import { ListIcon } from "@phosphor-icons/react";

export default function SectionHeader() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md">
      <div className="container max-w-full!">
        <div className="flex h-20 items-center justify-between">
          <div>
            <a href="/">
              <span className="text-xl font-bold uppercase">
                Fajar Fadillah A.
              </span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="inline-flex size-11 items-center justify-center rounded-full border border-stone-400 bg-stone-200">
              <ListIcon size={24} />
            </div>

            <Button variant="primary" className="hidden md:inline-flex">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
