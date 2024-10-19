import Button from "../Button/Button";

const Subscription = () => {
  return (
    <div className="2xl:pt-[150px] pt-[80px] lg:pt-[120px]">
      <div className="2xl:gap-[100px] flex flex-col gap-[20px] lg:flex-row lg:justify-between lg:gap-[80px]">
        <div className="2xl:gap-[14px] flex flex-col gap-[10px]">
          <h3 className="2xl:text-[38px] 2xl:leading-[57px] text-[24px] leading-[36px] text-white lg:text-[28px] lg:leading-[42px]">
            Explore our wide variety of categories
          </h3>
          <p className="2xl:mt-[14px] 2xl:text-[18px] 2xl:leading-[27px] mt-[10px] w-full text-[14px] font-[400] leading-[21px] text-[#999999] lg:max-w-[1010px] lg:text-[16px] lg:leading-6">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div className="flex items-center self-start bg-[#0f0f0f] lg:justify-center lg:self-center">
          <div className="2xl:rounded-[10px] 2xl:p-[10px] flex max-w-[205px] self-start rounded-[8px] border border-[#1f1f1f] p-[8px]">
            <p className="2xl:px-[24px] 2xl:py-[14px] 2xl:text-[18px] 2xl:leading-[27px] rounded-[6px] bg-[#1f1f1f] px-[20px] py-[12px] text-[14px] leading-[21px] text-white">
              Monthly
            </p>
            <p className="2xl:px-[24px] 2xl:py-[14px] 2xl:text-[18px] 2xl:leading-[27px] px-[20px] py-[12px] text-[14px] leading-[21px] text-[#999999]">
              Yearly
            </p>
          </div>
        </div>
      </div>

      <div className="2xl:mt-[80px] 2xl:gap-[30px] mt-[40px] flex flex-col gap-[20px] lg:mt-[60px] lg:flex-row">
        <div className="2xl:p-[50px] flex flex-col gap-[20px] rounded-[10px] border border-[#1f1f1f] bg-[#1f1f1f] p-[24px] lg:p-[40px]">
          <div>
            <h4 className="2xl:leading-36px 2xl:text-[24px] text-[18px] leading-[27px] text-white lg:text-[20px] lg:leading-[30px]">
              Basic Plan
            </h4>
            <p className="2xl:mt-[16px] 2xl:text-[18px] 2xl:leading-[27px] mt-[10px] text-[14px] leading-[21px] text-[#999999] lg:mt-[12px] lg:text-[16px] lg:leading-[24px]">
              Enjoy an extensive library of movies and shows, featuring a range
              of content, including recently released titles.
            </p>
            <p className="2xl:mt-[50px] 2xl:text-[40px] 2xl:leading-[30px] mt-[30px] text-[24px] leading-[17.52px] text-white lg:mt-[40px] lg:text-[30px] lg:leading-[21.9px]">
              $9.99{" "}
              <span className="2xl:text-[18px] 2xl:leading-[13.2px] text-[14px] leading-[10.22px] text-[#999999] lg:text-[16px] lg:leading-[11.7px]">
                /month
              </span>
            </p>
          </div>

          <div className="2xl:mt-[50px] 2xl:gap-[20px] mt-[30px] flex gap-[12px] lg:mt-[40px]">
            <p className="2xl:px-[35px] 2xl:py-[18px] 2xl:text-[18px] 2xl:leading-[27px] rounded-[6px] border-[#1f1f1f] bg-[#141414] px-[25.5px] py-[14px] text-[14px] leading-[21px] text-white lg:px-[31px]">
              Start Free Trial
            </p>
            <Button>
              <p className="cursor-pointer text-white">Choose Plan</p>
            </Button>
          </div>
        </div>
        <div className="2xl:p-[50px] flex flex-col gap-[20px] rounded-[10px] border border-[#1f1f1f] bg-[#1f1f1f] p-[24px] lg:p-[40px]">
          <div>
            <h4 className="2xl:leading-36px 2xl:text-[24px] text-[18px] leading-[27px] text-white lg:text-[20px] lg:leading-[30px]">
              Basic Plan
            </h4>
            <p className="2xl:mt-[16px] 2xl:text-[18px] 2xl:leading-[27px] mt-[10px] text-[14px] leading-[21px] text-[#999999] lg:mt-[12px] lg:text-[16px] lg:leading-[24px]">
              Enjoy an extensive library of movies and shows, featuring a range
              of content, including recently released titles.
            </p>
            <p className="2xl:mt-[50px] 2xl:text-[40px] 2xl:leading-[30px] mt-[30px] text-[24px] leading-[17.52px] text-white lg:mt-[40px] lg:text-[30px] lg:leading-[21.9px]">
              $9.99{" "}
              <span className="2xl:text-[18px] 2xl:leading-[13.2px] text-[14px] leading-[10.22px] text-[#999999] lg:text-[16px] lg:leading-[11.7px]">
                /month
              </span>
            </p>
          </div>

          <div className="2xl:mt-[50px] 2xl:gap-[20px] mt-[30px] flex gap-[12px] lg:mt-[40px]">
            <p className="2xl:px-[35px] 2xl:py-[18px] 2xl:text-[18px] 2xl:leading-[27px] rounded-[6px] border-[#1f1f1f] bg-[#141414] px-[25.5px] py-[14px] text-[14px] leading-[21px] text-white lg:px-[31px]">
              Start Free Trial
            </p>
            <Button>
              <p className="cursor-pointer text-white">Choose Plan</p>
            </Button>
          </div>
        </div>
        <div className="2xl:p-[50px] flex flex-col gap-[20px] rounded-[10px] border border-[#1f1f1f] bg-[#1f1f1f] p-[24px] lg:p-[40px]">
          <div>
            <h4 className="2xl:leading-36px 2xl:text-[24px] text-[18px] leading-[27px] text-white lg:text-[20px] lg:leading-[30px]">
              Basic Plan
            </h4>
            <p className="2xl:mt-[16px] 2xl:text-[18px] 2xl:leading-[27px] mt-[10px] text-[14px] leading-[21px] text-[#999999] lg:mt-[12px] lg:text-[16px] lg:leading-[24px]">
              Enjoy an extensive library of movies and shows, featuring a range
              of content, including recently released titles.
            </p>
            <p className="2xl:mt-[50px] 2xl:text-[40px] 2xl:leading-[30px] mt-[30px] text-[24px] leading-[17.52px] text-white lg:mt-[40px] lg:text-[30px] lg:leading-[21.9px]">
              $9.99{" "}
              <span className="2xl:text-[18px] 2xl:leading-[13.2px] text-[14px] leading-[10.22px] text-[#999999] lg:text-[16px] lg:leading-[11.7px]">
                /month
              </span>
            </p>
          </div>

          <div className="2xl:mt-[50px] 2xl:gap-[20px] mt-[30px] flex gap-[12px] lg:mt-[40px]">
            <p className="2xl:px-[35px] 2xl:py-[18px] 2xl:text-[18px] 2xl:leading-[27px] rounded-[6px] border-[#1f1f1f] bg-[#141414] px-[25.5px] py-[14px] text-[14px] leading-[21px] text-white lg:px-[31px]">
              Start Free Trial
            </p>
            <Button>
              <p className="cursor-pointer text-white">Choose Plan</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
