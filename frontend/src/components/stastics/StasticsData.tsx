import React, { useEffect, useState } from 'react'
import {statisticsSliceActions} from "../../store/stasticsReducer"
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../../store/Store"
import {StatisticsWrapper} from "../styles/StasticsDataStyle"
interface ArtistCount {
  totalArtists: number;
}

interface AlbumCount {
  totalAlbum: number;
}

interface GenreCount {
  totalGeners: number;
}

interface StatisticsData {
  totalSongs: number;
  totalArtists: ArtistCount[];
  totalAlbums: AlbumCount[];
  totalGenres: GenreCount[];
}

interface GenreCounts {
  _id: string;
  count: number;
}

interface CountTotalSongInAlbum {
  _id: string;
  totalSongsinAlbum: number;
}

interface CountTotalSongInArtist {
  _id: string;
  totalSongsinArtist: number;
}

interface CountTotalAlbumInArtist {
  _id: string;
  totalAlbuminArtist: number;
}

interface ResponseData {
  countTotalSonginAlbum: CountTotalSongInAlbum[];
  countTotalSonginArtist: CountTotalSongInArtist[];
  countTotalAlbuminArtist: CountTotalAlbumInArtist[];
}
const StasticsData = () => {
  const [totalStatus,setTotalStatus]=useState<StatisticsData|null>(null)
  const [genreStats,setGenreStats]=useState<GenreCounts[]>([])
  const [artistStats,setArtistStats]=useState<ResponseData|null>(null)
 
  const {statisticsData,loading,error}=useSelector((state:RootState)=>state.stastics)
  const {genreCounts}=useSelector((state:RootState)=>state.stastics)
  const {responseData}=useSelector((state:RootState)=>state.stastics)
  const dispatch=useDispatch<AppDispatch>()
  useEffect(() => {
    console.log("Fetching stastics...");
    dispatch(statisticsSliceActions.fetchStatisticsStart());
  }, [dispatch]);

  useEffect(() => {
    if (statisticsData&&genreCounts.length>0&&responseData) {
      console.log("Fetched Stastics: ", {statisticsData,genreCounts,responseData});
      setTotalStatus(statisticsData);
      setGenreStats(genreCounts);
      setArtistStats(responseData);
    } else {
      console.log("No songs available");
    }
  }, [statisticsData,genreCounts,responseData]);
  // console.log(totalStatus)
  // console.log(genreStats)
  // console.log(artistStats)


   
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;
  return (
    <StatisticsWrapper>
    <div className="stat-container">
      <h2>Total Statistics</h2>
      <p>Total Songs: {totalStatus?.totalSongs}</p>
      <p>Total Artists: {totalStatus?.totalArtists.map((artist)=>(<span>{artist.totalArtists}</span>))}</p>
      <p>Total Albums: {totalStatus?.totalAlbums.map((album)=>(<span>{album.totalAlbum}</span>))}</p>
      <p>Total Genres: {totalStatus?.totalGenres.map((genre)=>(<span>{genre.totalGeners}</span>))}</p>
     
    </div>

    <div className="stat-container">
      <h2>Songs by Genre</h2>
      <table>
        <thead>
          <tr>
            <th>Genre</th>
            <th>Number of Songs</th>
          </tr>
        </thead>
        <tbody>
        
            {genreStats.map((gener)=>(
              <tr>  <td>{gener._id}</td>
            <td>{gener.count}</td></tr>
             
            ))}
           
          
        </tbody>
      </table>
    </div>

    <div className="stat-container">
      <h2>Artist Statistics</h2>
      <table>
        <thead>
          <tr>
            <th>Artist</th>
            <th>Number of Songs</th>
            <th>Number of Albums</th>
          </tr>
        </thead>
        <tbody>
  {artistStats?.countTotalSonginArtist.map((artist) => {
    // Find the album count corresponding to the current artist
    const artistAlbum = artistStats.countTotalAlbuminArtist.find(
      (album) => album._id === artist._id
    );

    return (
      <tr key={artist._id}>
        <td>{artist._id}</td>
        <td>{artist.totalSongsinArtist}</td>
        <td>{artistAlbum ? artistAlbum.totalAlbuminArtist : 'No data'}</td>
      </tr>
    );
  })}
</tbody>
      </table>
    </div>

    <div className="stat-container">
      <h2>Songs by Album</h2>
      <table>
        <thead>
          <tr>
            <th>Album</th>
            <th>Number of Songs</th>
          </tr>
        </thead>
        <tbody>
       
            {artistStats?.countTotalSonginAlbum.map((artistalbum)=>(
              <tr> 
              <td>{artistalbum._id}</td>
            <td>{artistalbum.totalSongsinAlbum}</td>
              </tr>
            ))}
           
       
          
        </tbody>
      </table>
    </div>
   
  </StatisticsWrapper>
  )
}

export default StasticsData