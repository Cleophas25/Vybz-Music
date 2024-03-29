import React from 'react'
import Sidebar from './Sidebar'
import TopPlay from './TopPlay'
import MusicPlayer from './MusicPlayer'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Searchbar from './Searchbar'

const Layout = () => {
    const { activeSong } = useSelector((state) => state.player);
  return (
    <div className='relative flex'>
      <Sidebar />
      <div className='flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]'>
        <div className='px-6 h-[calc(100vh)] overflow-y-scroll hide-scrollba flex xl:flex-row flex-col-reverse'>
          <div className='flex-1 h-fit pb-40'>
          <Searchbar/>
            <Outlet />
          </div>
          <div className='xl:sticky relative top-0 h-fit py-4'>
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className='absolute h-28 bottom-0 left-0 right-0 flex bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10'>
          <MusicPlayer />
        </div>
      )}
    </div>
  );
}

export default Layout