import type { FC } from "react";
import type { SectionProps } from "./type";
import clsx from "clsx";

const Section: FC<SectionProps> = ({
  title,
  description = "",
  children,
  className = "",
  size = "normal",
}) => {
  return (
    <section
      className={clsx(
        "bg-white",
        "rounded-lg",
        "h-auto",
        {
          "w-[480px]": size === "small",
        },
        className
      )}
    >
      <header
        className={clsx("p-6", "border-b", "border-b-secondary-light/60")}
      >
        <h6 className={clsx("font-semibold text-lg", "mb-2")}>{title}</h6>
        {description && (
          <p className={clsx("font-normal", "text-secondary-focus", "text-sm")}>
            {description}
          </p>
        )}
      </header>
      <div className={clsx("p-6")}>{children}</div>
    </section>
  );
};

export default Section;
