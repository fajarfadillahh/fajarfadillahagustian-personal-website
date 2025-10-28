import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { motion, usePresence } from "motion/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { HtmlHTMLAttributes, useEffect } from "react";
import { twMerge } from "tailwind-merge";

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
  imagePositionY: number;
  image: string | StaticImport;
  className?: string;
};

export default function Testimonial({
  quote,
  name,
  role,
  company,
  imagePositionY,
  image,
  className,
  ...rest
}: TestimonialProps & HtmlHTMLAttributes<HTMLDivElement>) {
  const {
    scope: quoteScope,
    entranceAnimation: quoteEntranceAnimation,
    exitAnimation: quoteExitAnimation,
  } = useTextRevealAnimation();
  const {
    scope: citeScope,
    entranceAnimation: citeEntranceAnimation,
    exitAnimation: citeExitAnimation,
  } = useTextRevealAnimation();

  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent) {
      quoteEntranceAnimation().then(() => citeEntranceAnimation());
    } else {
      Promise.all([quoteExitAnimation(), citeExitAnimation()]).then(() =>
        safeToRemove(),
      );
    }
  }, [
    isPresent,
    quoteEntranceAnimation,
    quoteExitAnimation,
    citeEntranceAnimation,
    citeExitAnimation,
    safeToRemove,
  ]);

  return (
    <div
      className={twMerge(
        "grid md:grid-cols-5 md:items-center md:gap-8 lg:gap-16",
        className,
      )}
      {...rest}
    >
      <div className="relative aspect-square md:col-span-2 md:aspect-9/16">
        <motion.div
          className="absolute h-full bg-stone-900"
          initial={{
            width: "100%",
          }}
          animate={{ width: 0 }}
          exit={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <Image
          src={image}
          alt={name}
          width={390}
          height={694}
          className="size-full object-cover"
          style={{
            objectPosition: `50% ${imagePositionY * 100}%`,
          }}
        />
      </div>

      <blockquote className="md:col-span-3">
        <div
          className="mt-8 text-3xl md:mt-0 md:text-5xl lg:text-6xl"
          ref={quoteScope}
        >
          <span>&ldquo;</span>
          {quote}
          <span>&rdquo;</span>
        </div>

        <cite
          className="mt-4 block not-italic md:mt-8 md:text-lg lg:text-lg"
          ref={citeScope}
        >
          {name} as {role} at {company}
        </cite>
      </blockquote>
    </div>
  );
}
