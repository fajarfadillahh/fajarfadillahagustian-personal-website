import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function Button(
  props: {
    variant: "primary" | "secondary" | "text";
    iconAfter?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { className, children, variant, iconAfter, ...rest } = props;

  return (
    <button
      className={twMerge(
        "group/button relative inline-flex h-11 cursor-pointer items-center gap-2 rounded-xl px-6 uppercase transition duration-500",
        variant === "primary" && "bg-orange-500 text-white",
        variant === "secondary" &&
          "border border-orange-600 hover:bg-orange-500 hover:text-white",
        variant === "text" &&
          "h-auto border-transparent px-0 after:absolute after:top-full after:h-px after:w-0 after:bg-orange-600 after:transition-all after:duration-500 after:content-[''] hover:after:w-full",
        className,
      )}
      {...rest}
    >
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
}
