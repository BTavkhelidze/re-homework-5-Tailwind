import {
  smartphone,
  tablet,
  smartTv,
  laptops,
  vrHeadsets,
  gamingConsoles,
} from '../../assets';

const Devices = () => {
  return (
    <div className='pt-[80px] lg:pt-[120px] 2xl:pt-[150px]'>
      {' '}
      <div className='flex  flex-col '>
        <div className='flex  flex-col 2xl:gap-[14px] lg:gap-[10px]'>
          <h3 className='2xl:text-[38px] lg:text-12 text-[24px] leading-[36px] 2xl:leading-[57px] lg:leading-[42px] text-white  '>
            We Provide you streaming experience across various devices.
          </h3>
          <p className='text-[#999999] 2xl:text-[18px] 2xl:leading-[27px] lg:text-[16px] lg:leading-6 text-[14px] leading-[21px]'>
            With StreamVibe, you can enjoy your favorite movies and TV shows
            anytime, anywhere. Our platform is designed to be compatible with a
            wide range of devices, ensuring that you never miss a moment of
            entertainment.
          </p>
        </div>
        <div className='mt-[40px] lg:mt-[60px] 2xl:mt:[80px] grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-[20px] 2xl:gap-[30px]'>
          <div className='w-full flex flex-col bg-[#0f0f0f] text-white 2xl:p-[50px] lg:p-10 p-[24px] gap-[20px]  2xl:gap-[30px] lg:gap-[24px] 2xl:rounded-xl lg:rounded-[10px] rounded-lg border-[1px] border-[#1f1f1f]'>
            <div className='flex items-center  gap-[10px]  2xl:gap-4 lg:gap-3'>
              <div className='2xl:w-[72px] 2xl:h-[72px] lg:w-[58px] lg:h-[58px] w-[44px] h-[44px] flex justify-center items-center bg-[#141414] 2xl:rounded-xl lg:rounded-[10px] rounded-lg border-[1px] border-[#1f1f1f]  '>
                <img
                  src={smartphone}
                  alt='spartphone'
                  className='2xl:w-[19.6px] 2xl:h-[36px] lg:w-[14.7px] lg:h-[27px] w-[11.8px] h-[21.6px] '
                />
              </div>
              <span className='text-[18px] leading-[27px] lg:text-[20px] lg:leading-[30px]  2xl:text-2xl 2xl:leading-[36px] font-[600] '>
                Smartphones
              </span>
            </div>
            <p className='text-[14px] leading-[21px]  lg:text-[16px] lg:leading-[24px] 2xl:text-[18px] 2xl:leading-[27px] font-[400]'>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className='w-full flex flex-col bg-[#0f0f0f] text-white 2xl:p-[50px] lg:p-10 p-[24px] gap-[20px]  2xl:gap-[30px] lg:gap-[24px] 2xl:rounded-xl lg:rounded-[10px] rounded-lg border-[1px] border-[#1f1f1f]'>
            <div className='flex items-center  gap-[10px]  2xl:gap-4 lg:gap-3'>
              <div className='2xl:w-[72px] 2xl:h-[72px] lg:w-[58px] lg:h-[58px] w-[44px] h-[44px] flex justify-center items-center bg-[#141414] 2xl:rounded-xl lg:rounded-[10px] rounded-lg border-[1px] border-[#1f1f1f]  '>
                <img
                  src={tablet}
                  alt='tablet'
                  className='2xl:w-[27.45px] 2xl:h-[36px] lg:w-[20.7px] lg:h-[27px] w-[16.5px] h-[21.6px] '
                />
              </div>
              <span className='text-[18px] leading-[27px] lg:text-[20px] lg:leading-[30px]  2xl:text-2xl 2xl:leading-[36px] font-[600] '>
                Tablet
              </span>
            </div>
            <p className='text-[14px] leading-[21px]  lg:text-[16px] lg:leading-[24px] 2xl:text-[18px] 2xl:leading-[27px] font-[400]'>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className='w-full flex flex-col bg-[#0f0f0f] text-white 2xl:p-[50px] lg:p-10 p-[24px] gap-[20px]  2xl:gap-[30px] lg:gap-[24px] 2xl:rounded-xl lg:rounded-[10px] rounded-lg border-[1px] border-[#1f1f1f]'>
            <div className='flex items-center  gap-[10px]  2xl:gap-4 lg:gap-3'>
              <div className='2xl:w-[72px] 2xl:h-[72px] lg:w-[58px] lg:h-[58px] w-[44px] h-[44px] flex justify-center items-center bg-[#141414] 2xl:rounded-xl lg:rounded-[10px] rounded-lg border-[1px] border-[#1f1f1f]  '>
                <img
                  src={smartTv}
                  alt='SmartTV-icon'
                  className='2xl:w-[34.6px] 2xl:h-[25.6px] lg:w-[25.9px] lg:h-[19.2px] w-[20.8px] h-[15.4px] '
                />
              </div>
              <span className='text-[18px] leading-[27px] lg:text-[20px] lg:leading-[30px]  2xl:text-2xl 2xl:leading-[36px] font-[600] '>
                Smart TV
              </span>
            </div>
            <p className='text-[14px] leading-[21px]  lg:text-[16px] lg:leading-[24px] 2xl:text-[18px] 2xl:leading-[27px] font-[400]'>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className='w-full flex flex-col bg-[#0f0f0f] text-white 2xl:p-[50px] lg:p-10 p-[24px] gap-[20px]  2xl:gap-[30px] lg:gap-[24px] 2xl:rounded-xl lg:rounded-[10px] rounded-lg border-[1px] border-[#1f1f1f]'>
            <div className='flex items-center  gap-[10px]  2xl:gap-4 lg:gap-3'>
              <div className='2xl:w-[72px] 2xl:h-[72px] lg:w-[58px] lg:h-[58px] w-[44px] h-[44px] flex justify-center items-center bg-[#141414] 2xl:rounded-xl lg:rounded-[10px] rounded-lg border-[1px] border-[#1f1f1f]  '>
                <img
                  src={laptops}
                  alt='laptops'
                  className='2xl:w-[36.6px] 2xl:h-[26.8px] lg:w-[27.5px] lg:h-[20.2px] w-[21.95px] h-[16.1px] '
                />
              </div>
              <span className='text-[18px] leading-[27px] lg:text-[20px] lg:leading-[30px]  2xl:text-2xl 2xl:leading-[36px] font-[600] '>
                Laptops
              </span>
            </div>
            <p className='text-[14px] leading-[21px]  lg:text-[16px] lg:leading-[24px] 2xl:text-[18px] 2xl:leading-[27px] font-[400]'>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className='w-full flex flex-col bg-[#0f0f0f] text-white 2xl:p-[50px] lg:p-10 p-[24px] gap-[20px]  2xl:gap-[30px] lg:gap-[24px] 2xl:rounded-xl lg:rounded-[10px] rounded-lg border-[1px] border-[#1f1f1f]'>
            <div className='flex items-center  gap-[10px]  2xl:gap-4 lg:gap-3'>
              <div className='2xl:w-[72px] 2xl:h-[72px] lg:w-[58px] lg:h-[58px] w-[44px] h-[44px] flex justify-center items-center bg-[#141414] 2xl:rounded-xl lg:rounded-[10px] rounded-lg border-[1px] border-[#1f1f1f]  '>
                <img
                  src={gamingConsoles}
                  alt='gamingConsoles'
                  className='2xl:w-[36px] 2xl:h-[26.4px] lg:w-[27px] lg:h-[19.8px] w-[21.6px] h-[15.85px] '
                />
              </div>
              <span className='text-[18px] leading-[27px] lg:text-[20px] lg:leading-[30px]  2xl:text-2xl 2xl:leading-[36px] font-[600] '>
                Gaming Consoles
              </span>
            </div>
            <p className='text-[14px] leading-[21px]  lg:text-[16px] lg:leading-[24px] 2xl:text-[18px] 2xl:leading-[27px] font-[400]'>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className='w-full flex flex-col bg-[#0f0f0f] text-white 2xl:p-[50px] lg:p-10 p-[24px] gap-[20px]  2xl:gap-[30px] lg:gap-[24px] 2xl:rounded-xl lg:rounded-[10px] rounded-lg border-[1px] border-[#1f1f1f]'>
            <div className='flex items-center  gap-[10px]  2xl:gap-4 lg:gap-3'>
              <div className='2xl:w-[72px] 2xl:h-[72px] lg:w-[58px] lg:h-[58px] w-[44px] h-[44px] flex justify-center items-center bg-[#141414] 2xl:rounded-xl lg:rounded-[10px] rounded-lg border-[1px] border-[#1f1f1f]  '>
                <img
                  src={vrHeadsets}
                  alt='vrHeadsets'
                  className='2xl:w-[33.6px] 2xl:h-[25.2px] lg:w-[25.2px] lg:h-[18.9px] w-[20.2px] h-[15.2px] '
                />
              </div>
              <span className='text-[18px] leading-[27px] lg:text-[20px] lg:leading-[30px]  2xl:text-2xl 2xl:leading-[36px] font-[600] '>
                VR Headsets
              </span>
            </div>
            <p className='text-[14px] leading-[21px]  lg:text-[16px] lg:leading-[24px] 2xl:text-[18px] 2xl:leading-[27px] font-[400]'>
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devices;
