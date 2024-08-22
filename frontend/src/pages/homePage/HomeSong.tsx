import React, { useEffect, useState } from 'react';
import landimage from "../../components/assets/music_cover.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from 'react-router-dom';
import StasticsData from '../../components/stastics/StasticsData';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/Store';
import { songSliceActions } from '../../store/songReducer';
import {HomeRapper,DropdownWrapper,DropdownButton,DropdownContent} from "../../components/styles/HomeSongStyle"

interface Song {
  artist: {
    artistImage: {
      public_id: string;
      url: string;
    };
    name: string;
    about: string;
  };
  album: {
  albumImage: {
    public_id: string;
      url: string;
  };
    name: string;
  };
  title: string[];
  genre: string;
}
const HomeSong = () => {
     
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const {songs,loading,error} =useSelector((state:RootState)=>state.song)
  const dispatch=useDispatch<AppDispatch>()
  
  const [comingSong, setComingSong] = useState<Song[]>([]);

  const handleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClick = (song: Song) => {
    navigate("/songdetail", { state: song });
  };

  const handleEdit = (song: Song) => {
    navigate("/update", { state: song });
  };

  const handleDelete = (song: any) => {
    dispatch(songSliceActions.songDeleting(song._id));
    dispatch(songSliceActions.songFetching());
  };

  useEffect(() => {
    console.log("Fetching songs...");
    dispatch(songSliceActions.songFetching());
  }, [dispatch]);

  useEffect(() => {
    if (songs.length > 0) {
      console.log("Fetched Songs: ", songs);
      setComingSong(songs);
    } else {
      console.log("No songs available");
    }
  }, [songs]);

  const handleGenre = (genre: string) => {
    const filteredSongs = songs.filter(song => song.genre === genre);
    setComingSong(filteredSongs);
    setDropdownVisible(false)

  };

  const handleShowAll = () => {
    setComingSong(songs);
    setDropdownVisible(false)

  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <HomeRapper>
      <div className='home'>
        <h1>Welcome to Song Management Website</h1>
        <img src={landimage} alt='Music Landing' />
      </div>
      <div className="carousel-container">
        <div className="carousel-header">
          <h2>Artist Albums</h2>
          <DropdownWrapper>
            <DropdownButton onClick={handleDropdown}>Filter Genre</DropdownButton>
            <DropdownContent isVisible={dropdownVisible}>
                <button onClick={() => handleShowAll()}>All</button>
                <button onClick={()=>handleGenre("Rock")}>Rock</button>
              <button onClick={()=>handleGenre("Pop")}>Pop</button>
              <button onClick={()=>handleGenre("Trap")}>Trap</button>
              <button onClick={()=>handleGenre("Jazz")}>Jazz</button>
              <button onClick={()=>handleGenre("Rap")}>Rap</button>
            </DropdownContent>
          </DropdownWrapper>
        </div>
        <Carousel responsive={responsive}>
        {comingSong.length > 0 ? (
          comingSong.map((song, index) => (
      <div key={index} className="carousel-item" onClick={() => handleClick(song)}>
        <img src={song.album.albumImage?.url}  alt={song.album.name} />
        <h3>Album:{song.album.name}</h3>
        <h4>Genre:{song.genre}</h4>
      </div>
    ))
  ) : (
    <p>There is no genre in this title</p>
  )}
          
        </Carousel>
      </div>
      <div className="section">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Artist Name</th>
              <th>Album Name</th>
              <th>Artist Photo</th>
              <th>Number of Songs</th>
              <th>Actions</th>
            </tr>
          </thead>
            {comingSong&&<>
            {comingSong.map((song, index) => (
              <tr key={index}>
                <td>{song.artist.name}</td>
                <td>{song.album.name}</td>
                <td>
                  <img src={song.album.albumImage?.url} alt="Artist" />
                </td>
                <td>{song.title.length}</td>
                <td>
                  <button className="edit" onClick={() => handleEdit(song)}>Edit</button>
                  <button onClick={()=>handleDelete(song)} className="delete">Delete</button>
                </td>
              </tr>
            ))}
          </>}
          <tbody>
          </tbody>
        </table>
      </div>
      <StasticsData />
    </HomeRapper>
  );
};

export default HomeSong;
