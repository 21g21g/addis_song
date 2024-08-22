import React from 'react'
import { useLocation } from 'react-router-dom'
import {SongDetailsWrapper} from "../../components/styles/SongDetailStyle"
const SongDetail = () => {
    const location=useLocation()
    const song=location.state 
    
  if (!song) {
    return <p>No song data available.</p>;
  }

  return (
    <SongDetailsWrapper>
        <img src={song.album.albumImage?.url}  alt={song.album.name} />
    <h2>Album:{song.album.name}</h2>
    <p>Artist: {song.artist.name}</p>
    <p>About Artist: {song.artist.about}</p>
    <h3>Song Titles:</h3>
    <ul>
      {song.title.map((t: string, i: number) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  </SongDetailsWrapper>
  )
  
}

export default SongDetail