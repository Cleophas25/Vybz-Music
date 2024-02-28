import React from "react";
import PlayPause from "./PlayPause";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className='flex flex-col w-[120px] sm:w-[180px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm rounded-lg'>
      <div className='relative w-full h-20 sm:h-32 group cursor-pointer'>
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img
          alt='song_img'
          src={song.image}
          className='w-full h-full rounded-lg object-cover'
        />
      </div>

      <div className='mt-4 flex flex-col'>
        <p className='font-semibold text-lg text-white truncate'>
          {song.title}
        </p>
        <p className='text-sm truncate text-gray-300 mt-1'>{song.artist}</p>
      </div>
    </div>
  );
};

export default SongCard;
