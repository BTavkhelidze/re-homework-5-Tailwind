import React from 'react';
import {
  action,
  action2,
  actionMob,
  action2Mob,
  rightArrow,
} from '../../assets';

const Categories = () => {
  return (
    <div className=' pt-[100px] 2xl:pt-[200px] lg:pt-[150px]'>
      <div className='flex   gap-[80px]'>
        <div className='flex  flex-col 2xl:gap-[14px] lg:gap-[10px]'>
          <h3 className='2xl:text-[38px] lg:text-12 text-[24px] leading-[36px] 2xl:leading-[57px] lg:leading-[42px] text-white  '>
            Explore our wide variety of categories
          </h3>
          <p className='text-[#999999] 2xl:text-[18px] 2xl:leading-[27px] lg:text-[16px] lg:leading-6 text-[14px] leading-[21px]'>
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div className='hidden self-center  w-[205px] h-[68px] bg-[#0f0f0f] lg:flex xl:hidden  p-[12px] justify-start items-center rounded-[10px] boirder-[1px] border-[#1f1f1f]'>
          <div className='w-11 h-11 bg-[#1a1a1a] flex justify-center items-center rounded-[6px] border-[#1f1f1f]'>
            <svg
              width='18'
              height='16'
              viewBox='0 0 18 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16.5 8L1.5 8M1.5 8L8.25 14.75M1.5 8L8.25 1.25'
                stroke='white'
              />
            </svg>
          </div>
          <div className='flex gap-[3px] px-[12px] '>
            <div className='w-[14px] h-1 bg-[#e50000]'></div>
            <div className='w-[14px] h-1 bg-[#333333]'></div>
            <div className='w-[14px] h-1 bg-[#333333]'></div>
            <div className='w-[14px] h-1 bg-[#333333]'></div>
          </div>
          <div className='w-11 h-11 bg-[#1a1a1a] flex justify-center items-center rounded-[6px] border-[#1f1f] border-1'>
            <svg
              width='20'
              height='18'
              viewBox='0 0 20 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M11.5 1.5L19 9M19 9L11.5 16.5M19 9H1' stroke='white' />
            </svg>
          </div>
        </div>
      </div>
      <div className=' grid grid-cols-1 lg:grid-cols-5 justify-items-center gap-[30px] lg:gap-[20px] mt-[40px] lg:mt-[60px] 2xl:mt:[80px]'>
        <div className='bg-[#1a1a1a] rounded-[10px] border-[1px] border-[#1f1f1f]   w-full p-[20px] 2xl-[30px]'>
          <div className='w-full '>
            <img
              src={action}
              alt=''
              className='hidden lg:inline-block  w-full object-contain'
            />
            <img src={actionMob} alt='' className='lg:hidden w-full ' />
            <img
              src={action2}
              alt=''
              className='hidden lg:inline-block   object-contain w-full mt-[5px] '
            />
            <img
              src={action2Mob}
              alt=''
              className='lg:hidden w-full mt-[5px]'
            />
          </div>
          <div className='flex justify-between items-center '>
            <span className='text-[14px] lg:text-[16px] lg:leading-[24px] 2xl:text-[18px] 2xl:leading-[27px] lg:font-[600] leading-[21px] font-[700] text-white'>
              Action
            </span>
            <img
              src={rightArrow}
              alt='arrow'
              className='w-[12.5px] h-[11.2px] lg:w-[15px] lg:h-[13.5px] 2xl:w-[18.75px] 2xl:h-[16.9px] '
            />
          </div>
        </div>
        <div className='hidden lg:inline-block   w-full p-[30px] bg-[#1a1a1a] rounded-[10px] border-[1px] border-[#1f1f1f] '>
          <div className=' w-full '>
            <img src={action} alt='' className='  object-contain w-full' />
            <img
              src={action2}
              alt=''
              className=' object-contain w-full mt-[5px]'
            />
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-[14px] lg:text-[16px] lg:leading-[24px] 2xl:text-[18px] 2xl:leading-[27px] lg:font-[600] leading-[21px] font-[700] text-white'>
              Adventure
            </span>
            <img
              src={rightArrow}
              alt='arrow'
              className='w-[12.5px] h-[11.2px] lg:w-[15px] lg:h-[13.5px] 2xl:w-[18.75px] 2xl:h-[16.9px] '
            />
          </div>
        </div>
        <div className='hidden lg:inline-block    w-full p-[30px] bg-[#1a1a1a] rounded-[10px] border-[1px] border-[#1f1f1f] '>
          <div className=' '>
            <img src={action} alt='' className='object-contain w-full' />
            <img
              src={action2}
              alt=''
              className=' object-contain w-full mt-[5px]'
            />
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-[14px] lg:text-[16px] lg:leading-[24px] 2xl:text-[18px] 2xl:leading-[27px] lg:font-[600] leading-[21px] font-[700] text-white'>
              Comedy
            </span>
            <img
              src={rightArrow}
              alt='arrow'
              className='w-[12.5px] h-[11.2px] lg:w-[15px] lg:h-[13.5px] 2xl:w-[18.75px] 2xl:h-[16.9px] '
            />
          </div>
        </div>
        <div className='hidden lg:inline-block h-[100px]  w-full p-[30px] bg-[#1a1a1a] rounded-[10px] border-[1px] border-[#1f1f1f] '>
          <div className=' '>
            <img src={action} alt='' className=' object-contain w-full' />
            <img
              src={action2}
              alt=''
              className='mt-[5px] object-contain w-full'
            />
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-[14px] lg:text-[16px] lg:leading-[24px] 2xl:text-[18px] 2xl:leading-[27px] lg:font-[600] leading-[21px] font-[700] text-white'>
              Drama
            </span>
            <img
              src={rightArrow}
              alt='arrow'
              className='w-[12.5px] h-[11.2px] lg:w-[15px] lg:h-[13.5px] 2xl:w-[18.75px] 2xl:h-[16.9px] '
            />
          </div>
        </div>

        <div className='hidden lg:inline-block h-[100px]   w-full p-[30px] bg-[#1a1a1a] rounded-[10px] border-[1px] border-[#1f1f1f] '>
          <div className=' '>
            <img src={action} alt='' className=' object-contain w-full' />
            <img
              src={action2}
              alt=''
              className='mt-[5px]object-contain w-full'
            />
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-[14px] lg:text-[16px] lg:leading-[24px] 2xl:text-[18px] 2xl:leading-[27px] lg:font-[600] leading-[21px] font-[700] text-white'>
              Horor
            </span>
            <img
              src={rightArrow}
              alt='arrow'
              className='w-[12.5px] h-[11.2px] lg:w-[15px] lg:h-[13.5px] 2xl:w-[18.75px] 2xl:h-[16.9px] '
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
