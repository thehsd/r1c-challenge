import { useEffect } from "react";

const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  callback: (_e?: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    let delay: ReturnType<typeof setTimeout>;
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        delay = setTimeout(() => {
          callback();
        }, 150);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchend", handleClickOutside);
      clearTimeout(delay);
    };
  }, [ref, callback]);
};

export default useOutsideClick;
