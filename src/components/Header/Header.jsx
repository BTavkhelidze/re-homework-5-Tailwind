import headerSvg from "../../assets/svg/header.svg";
import burgeMenu from "../../assets/svg/burgerMenu.svg";

import searchIconSvg from "../../assets/svg/searchIcon.svg";
import notificationSvg from "../../assets/svg/notification.svg";

const Header = () => {
  return (
    <header className="2xl:mx-[162px] 2xl:py-6 mx-4 flex justify-between pb-[20.5px] pt-[46.5px] sm:px-10 lg:mx-20 lg:py-[18px]">
      <div className="flex items-center justify-center">
        <img src={headerSvg} alt="Logo" />
      </div>
      <div className="2xl:p-[10px] hidden items-center justify-center rounded-xl border-4 border-[#1f1f1f] bg-black p-2 lg:flex">
        <nav>
          <ul className="2xl:gap-[30px] flex items-center justify-center gap-4">
            <li className="2xl:py-[14px] 2xl:px-6 rounded-lg bg-[#1f1f1f] px-[12px] py-3 text-sm text-white">
              Home
            </li>
            <li className="text-sm text-white">Movies & Shows</li>
            <li className="text-sm text-white">Support</li>
            <li className="text-sm text-white">Subscriptions</li>
          </ul>
        </nav>
      </div>
      <div className="flex h-12 w-12 items-center justify-center bg-black lg:hidden">
        <img src={burgeMenu} alt="menu button" />
      </div>
      <div className="hidden items-center justify-center gap-[18px] lg:flex">
        <img
          src={searchIconSvg}
          alt="search icon"
          className="2xl:w-[25.5px] 2xl:h-[25.5px] h-[18px] w-[18px]"
        />
        <img
          src={notificationSvg}
          alt="notification icon"
          className="2xl:w-[23.55px] 2xl:h-[25.5px] h-[18px] w-[16.62px]"
        />
      </div>
    </header>
  );
};

export default Header;
