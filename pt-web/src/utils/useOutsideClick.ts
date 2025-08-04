import {RefObject} from "react";

export const handleClickOutside = (
  refs: RefObject<HTMLElement | null>[],
  callbacks: (() => void)[],
) => {
  return (event: MouseEvent) => {
    refs.forEach((ref, index) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callbacks[index]?.();
      }
    });
  };
};
