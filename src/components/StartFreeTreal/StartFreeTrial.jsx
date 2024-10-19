import Button from "../Button/Button";
import bgStartTrial from "../../assets/png/BackgroundImages.png";
import bgTablet from "../../assets/png/BackgroundImg.png";

const StartFreeTrial = () => {
  return (
    <div className="2xl:mt-[150px] relative mt-[80px] lg:mt-[120px]">
      <div className="bg-startFreeTriel absolute h-full w-full">
        <img
          src={bgStartTrial}
          alt="background image"
          className="max-h-full w-full object-cover lg:hidden"
        />
        <img
          src={bgTablet}
          alt="background image"
          className="hidden h-full w-full lg:flex"
        />
      </div>
      <div className="2xl:px-[80px] 2xl:py-[100px] relative flex w-full flex-col items-center justify-between gap-[50px] px-[30px] py-[50px] lg:flex-row lg:gap-[100px] lg:px-[60px] lg:py-[80px]">
        <div className="text-center lg:text-left">
          <h5 className="2xl:text-[48px] 2xl:mb-[14px] 2xl:leading-[72px] text-[24px] font-bold leading-[36px] text-white lg:mb-[10px] lg:text-[28px] lg:leading-[42px]">
            Start your free triel today!
          </h5>
          <p className="2xl:text-[18px] 2xl:leading-[27px] text-[14px] font-normal leading-[21px] text-[#999999] lg:text-[16px] lg:leading-[24px]">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.{" "}
          </p>
        </div>
        <Button>
          <p className="cursor-pointer text-white">Start a Free Trail</p>
        </Button>
      </div>
    </div>
  );
};

export default StartFreeTrial;
