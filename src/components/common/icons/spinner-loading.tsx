type TSpinnerLoadingIcon = React.SVGProps<SVGSVGElement>;
const SpinnerLoadingIcon = (props: TSpinnerLoadingIcon) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        opacity="0.2"
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10Z"
        fill="currentColor"
      />
      <path
        d="M19 10C19.5523 10 20.0052 9.55118 19.95 9.00166C19.8526 8.03092 19.6135 7.07783 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761203C12.9222 0.386482 11.9691 0.147357 10.9983 0.0499587C10.4488 -0.00517891 10 0.447715 10 1C10 1.55228 10.4494 1.99356 10.9974 2.06242C11.7053 2.15137 12.3996 2.3348 13.0615 2.60896C14.0321 3.011 14.914 3.60028 15.6569 4.34315C16.3997 5.08601 16.989 5.96793 17.391 6.93853C17.6652 7.60043 17.8486 8.29473 17.9376 9.00259C18.0064 9.55057 18.4477 10 19 10Z"
        fill="currentColor"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="0.70s"
          values="0 10 10;360 10 10"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default SpinnerLoadingIcon;
