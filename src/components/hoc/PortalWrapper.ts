import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

type ReactPortalProps = {
  children: ReactNode;
  wrapperId: string;
  lockBody?: boolean;
};
// Render component.
const ReactPortal = ({
  children,
  wrapperId = "react-portal",
  lockBody = true,
}: ReactPortalProps) => {
  const [wrapper, setWrapper] = useState<Element | null>(null);

  useEffect(() => {
    let element = document.getElementById(wrapperId);
    let created = false;
    let delay: ReturnType<typeof setTimeout>;
    if (!element) {
      created = true;
      const wrapper = document.createElement("div");
      wrapper.setAttribute("id", wrapperId);
      delay = setTimeout(() => {
        if (lockBody) document.body.classList.add("lock-body-scroll");
      }, 100);
      document.body.appendChild(wrapper);
      element = wrapper;
    }
    // Set wrapper state.
    setWrapper(element);
    // Cleanup effect.
    return () => {
      if (created && element?.parentNode) {
        element.parentNode.removeChild(element);
        document.body.classList.remove("lock-body-scroll");
      }
      clearTimeout(delay);
    };
  }, [wrapperId]);
  if (wrapper === null) return null;
  return createPortal(children, wrapper);
};
export default ReactPortal;
