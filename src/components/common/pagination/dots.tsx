const Dots = () => {
  return (
    <div className="flex items-center justify-center w-8 h-8 gap-x-0.5 p-1 rounded-lg">
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="w-[3px] h-[3px] bg-secondary-default/90 rounded-4xl"
          ></div>
        ))}
    </div>
  );
};

export default Dots;
