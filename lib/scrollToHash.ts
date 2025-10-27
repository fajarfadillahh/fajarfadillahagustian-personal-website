import { MouseEvent } from "react";

export const scrollToHash = (
  e: MouseEvent<HTMLAnchorElement>,
  callback?: () => void,
) => {
  e.preventDefault();

  if (callback) callback();

  const url = new URL(e.currentTarget.href);
  const hash = url.hash;

  const target = document.querySelector(hash);

  if (!target) return;
  target?.scrollIntoView({ behavior: "smooth" });
};
