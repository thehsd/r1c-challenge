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
<<<<<<< HEAD
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);
    return () => {
=======
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
>>>>>>> 9a340526c3e6c2c8d371147b716aa27a47ac5be9
      document.removeEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchend", handleClickOutside);
      clearTimeout(delay);
    };
  }, [ref, callback]);
};

export default useOutsideClick;
