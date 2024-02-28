import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaBriefcase,
  FaHome,
  FaMusic,
  FaTable,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const [isMobileNavlinksOpen, setIsMobileNavlinksOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("dashboard");
  return (
    <div className='bg-gray-100 flex'>
      <aside className='relative bg-gradient-to-br from-black to-[#121286] h-screen w-64 hidden sm:block shadow-xl'>
        <div className='p-6'>
          <Link
            to='/admin'
            className='text-white text-3xl font-semibold uppercase hover:text-gray-300 cursor-pointer'
          >
            Admin
          </Link>
        </div>
        <nav className='text-white text-base font-semibold pt-3'>
          <Link
            to='/'
            className='flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 cursor-pointer'
          >
            <FaHome className='mr-3' />
            Home
          </Link>
          <Link
            to='/admin'
            className='flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 cursor-pointer'
          >
            <FaBriefcase className='mr-3 text-white' />
            Add Songs
          </Link>
          <Link
            to='#'
            className='flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 cursor-pointer'
          >
            <FaTable className='mr-3' />
            Songs
          </Link>
          <Link
            to='#'
            className='flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 cursor-pointer'
          >
            <FaUserCircle className='mr-3' />
            Users
          </Link>
        </nav>
      </aside>

      <div className='relative w-full flex flex-col h-screen overflow-y-hidden '>
        <header className='w-full items-center justify-center bg-gradient-to-br from-black to-[#121286] py-2 px-6 hidden sm:flex shadow-md border'>
          <Link
            to='/'
            className='text-lg text-white md:text-2xl font-bold self-center'
          >
            Vybz Music
          </Link>
          <div className='relative flex justify-end ml-auto'>
            <button
              className='realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none'
              onClick={() => setIsOpen(!isOpen)}
            ></button>
            <div
              className={`${
                isOpen ? "absolute" : "hidden"
              } w-32 bg-white rounded-lg shadow-lg py-2 mt-16`}
            >
              <a
                href='#'
                className='block px-4 py-2 account-link hover:bg-gray-100'
              >
                Account
              </a>
              <a
                href='#'
                className='block px-4 py-2 account-link hover:bg-gray-100'
              >
                Sign Out
              </a>
            </div>
          </div>
        </header>

        {/* Mobile Header & Nav  */}
        <header className='w-full bg-gradient-to-br from-black to-[#121286] py-5 px-6 sm:hidden'>
          <div className='flex items-center justify-between'>
            <Link
              to='/adminDashboard/stats'
              className='text-white text-3xl font-semibold uppercase hover:text-gray-300'
              onClick={() => setIsMobileNavlinksOpen(false)}
            >
              Admin
            </Link>
            <button className='text-white text-3xl focus:outline-none cursor-pointer'>
              <FaBars
                className='z-50 text-white'
                onClick={() => setIsMobileNavlinksOpen(!isMobileNavlinksOpen)}
              />
            </button>
          </div>
          <nav
            className={`${
              isMobileNavlinksOpen
                ? "translate-x-0 ease-out"
                : "translate-x-full ease-in"
            } fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-gradient-to-br from-black to-[#121286] border-l-2 z-40 mb-2`}
          >
            <FaTimes
              className='text-white text-2xl focus:outline-none cursor-pointer'
              onClick={() => setIsMobileNavlinksOpen(!isMobileNavlinksOpen)}
            />
            <Link
              to='/'
              className='flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item'
              onClick={() => setIsMobileNavlinksOpen(false)}
            >
              <FaHome className='mr-3' />
              Home
            </Link>

            <Link
              to='/admin'
              className='flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item'
              onClick={() => setIsMobileNavlinksOpen(false)}
            >
              <FaBriefcase className='mr-3' />
              Add Songs
            </Link>
            <Link
              to='#'
              className='flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item'
              onClick={() => setIsMobileNavlinksOpen(false)}
            >
              <FaMusic className='mr-3' />
              Songs
            </Link>
            <Link
              to='#'
              className='flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item'
              onClick={() => setIsMobileNavlinksOpen(false)}
            >
              <FaUserCircle className='mr-3' />
              Users
            </Link>
          </nav>
        </header>

        <div className='w-full h-screen overflow-x-hidden border-t flex flex-col'>
          <main className='w-full flex-grow p-6'>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
