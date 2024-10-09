import AbstractDesign from '../../assets/svg/AbstractDesign.svg';
import Button from '../Button/Button';
import watchingNow from '../../assets/svg/watchingNow.svg';
const Greeting = () => {
  return (
    <section className='flex flex-col w-[100%] justify-center items-center pt-[48px]  lg:pt-[48px] 2xl:pt-[75px] '>
      <div className='mb-[50px] lg:mb-[100px] 2xl:mb-[131px]'>
        <img
          src={AbstractDesign}
          alt='AbstractDesign'
          className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] 2xl:w-[470px] 2xl:h-[470px]'
        />
      </div>
      <div className='flex flex-col items-center '>
        <div className='2xl:w-[1096px] lg::w-[1140px]  flex flex-col items-center text-center mb-[30px] lg:mb-10 2xl:mb-[50px] gap-[10px] 2xl:gap-[14px]'>
          <h2 className='text-[28px] lg:text-[48px] 2xl:text-[58px] text-[#ffff]  font-bold leading-[42px] lg:leading-[72px] 2xl:leading-[87px]'>
            The Best Streaming Experience
          </h2>
          <p
            className=' text-[14px] leading-[21px] 2xl:text-[18px] text-[#999999] text-center 
2xl:leading-[27px] font-normal'
          >
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
        </div>
        <Button>
          <img
            src={watchingNow}
            alt='watch now'
            className='w-[15.3px] h-[16.45px] 2xl:w-[17.9px] 2xl:h-s[19.2px]'
          />
          <span className='text-[#ffffff]'>Start Watching Now</span>
        </Button>
      </div>
    </section>
  );
};

export default Greeting;
