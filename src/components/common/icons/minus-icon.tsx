import type { FC } from "react";

type TMinusIcon = React.SVGProps<SVGSVGElement>;

const MinusIcon: FC<TMinusIcon> = (props) => {
  return (
    <svg
      width="8"
      height="2"
      viewBox="0 0 8 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.399902 0.999988C0.399902 0.75146 0.614806 0.549988 0.879902 0.549988H7.1199C7.385 0.549988 7.5999 0.75146 7.5999 0.999988C7.5999 1.24852 7.385 1.44999 7.1199 1.44999H0.879902C0.614806 1.44999 0.399902 1.24852 0.399902 0.999988Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MinusIcon;
