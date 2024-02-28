import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { SongCard } from '../components';
import useFirebaseData from '../components/FetchData';

const CountryTracks = () => {
  const { data } = useFirebaseData('songs')
  const { activeSong, isPlaying } = useSelector((state) => state.player);
const divRef = useRef(null);
useEffect(() => {
  divRef.current.scrollIntoView({ behavior: "smooth" });
});
  return (
    <div ref={divRef} className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Trending
      </h2>

      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {data?.map((song, i) => (
          <SongCard
            key={song.image}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryTracks;
