import Button from '../Button/Button';
import { minus } from '../../assets';

const Questions = () => {
  return (
    <div className='pt-[80px] lg:pt-[120px] 2xl:pt-[150px]'>
      <div className='flex flex-col lg:flex-row gap-[20px]    lg:gap-[80px] 2xl:gap-[100px] lg:justify-between'>
        <div className='flex  flex-col 2xl:gap-[14px] lg:gap-[10px]'>
          <h3 className='2xl:text-[38px] lg:text-12 text-[24px] leading-[36px] 2xl:leading-[57px] lg:leading-[42px] text-white  '>
            Explore our wide variety of categories
          </h3>
          <p className='text-[#999999] mt-[10px] 2xl:mt-[14px] 2xl:text-[18px] 2xl:leading-[27px] lg:text-[16px] lg:leading-6 text-[14px] leading-[21px] font-[400] lg:max-w-[1010px] w-full'>
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div className='flex lg:self-center   w-[205px] h-[68px] bg-[#0f0f0f]  lg:p-[12px] lg:justify-center items-center '>
          <Button>
            {' '}
            <span className='text-white text-[14px] leading-[21px] font-[600] text-nowrap 2xl:text-[18px] 2xl:leading-[27px]'>
              Ask a Question
            </span>{' '}
          </Button>
        </div>
      </div>
      <div className='mt-[40px] lg:mt-[60px] 2xl:mt-[80px] flex flex-col lg:flex-row 2xl:gap-[80px] lg:gap-[40px]'>
        <div className='w-full lg:flex-[1] '>
          <div className='bg-yellow-300 flex'>
            <div>01</div>
            <div className='text-white'>What is StreamVibe?</div>
            <div>
              <img src={minus} alt='' />
            </div>
          </div>
        </div>
        <div className='w-full lg:flex-[1]'>
          <div className='bg-yellow-300 flex'>
            <div>01</div>
            <div className='text-white'>What is StreamVibe?</div>
            <div>
              <img src={minus} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
