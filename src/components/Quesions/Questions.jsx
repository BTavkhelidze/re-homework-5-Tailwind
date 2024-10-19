import Button from "../Button/Button";

import { minus } from "../../assets";
import { plus } from "../../assets";

const Questions = () => {
  return (
    <div className="2xl:pt-[150px] pt-[80px] lg:pt-[120px]">
      <div className="2xl:gap-[100px] flex flex-col gap-[20px] lg:flex-row lg:justify-between lg:gap-[80px]">
        <div className="2xl:gap-[14px] flex flex-col items-start lg:gap-[10px]">
          <h3 className="2xl:text-[38px] 2xl:leading-[57px] text-[24px] leading-[36px] text-white lg:text-[28px] lg:leading-[42px]">
            Explore our wide variety of categories
          </h3>
          <p className="2xl:mt-[14px] 2xl:text-[18px] 2xl:leading-[27px] mt-[10px] w-full text-[14px] font-[400] leading-[21px] text-[#999999] lg:max-w-[1010px] lg:text-[16px] lg:leading-6">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div className="flex items-center lg:justify-center lg:self-center lg:p-[12px]">
          <Button>
            {" "}
            <span className="2xl:text-[18px] 2xl:leading-[27px] text-nowrap text-[14px] font-[600] leading-[21px] text-white">
              Ask a Question
            </span>{" "}
          </Button>
        </div>
      </div>
      <div className="2xl:mt-[80px] 2xl:gap-[80px] mt-[40px] flex flex-col lg:mt-[60px] lg:flex-row lg:gap-[40px]">
        <div className="w-full lg:flex-[1]">
          <div className="2xl:px-[34px] 2xl:py-[30px] border-b-2 border-red-700 bg-transparent px-[10px] py-[20px]">
            <div className="flex items-center justify-between gap-[20px] lg:items-start">
              <div className="lg:max-w-52px lg:max-h-54px border- 2xl:max-h-[67px] 2xl:max-w-[65px] 2xl:rounded-[10px] 2xl:p-[20px] flex max-h-[46px] max-w-[42px] items-center justify-center gap-[10px] rounded-[6px] bg-[#1f1f1f] p-[12px] text-white lg:rounded-[8px] lg:p-[16px]">
                01
              </div>
              <div className="flex w-full max-w-[558px] flex-col gap-[20px] text-white">
                <h4 className="2xl:text-[22px] 2xl:leading-[33px] justify-center text-[18px] font-medium leading-[27px] lg:text-[20px] lg:leading-[30px]">
                  What is StreamVibe?
                </h4>
                <p className="2xl:text-[22px] 2xl:leading-[33px] hidden text-[16px] leading-[24px] lg:block">
                  StreamVibe is a streaming service that allows you to watch
                  movies and shows on demand.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  className="2xl:h-[2.5px] 2xl:w-[20px] h-[2px] w-[16px] lg:mt-[15px]"
                  src={minus}
                  alt="close icon"
                />
                {/* <img
                  className='w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px]'
                  src={plus}
                  alt='open icon'
                /> */}
              </div>
            </div>
            <p className="mt-[12px] text-[14px] leading-[21px] text-white lg:hidden">
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
          </div>
          <div className="2xl:px-[34px] 2xl:py-[30px] border-b-2 border-red-700 bg-transparent px-[10px] py-[20px]">
            <div className="flex items-center justify-between gap-[20px] lg:items-start">
              <div className="lg:max-w-52px lg:max-h-54px border- 2xl:max-h-[67px] 2xl:max-w-[65px] 2xl:rounded-[10px] 2xl:p-[20px] flex max-h-[46px] max-w-[42px] items-center justify-center gap-[10px] rounded-[6px] bg-[#1f1f1f] p-[12px] text-white lg:rounded-[8px] lg:p-[16px]">
                02
              </div>
              <div className="flex w-full max-w-[558px] flex-col gap-[20px] text-white">
                <h4 className="2xl:text-[22px] 2xl:leading-[33px] justify-center text-[18px] font-medium leading-[27px] lg:text-[20px] lg:leading-[30px]">
                  How much does StreamVibe cost?
                </h4>
              </div>
              <div className="flex justify-center">
                {/* <img
                  className='w-[16px] h-[2px] 2xl:w-[20px] 2xl:h-[2.5px]'
                  src={minus}
                  alt='close icon'
                /> */}
                <img
                  className="2xl:h-[20px] 2xl:w-[20px] h-[16px] w-[16px]"
                  src={plus}
                  alt="open icon"
                />
              </div>
            </div>
          </div>
          <div className="2xl:px-[34px] 2xl:py-[30px] border-b-2 border-red-700 bg-transparent px-[10px] py-[20px]">
            <div className="flex items-center justify-between gap-[20px] lg:items-start">
              <div className="lg:max-w-52px lg:max-h-54px border- 2xl:max-h-[67px] 2xl:max-w-[65px] 2xl:rounded-[10px] 2xl:p-[20px] flex max-h-[46px] max-w-[42px] items-center justify-center gap-[10px] rounded-[6px] bg-[#1f1f1f] p-[12px] text-white lg:rounded-[8px] lg:p-[16px]">
                03
              </div>
              <div className="flex w-full max-w-[558px] flex-col gap-[20px] text-white">
                <h4 className="2xl:text-[22px] 2xl:leading-[33px] justify-center text-[18px] font-medium leading-[27px] lg:text-[20px] lg:leading-[30px]">
                  What content is available on StreamVibe?{" "}
                </h4>
              </div>
              <div className="flex justify-center">
                {/* <img
                  className='w-[16px] h-[2px] 2xl:w-[20px] 2xl:h-[2.5px]'
                  src={minus}
                  alt='close icon'
                /> */}
                <img
                  className="2xl:h-[20px] 2xl:w-[20px] h-[16px] w-[16px]"
                  src={plus}
                  alt="open icon"
                />
              </div>
            </div>
          </div>
          <div className="2xl:px-[34px] 2xl:py-[30px] border-b-2 border-red-700 bg-transparent px-[10px] py-[20px] lg:border-none">
            <div className="flex items-center justify-between gap-[20px] lg:items-start">
              <div className="lg:max-w-52px lg:max-h-54px border- 2xl:max-h-[67px] 2xl:max-w-[65px] 2xl:rounded-[10px] 2xl:p-[20px] flex max-h-[46px] max-w-[42px] items-center justify-center gap-[10px] rounded-[6px] bg-[#1f1f1f] p-[12px] text-white lg:rounded-[8px] lg:p-[16px]">
                04
              </div>
              <div className="flex w-full max-w-[558px] flex-col gap-[20px] text-white">
                <h4 className="2xl:text-[22px] 2xl:leading-[33px] justify-center text-[18px] font-medium leading-[27px] lg:text-[20px] lg:leading-[30px]">
                  How can I watch StreamVibe?{" "}
                </h4>
              </div>
              <div className="flex justify-center">
                {/* <img
                  className='w-[16px] h-[2px] 2xl:w-[20px] 2xl:h-[2.5px]'
                  src={minus}
                  alt='close icon'
                /> */}
                <img
                  className="2xl:h-[20px] 2xl:w-[20px] h-[16px] w-[16px]"
                  src={plus}
                  alt="open icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:flex-[1]">
          <div className="2xl:px-[34px] 2xl:py-[30px] border-b-2 border-red-700 bg-transparent px-[10px] py-[20px]">
            <div className="flex items-center justify-between gap-[20px] lg:items-start">
              <div className="lg:max-w-52px lg:max-h-54px border- 2xl:max-h-[67px] 2xl:max-w-[65px] 2xl:rounded-[10px] 2xl:p-[20px] flex max-h-[46px] max-w-[42px] items-center justify-center gap-[10px] rounded-[6px] bg-[#1f1f1f] p-[12px] text-white lg:rounded-[8px] lg:p-[16px]">
                05
              </div>
              <div className="flex w-full max-w-[558px] flex-col gap-[20px] text-white">
                <h4 className="2xl:text-[22px] 2xl:leading-[33px] justify-center text-[18px] font-medium leading-[27px] lg:text-[20px] lg:leading-[30px]">
                  How do I sign up for StreamVibe?{" "}
                </h4>
              </div>
              <div className="flex justify-center">
                {/* <img
                  className='w-[16px] h-[2px] 2xl:w-[20px] 2xl:h-[2.5px]'
                  src={minus}
                  alt='close icon'
                /> */}
                <img
                  className="2xl:h-[20px] 2xl:w-[20px] h-[16px] w-[16px]"
                  src={plus}
                  alt="open icon"
                />
              </div>
            </div>
          </div>
          <div className="2xl:px-[34px] 2xl:py-[30px] border-b-2 border-red-700 bg-transparent px-[10px] py-[20px]">
            <div className="flex items-center justify-between gap-[20px] lg:items-start">
              <div className="lg:max-w-52px lg:max-h-54px border- 2xl:max-h-[67px] 2xl:max-w-[65px] 2xl:rounded-[10px] 2xl:p-[20px] flex max-h-[46px] max-w-[42px] items-center justify-center gap-[10px] rounded-[6px] bg-[#1f1f1f] p-[12px] text-white lg:rounded-[8px] lg:p-[16px]">
                06
              </div>
              <div className="flex w-full max-w-[558px] flex-col gap-[20px] text-white">
                <h4 className="2xl:text-[22px] 2xl:leading-[33px] justify-center text-[18px] font-medium leading-[27px] lg:text-[20px] lg:leading-[30px]">
                  What is the StreamVibe free trial?{" "}
                </h4>
              </div>
              <div className="flex justify-center">
                {/* <img
                  className='w-[16px] h-[2px] 2xl:w-[20px] 2xl:h-[2.5px]'
                  src={minus}
                  alt='close icon'
                /> */}
                <img
                  className="2xl:h-[20px] 2xl:w-[20px] h-[16px] w-[16px]"
                  src={plus}
                  alt="open icon"
                />
              </div>
            </div>
          </div>
          <div className="2xl:px-[34px] 2xl:py-[30px] hidden border-b-2 border-red-700 bg-transparent px-[10px] py-[20px] lg:inline-block">
            <div className="flex items-center justify-between gap-[20px]">
              <div className="lg:max-w-52px lg:max-h-54px border- 2xl:max-h-[67px] 2xl:max-w-[65px] 2xl:rounded-[10px] 2xl:p-[20px] flex max-h-[46px] max-w-[42px] items-center justify-center gap-[10px] rounded-[6px] bg-[#1f1f1f] p-[12px] text-white lg:rounded-[8px] lg:p-[16px]">
                07
              </div>
              <div className="flex w-full max-w-[558px] flex-col gap-[20px] text-white">
                <h4 className="2xl:text-[22px] 2xl:leading-[33px] justify-center text-[18px] font-medium leading-[27px] lg:text-[20px] lg:leading-[30px]">
                  How do I contact StreamVibe customer support?{" "}
                </h4>
              </div>
              <div className="flex justify-center">
                {/* <img
                  className='w-[16px] h-[2px] 2xl:w-[20px] 2xl:h-[2.5px]'
                  src={minus}
                  alt='close icon'
                /> */}
                <img
                  className="2xl:h-[20px] 2xl:w-[20px] h-[16px] w-[16px]"
                  src={plus}
                  alt="open icon"
                />
              </div>
            </div>
          </div>
          <div className="2xl:px-[34px] 2xl:py-[30px] hidden border-red-700 bg-transparent px-[10px] py-[20px] lg:inline-block">
            <div className="flex items-center justify-between gap-[20px]">
              <div className="lg:max-w-52px lg:max-h-54px border- 2xl:max-h-[67px] 2xl:max-w-[65px] 2xl:rounded-[10px] 2xl:p-[20px] flex max-h-[46px] max-w-[42px] items-center justify-center gap-[10px] rounded-[6px] bg-[#1f1f1f] p-[12px] text-white lg:rounded-[8px] lg:p-[16px]">
                08
              </div>
              <div className="flex w-full max-w-[558px] flex-col gap-[20px] text-white">
                <h4 className="2xl:text-[22px] 2xl:leading-[33px] justify-center text-[18px] font-medium leading-[27px] lg:text-[20px] lg:leading-[30px]">
                  What are the StreamVibe payment methods?{" "}
                </h4>
              </div>
              <div className="flex justify-center">
                {/* <img
                  className='w-[16px] h-[2px] 2xl:w-[20px] 2xl:h-[2.5px]'
                  src={minus}
                  alt='close icon'
                /> */}
                <img
                  className="2xl:h-[20px] 2xl:w-[20px] h-[16px] w-[16px]"
                  src={plus}
                  alt="open icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
