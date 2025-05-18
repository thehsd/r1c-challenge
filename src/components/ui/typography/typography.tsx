import clsx from "clsx";
import type { FC, JSX, ReactNode } from "react";

export interface ITypography {
  htmlFor?: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "caption"
    | "p"
    | "span"
    | "strong"
    | "label"
    | "legend";
  weight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  children: ReactNode;
  className?: string;
}

const Typography: FC<ITypography> = ({
  variant = "p",
  children,
  weight = "normal",
  className,
  htmlFor,
}) => {
  const Tag = `${variant}` as keyof JSX.IntrinsicElements;
  return (
    <Tag
      htmlFor={htmlFor}
      className={clsx(
        {
          "font-thin": weight === "thin",
          "font-extralight": weight === "extralight",
          "font-light": weight === "light",
          "font-normal": weight === "normal",
          "font-medium": weight === "medium",
          "font-semibold": weight === "semibold",
          "font-bold": weight === "bold",
          "font-extrabold": weight === "extrabold",
          "font-black": weight === "black",
        },
        {
          "max-xs:text-xl text-2xl md:text-4xl": variant === "h1",
          "text-xl md:text-3xl": variant === "h2" || variant === "h3",
          "text-base md:text-2xl": variant === "h4",
          "text-sm md:text-xl": variant === "h5",
        },
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Typography;
