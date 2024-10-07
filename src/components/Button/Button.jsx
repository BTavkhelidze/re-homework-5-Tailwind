const Button = ({ children }) => {
  return (
    <div className='rounded-lg bg-[#e50000] flex  2xl:gap-[9px] gap-[8.2px]  px-6 py-[15.5px] py-[18.5px] items-center justify-center'>
      {children}
    </div>
  );
};

export default Button;
