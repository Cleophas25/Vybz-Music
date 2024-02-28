import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className='flex-1 flex items-center justify-start'>
    <div
      className={`${
        isPlaying && isActive ? "animate-[spin_8s_linear_infinite]" : ""
      }  h-16 w-16 mr-4`}
    >
      <img
        src={activeSong?.image}
        alt={activeSong?.title}
        className=' h-full w-16 rounded-full object-cover'
      />
    </div>
    <div className='w-[50%]'>
      <p className='truncate text-white font-bold text-lg capitalize'>
        {activeSong?.title ? activeSong?.title : "No active Song"}
      </p>
      <p className='truncate text-gray-300 capitalize'>{activeSong?.artist}</p>
    </div>
  </div>
);

export default Track;
