type TCheckMarkProps = React.SVGProps<SVGSVGElement>;

const CheckmarkIcon = (props: TCheckMarkProps) => {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.81825 0.68179C9.99398 0.857526 9.99398 1.14245 9.81825 1.31819L3.63075 7.50569C3.45501 7.68142 3.17009 7.68142 2.99435 7.50569L0.181851 4.69319C0.00611486 4.51745 0.00611486 4.23253 0.181851 4.05679C0.357587 3.88105 0.642511 3.88105 0.818247 4.05679L3.31255 6.55109L9.18185 0.68179C9.35759 0.506054 9.64251 0.506054 9.81825 0.68179Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CheckmarkIcon;
