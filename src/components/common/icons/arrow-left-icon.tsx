import type { FC } from "react";

type TArrowLeftIcon = React.SVGProps<SVGSVGElement>;

const ArrowLeftIcon: FC<TArrowLeftIcon> = (props) => {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.19667 1.13636C5.48956 1.42925 5.48956 1.90412 5.19667 2.19702L2.39367 5.00002L5.19667 7.80302C5.48956 8.09592 5.48956 8.57079 5.19667 8.86368C4.90378 9.15658 4.42891 9.15658 4.13601 8.86368L0.802678 5.53035C0.662025 5.3897 0.583008 5.19893 0.583008 5.00002C0.583008 4.80111 0.662025 4.61034 0.802678 4.46969L4.13601 1.13636C4.42891 0.843464 4.90378 0.843464 5.19667 1.13636Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowLeftIcon;
