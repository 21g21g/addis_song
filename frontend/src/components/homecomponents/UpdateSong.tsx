import React, { useState } from 'react'
import { songSliceActions } from '../../store/songReducer';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/Store';
import { useLocation, useNavigate } from 'react-router-dom';
import { AddsongRapper,Form } from '../styles/AddSongStyle'; 
import { toast } from 'react-toastify';
interface AlbumImage {
  public_id: string;
  url: string;
}
interface artistImage {
  public_id: string;
  url: string;
}
const UpdateSong = () => {
  const location=useLocation()
  const song=location.state
  const navigate=useNavigate()
    const [title, setTitle] = useState<string[]>(song.title);
    const [artistName, setArtistName] = useState<string>(song.artist.name);
    const [artistImage, setArtistImage] = useState<artistImage>( { public_id: song.artist.artistImage.public_id, 
    url: song.artist.artistImage.url, });
    const [artistAbout, setArtistAbout] = useState<string>(song.artist.about);
    const [albumName, setAlbumName] = useState<string>(song.album.name);
    const [albumImage, setAlbumImage] = useState<AlbumImage>(
      { public_id: song.album.albumImage.public_id,    
      url: song.album.albumImage.url, });    
      const [genre, setGenre] = useState<string>(song.genre);
    const dispatch=useDispatch<AppDispatch>()
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
        id:song._id,
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
      toast.success("you update song successfully", {
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
      dispatch(songSliceActions.songUpdating(songData));
      setTitle([''])
    setArtistName('')
    setArtistImage({public_id:'',url:''})
    setArtistAbout('')
    setAlbumName('')
    setAlbumImage({public_id:'',url:''})
    setGenre('')
      navigate("/")
    };

  return (
    <AddsongRapper>
    <Form onSubmit={handleSubmit}>
      <h1>Update Songs</h1>
      <input
        type="text"
        placeholder="Enter music names (comma-separated)"
        onChange={(e) => setTitle(e.target.value.split(',').map((t) => t.trim()))}
        value={title.join(", ")}
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
      <button type="submit">
        Update
      </button>
    </Form>
  </AddsongRapper>
  )
}

export default UpdateSong