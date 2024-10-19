const Button = ({ children }) => {
  return (
    <div className='rounded-[6px] 2xl:rounded-[8px]  bg-[#e50000] flex  2xl:gap-[9px] gap-[8.2px]  px-6 py-[15.5px] 2xl:py-[18.5px] items-center justify-center'>
      {children}
    </div>
  );
};

export default Button;
