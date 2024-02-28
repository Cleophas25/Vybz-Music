import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlinePhotograph,
} from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { FaMicrophoneAlt } from "react-icons/fa";

const links = [
  { name: "Discover", to: "/", icon: HiOutlineHome },
  { name: "Trending", to: "/trending", icon: HiOutlinePhotograph },
  { name: "Top Charts", to: "/top-charts", icon: HiOutlineHashtag },
];

const NavLinks = ({ handleClick }) => (
  <div className='mt-10'>
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400'
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className='w-6 h-6 mr-2' />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className='md:flex hidden flex-col w-[240px] py-4 px-4 bg-[#191624]'>
        <h1 className=' flex gap-2 text-2xl text-cyan-500 font-bold'>
          Vybz
          <span className='flex items-center text-yellow-500'>
            Music <FaMicrophoneAlt />
          </span>
        </h1>
        <NavLinks />
      </div>

      {/* Mobile sidebar */}
      <div className='absolute md:hidden block top-2 right-3 z-50'>
        {!mobileMenuOpen ? (
          <HiOutlineMenu
            className='w-6 h-6 mr-2 text-white'
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <RiCloseLine
            className='w-6 h-6 mr-2 text-white'
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <h1 className=' flex gap-2 text-2xl text-cyan-500 font-bold'>
          Vybz
          <span className='flex items-center text-yellow-500'>
            Music <FaMicrophoneAlt />
          </span>
        </h1>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
