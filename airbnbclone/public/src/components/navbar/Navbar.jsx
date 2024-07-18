import React from "react";
import AirBnbLogo from "../../svg/airbnb-logo";
import {FiGlobe} from "react-icons/fi"
import {RxHamburgerMenu} from "react-icons/rx"
import Image from "next/image";

const Navbar = () => {
  return (
    <header className=" flex flex-col justify-center w-full transition-all duration-300 h-20 border-b-gray-200 ">
      <div className=" flex items-center justify-between px-20">
        <div className=" flex-grow basis-0">
          <div className=" w-max cursor-pointer">
            <AirBnbLogo />
          </div>
        </div>
        <div className=" flex-grow basis-0">
          <ul className=" flex items-center justify-end gap-6 font-medium ">
            <li className=" cursor-pointer">
              <span>AirBnb Your Home</span>
            </li>
            <li className=" cursor-pointer">
               <FiGlobe />
            </li>
            <li className=" flex cursor-pointer items-center border-gray-300 border py-2 px-3 rounded-full hover:shadow-xl transition-all duration-500 gap-2">
               <RxHamburgerMenu />
               <span>
                    <Image src= "/empty-profile.png"
                    alt="profile"
                    height={30}
                    width={30} />
               </span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
