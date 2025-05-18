import React, {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type FC,
  type ReactElement,
} from "react";
import clsx from "clsx";
import ReactPortal from "../../hoc/PortalWrapper";
import useOutsideClick from "../../../hooks/use-outside-click";
import type { ModalProps } from "./type";

import ModalHeader from "./modal-header";
import ModalContent from "./modal-content";
import ModalAction from "./modal-action";

const Modal: FC<ModalProps> = ({
  children,
  isVisible = false,
  onClose = () => {},
  size = "small",
  className,
}) => {
  const modalId = useId();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);

    setTimeout(() => onClose(), 80);
  };

  useOutsideClick(wrapperRef, closeModal);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => setShowModal(true), 25);

    const handlePopState = () => closeModal();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible]);

  const { headerSection, contentSection, actionSection } = useMemo(() => {
    const sectionMap: {
      headerSection?: ReactElement;
      contentSection?: ReactElement;
      actionSection?: ReactElement;
    } = {};

    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) {
        return;
      }

      switch (child.type) {
        case ModalHeader:
          sectionMap.headerSection = child;
          break;
        case ModalContent:
          sectionMap.contentSection = child;
          break;
        case ModalAction:
          sectionMap.actionSection = child;
          break;
        default:
          console.warn("Modal received an unexpected child type:", child.type);
          break;
      }
    });

    return sectionMap;
  }, [children]);

  if (!isVisible) return null;

  return (
    <ReactPortal wrapperId={`modal-container-${modalId}`}>
      <div
        className={clsx(
          "fixed inset-0 w-full h-full bg-black/30 z-20 transition-opacity"
        )}
        aria-hidden={!isVisible}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${modalId}`}
          ref={wrapperRef}
          className={clsx(
            "transition-all md:fixed w-full bottom-0 bg-white md:left-1/2 md:top-1/2 md:rounded-lg md:h-fit h-full",
            {
              "md:w-1/3": size === "small",
              "md:w-3/4": size === "normal",
              "md:w-full": size === "full",
            },
            "transform",
            showModal
              ? "translate-y-0 md:-translate-x-1/2  md:-translate-y-1/2   opacity-100"
              : "translate-y-full  md:-translate-x-[40%] md:-translate-y-[49%] opacity-10",
            className
          )}
        >
          {headerSection}
          {contentSection}
          {actionSection}
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
