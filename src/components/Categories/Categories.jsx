import {
  action,
  action2,
  actionMob,
  action2Mob,
  rightArrow,
} from "../../assets";

const Categories = () => {
  return (
    <div className="2xl:pt-[200px] pt-[100px] lg:pt-[150px]">
      <div className="flex gap-[80px]">
        <div className="2xl:gap-[14px] flex flex-col lg:gap-[10px]">
          <h3 className="2xl:text-[38px] 2xl:leading-[57px] text-[24px] leading-[36px] text-white lg:text-[28px] lg:leading-[42px]">
            Explore our wide variety of categories
          </h3>
          <p className="2xl:text-[18px] 2xl:leading-[27px] text-[14px] leading-[21px] text-[#999999] lg:text-[16px] lg:leading-6">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div className="hidden h-[68px] w-[205px] items-center justify-start self-center rounded-[10px] border-[1px] border-[#1f1f1f] bg-[#0f0f0f] p-[12px] lg:flex xl:hidden">
          <div className="flex h-11 w-11 items-center justify-center rounded-[6px] border-[#1f1f1f] bg-[#1a1a1a]">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 8L1.5 8M1.5 8L8.25 14.75M1.5 8L8.25 1.25"
                stroke="white"
              />
            </svg>
          </div>
          <div className="flex gap-[3px] px-[12px]">
            <div className="h-1 w-[14px] bg-[#e50000]"></div>
            <div className="h-1 w-[14px] bg-[#333333]"></div>
            <div className="h-1 w-[14px] bg-[#333333]"></div>
            <div className="h-1 w-[14px] bg-[#333333]"></div>
          </div>
          <div className="bg-red border-1 flex h-11 w-11 items-center justify-center rounded-[6px] border-[red] bg-[#1a1a1a] bg-red-800">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.5 1.5L19 9M19 9L11.5 16.5M19 9H1" stroke="white" />
            </svg>
          </div>
        </div>
      </div>
      <div className="2xl:mt:[80px] mt-[40px] grid grid-cols-1 justify-items-center gap-[30px] lg:mt-[60px] lg:grid-cols-5 lg:gap-[20px]">
        <div className="2xl-[30px] w-full rounded-[10px] border-[1px] border-[#1f1f1f] bg-[#1a1a1a] p-[20px]">
          <div className="w-full">
            <img
              src={action}
              alt=""
              className="hidden w-full object-cover lg:inline-block"
            />
            <img src={actionMob} alt="" className="w-full lg:hidden" />
            <img
              src={action2}
              alt=""
              className="mt-[5px] hidden w-full object-contain lg:inline-block"
            />
            <img
              src={action2Mob}
              alt=""
              className="mt-[5px] w-full object-contain lg:hidden"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="2xl:text-[18px] 2xl:leading-[27px] text-[14px] font-[700] leading-[21px] text-white lg:text-[16px] lg:font-[600] lg:leading-[24px]">
              Action
            </span>
            <img
              src={rightArrow}
              alt="arrow"
              className="2xl:w-[18.75px] 2xl:h-[16.9px] h-[11.2px] w-[12.5px] lg:h-[13.5px] lg:w-[15px]"
            />
          </div>
        </div>
        <div className="hidden w-full rounded-[10px] border-[1px] border-[#1f1f1f] bg-[#1a1a1a] p-[30px] lg:inline-block">
          <div className="w-full">
            <img src={action} alt="" className="w-full object-contain" />
            <img
              src={action2}
              alt=""
              className="mt-[5px] w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="2xl:text-[18px] 2xl:leading-[27px] text-[14px] font-[700] leading-[21px] text-white lg:text-[16px] lg:font-[600] lg:leading-[24px]">
              Adventure
            </span>
            <img
              src={rightArrow}
              alt="arrow"
              className="2xl:w-[18.75px] 2xl:h-[16.9px] h-[11.2px] w-[12.5px] lg:h-[13.5px] lg:w-[15px]"
            />
          </div>
        </div>
        <div className="hidden w-full rounded-[10px] border-[1px] border-[#1f1f1f] bg-[#1a1a1a] p-[30px] lg:inline-block">
          <div className=" ">
            <img src={action} alt="" className="w-full object-contain" />
            <img
              src={action2}
              alt=""
              className="mt-[5px] w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="2xl:text-[18px] 2xl:leading-[27px] text-[14px] font-[700] leading-[21px] text-white lg:text-[16px] lg:font-[600] lg:leading-[24px]">
              Comedy
            </span>
            <img
              src={rightArrow}
              alt="arrow"
              className="2xl:w-[18.75px] 2xl:h-[16.9px] h-[11.2px] w-[12.5px] lg:h-[13.5px] lg:w-[15px]"
            />
          </div>
        </div>
        <div className="hidden h-[100px] w-full rounded-[10px] border-[1px] border-[#1f1f1f] bg-[#1a1a1a] p-[30px] lg:inline-block">
          <div className=" ">
            <img src={action} alt="" className="w-full object-contain" />
            <img
              src={action2}
              alt=""
              className="mt-[5px] w-full object-contain"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="2xl:text-[18px] 2xl:leading-[27px] text-[14px] font-[700] leading-[21px] text-white lg:text-[16px] lg:font-[600] lg:leading-[24px]">
              Drama
            </span>
            <img
              src={rightArrow}
              alt="arrow"
              className="2xl:w-[18.75px] 2xl:h-[16.9px] h-[11.2px] w-[12.5px] lg:h-[13.5px] lg:w-[15px]"
            />
          </div>
        </div>

        <div className="hidden h-[100px] w-full rounded-[10px] border-[1px] border-[#1f1f1f] bg-[#1a1a1a] p-[30px] lg:inline-block">
          <div className=" ">
            <img src={action} alt="" className="w-full object-contain" />
            <img
              src={action2}
              alt=""
              className="mt-[5px]object-contain w-full"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="2xl:text-[18px] 2xl:leading-[27px] text-[14px] font-[700] leading-[21px] text-white lg:text-[16px] lg:font-[600] lg:leading-[24px]">
              Horor
            </span>
            <img
              src={rightArrow}
              alt="arrow"
              className="2xl:w-[18.75px] 2xl:h-[16.9px] h-[11.2px] w-[12.5px] lg:h-[13.5px] lg:w-[15px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
