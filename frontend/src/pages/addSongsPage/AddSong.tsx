import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/Store';
import { songSliceActions } from '../../store/songReducer';
import axios from 'axios';
import {AddsongRapper,Form} from "../../components/styles/AddSongStyle"
import { toast } from 'react-toastify';

interface AlbumImage {
  public_id: string;
  url: string;
}
interface ArtistImage {
  public_id: string;
  url: string;
}
const AddSong = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState<string[]>(['']);
  const [artistName, setArtistName] = useState<string>('');
  const [artistImage, setArtistImage] = useState<ArtistImage>({ public_id: '', url: '' });
  const [artistAbout, setArtistAbout] = useState<string>('');
  const [albumName, setAlbumName] = useState<string>('');
  const [albumImage, setAlbumImage] = useState<AlbumImage>({ public_id: '', url: '' });
  const [genre, setGenre] = useState<string>('Rock');

  const uploadImageToCloudinary = async (file: File, preset: string) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset); 
    formData.append('cloud_name', 'dnfl1adwg'); 

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dnfl1adwg/image/upload', formData);
      return response.data;
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      return null;
    }
  };

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>, setImage: (image: { public_id: string, url: string }) => void, preset: string) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageData = await uploadImageToCloudinary(file, preset);
      if (imageData) {
        setImage({ public_id: imageData.public_id, url: imageData.secure_url });
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const songData = {
      title,
      artist: {
        name: artistName,
        artistImage: artistImage,
        about: artistAbout,
      },
      album: {
        name: albumName,
        albumImage: albumImage,
      },
      genre,
    };
    toast.success("you add song successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log(songData);

    // Dispatch the action to create a song
    dispatch(songSliceActions.songCreating(songData));
    setTitle([''])
    setArtistName('')
    setArtistImage({public_id:'',url:''})
    setArtistAbout('')
    setAlbumName('')
    setAlbumImage({public_id:'',url:''})
    setGenre('')
  };

  return (
    <AddsongRapper>
      <Form onSubmit={handleSubmit}>
        <h1>Add Songs</h1>
        <input
          type="text"
          placeholder="Enter music names (comma-separated)"
          onChange={(e) => setTitle(e.target.value.split(',').map((t) => t.trim()))}
          value={title.join(', ')}
        />
        <input
          type="text"
          placeholder="Enter artist name"
          onChange={(e) => setArtistName(e.target.value)}
          value={artistName}
        />
        <input
          type="file"
          name="artistImage"
          onChange={(e) => handleImageChange(e, setArtistImage, 'image1')}
        />
        <textarea
          placeholder="About the artist"
          onChange={(e) => setArtistAbout(e.target.value)}
          value={artistAbout}
        />
        <input
          type="text"
          placeholder="Enter album name"
          onChange={(e) => setAlbumName(e.target.value)}
          value={albumName}
        />
        <input
          type="file"
          name="albumImage"
          onChange={(e) => handleImageChange(e, setAlbumImage, 'image2')}
        />
        <select
          onChange={(e) => setGenre(e.target.value)}
          value={genre}
        >
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
          <option value="Trap">Trap</option>
          <option value="Jazz">Jazz</option>
          <option value="Rap">Rap</option>
        </select>
        <button type="submit">Add Song</button>
      </Form>
    </AddsongRapper>
  );
}

export default AddSong