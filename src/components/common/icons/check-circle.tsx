// const CheckCircleIcon = () => {
type TCheckCircleIcon = React.SVGProps<SVGSVGElement>;
const CheckCircleIcon = (props: TCheckCircleIcon) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2.25C5.27171 2.25 2.25 5.27171 2.25 9C2.25 12.7283 5.27171 15.75 9 15.75C12.7283 15.75 15.75 12.7283 15.75 9C15.75 5.27171 12.7283 2.25 9 2.25ZM9 0.75C4.44329 0.75 0.75 4.44329 0.75 9C0.75 13.5567 4.44329 17.25 9 17.25C13.5567 17.25 17.25 13.5567 17.25 9C17.25 4.44329 13.5567 0.75 9 0.75Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8637 6.803C13.1566 7.0959 13.1566 7.57077 12.8637 7.86366L8.697 12.0303C8.4041 12.3232 7.92923 12.3232 7.63634 12.0303L5.13634 9.53033C4.84344 9.23744 4.84344 8.76256 5.13634 8.46967C5.42923 8.17678 5.9041 8.17678 6.197 8.46967L8.16667 10.4393L11.803 6.803C12.0959 6.51011 12.5708 6.51011 12.8637 6.803Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CheckCircleIcon;
