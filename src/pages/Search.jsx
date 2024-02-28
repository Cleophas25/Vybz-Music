import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Error, Loader, SongCard } from '../components';
import useFirebaseData from '../components/FetchData';

const Search = () => {
  const { data } = useFirebaseData("songs");
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const songs = data.filter((song) => {
    const { title, artist } = song;
    const query = searchTerm.toLowerCase();
    const songTitle = title.toLowerCase();
    const songArtist = artist.toLowerCase();

    return songTitle.includes(query) || songArtist.includes(query);
  });

  // if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;

  // if (error) return <Error />;
  if (songs.length === 0) {
    return (
      <h1 className='font-bold text-3xl text-white text-left mt-4 mb-10 capitalize'>
        no results for {searchTerm}...
      </h1>
    );
  }

  return (
    <div className='flex flex-col'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Showing results for <span className='font-black'>{searchTerm}</span>
      </h2>

      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {songs.map((song, i) => (
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

export default Search;
