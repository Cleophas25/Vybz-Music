import React, { useEffect, useState } from "react";
import { db, storage} from '../firebase'
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { v4 } from 'uuid'
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";

// Create a storage reference from our storage service

export default function AddSong() {
   const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [image, setImage] = useState('');
  const [audio, setAudio] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  
  const handleImageChange = (e) => {
     if (e.target.files[0]) {
       setImage(e.target.files[0]);
     }
   };

   const handleAudioChange = (e) => {
     if (e.target.files[0]) {
       setAudio(e.target.files[0]);
      }
   };
   
   async function addNewSong(ev) {
      ev.preventDefault();
      if (!title || !artist || !image || !audio) {
        return toast.error("Please enter all values!");
      }
      setIsLoading(true);
      try {
        // Upload image file to Firebase Storage
        const imageRef = ref(storage, `images/${image.name + v4()}`);
        await uploadBytes(imageRef, image);
        const imgUrl = await getDownloadURL(imageRef);

        // Upload audio file to Firebase Storage
        const audioRef = ref(storage, `audios/${audio.name + v4()}`);
        await uploadBytes(audioRef, audio);
        const audioUrl = await getDownloadURL(audioRef);

        // Save song details to Firebase Realtime Database
        const songData = {
          id: v4(),
          title: title,
          artist: artist,
          image: imgUrl,
          audio: audioUrl,
        };
        await addDoc(collection(db, 'songs'), songData);
        setIsLoading(false);
        toast.success("Song Uploaded successfully!");

        setTitle('')
        setArtist('')
        setImage('')
        setImage('')
      } catch (error) {
      setIsLoading(false);
      console.log(error)
      toast.error(`${error.message}!`);
    }
  }

  return (
    <div>
      <h3 className='text-center text-3xl font-semibold'>Add Songs</h3>
      <form
        onSubmit={addNewSong}
        className='max-w-5xl border-t-4 border-[#0a0a23] bg-white rounded-md shadow-md py-8 px-10 my-12 mx-auto transition-all ease-in-out hover:shadow-lg'
      >
        <input
          type='text'
          placeholder={"Song Title"}
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          className='w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none mb-4'
          required
        />
        <input
          type='text'
          placeholder={"Artist"}
          value={artist}
          onChange={(ev) => setArtist(ev.target.value)}
          className='w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none mb-4'
          required
        />
        <div>
          <label htmlFor='image'>Select Cover Image:</label>
          <input
            id='imgUpload'
            accept='image/*'
            type='file'
            onChange={handleImageChange}
            className='w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none my-2'
            required
          />
        </div>
        <div>
          <label htmlFor='image'>Select Audio File:</label>
          <input
            id='songUpload'
            accept='audio/*'
            type='file'
            onChange={handleAudioChange}
            className='w-full py-2 px-3 rounded-md border border-gray-300 focus:outline-none my-2'
            required
          />
        </div>

        <button
          className={`${
            isLoading
              ? "bg-gray-400"
              : "bg-[#0a0a23] text-white hover:bg-gray-900 hover:shadow-lg "
          } cursor-pointer border-transparent rounded-md tracking-wider py-1 p-3 shadow-sm transition-all ease-in-out capitalize inline-block w-full mt-4`}
          disabled={isLoading}
        >
          {isLoading ? "Please wait..." : "Add Song"}
        </button>
      </form>
    </div>
  );
}
