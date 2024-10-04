import headerSvg from '../../assets/svg/header.svg';
import burgeMenu from '../../assets/svg/burgerMenu.svg';

import searchIconSvg from '../../assets/svg/searchIcon.svg';
import notificationSvg from '../../assets/svg/notification.svg';

const Header = () => {
  return (
    <header className=' flex justify-between mx-4 mt-[46.5px] mb-[20.5px] sm:mx-10  lg:mx-20 lg:my-[18px] 2xl:mx-[162px] 2xl:my-6 '>
      <div className='flex justify-center items-center'>
        <img src={headerSvg} alt='Logo' />
      </div>
      <div
        className='hidden lg:flex justify-center items-center bg-black p-2 2xl:p-[10px] border-4 rounded-xl border-[#1f1f1f]
      '
      >
        <nav>
          <ul className='flex gap-4 2xl:gap-[30px] justify-center items-center'>
            <li className='text-sm text-white py-3 px-[12px] bg-[#1f1f1f] rounded-lg 2xl:py-[14px] 2xl:px-6'>
              Home
            </li>
            <li className='text-sm text-white'>Movies & Shows</li>
            <li className='text-sm text-white'>Support</li>
            <li className='text-sm text-white'>Subscriptions</li>
          </ul>
        </nav>
      </div>
      <div className='w-12 h-12 bg-black flex justify-center items-center lg:hidden'>
        <img src={burgeMenu} alt='menu button' />
      </div>
      <div className='hidden lg:flex gap-[18px] justify-center items-center'>
        <img
          src={searchIconSvg}
          alt='search icon'
          className='w-[18px] h-[18px] 2xl:w-[25.5px] 2xl:h-[25.5px]'
        />
        <img
          src={notificationSvg}
          alt='notification icon'
          className='w-[16.62px] h-[18px] 2xl:w-[23.55px] 2xl:h-[25.5px]'
        />
      </div>
    </header>
  );
};

export default Header;
