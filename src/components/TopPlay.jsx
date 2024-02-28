import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

import 'swiper/css';
import 'swiper/css/free-mode';
import useFirebaseData from './FetchData';

const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-start sm:items-center">
      <img className="w-10 h-10 mt-2 sm:w-20 sm:h-20 rounded-lg object-cover" src={song?.image} alt={song?.title} />
      <div className="flex-1 flex flex-col justify-center mx-3">
          <p className="text-xl font-bold text-white">
            {song?.title}
          </p>
          <p className="text-base text-gray-300 mt-1">
            {song?.artist}
          </p>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
);

const TopPlay = () => {
  const { data } = useFirebaseData("songs");
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const divRef = useRef(null);

  // useEffect(() => {
  //   divRef.current.scrollIntoView({ behavior: 'smooth' });
  // });

  const topPlays = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div
      ref={divRef}
      className='xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[420px] max-w-full flex flex-col'
    >
      <div className='w-full flex flex-col'>
        <div className='flex flex-row justify-between items-center'>
          <h2 className='text-white font-bold text-2xl'>Top Charts</h2>
        </div>

        <div className='mt-4 flex flex-col gap-1'>
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song.id}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </div>

      <div className='w-full flex flex-col mt-8'>
        <div className='flex flex-row justify-between items-center'>
          <h2 className='text-white font-bold text-2xl'>Top Artists</h2>
        </div>

        <Swiper
          slidesPerView='auto'
          spaceBetween={15}
          freeMode={true}
          centeredSlides
          centeredSlidesBounds
          className='mt-4'
        >
          {topPlays?.slice(0, 5).map((artist) => (
            <SwiperSlide
              key={artist?.id}
              style={{ width: "25%", height: "25%" }}
              className='shadow-lg rounded-full animate-slideright border border-white overflow-hidden'
            >
              <img
                src={artist?.image}
                alt='Name'
                className='object-contain rounded-full w-full h-fit'
                />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
