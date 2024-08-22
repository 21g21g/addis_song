import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  
  interface StatisticsState {
    statisticsData: StatisticsData | null;
    genreCounts: GenreCounts[];
    responseData: ResponseData | null;
    loading: boolean;
    error: string | null;
  }
  
  const initialState: StatisticsState = {
    statisticsData: null,
    genreCounts: [],
    responseData: null,
    loading: false,
    error: null,
  };
  const statisticsSlice = createSlice({
    name: "statistics",
    initialState,
    reducers: {
      fetchStatisticsStart(state) {
        state.loading = true;
        state.error = null;
      },
      fetchStatisticsSuccess(state, action: PayloadAction<StatisticsData>) {
        state.statisticsData = action.payload;
        state.loading = false;
      },
      fetchGenreCountsSuccess(state, action: PayloadAction<GenreCounts[]>) {
        state.genreCounts = action.payload;
        state.loading = false;
      },
      fetchResponseDataSuccess(state, action: PayloadAction<ResponseData>) {
        state.responseData = action.payload;
        state.loading = false;
      },
      fetchStatisticsFailure(state, action: PayloadAction<string>) {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });

  export const statisticsSliceActions=statisticsSlice.actions
  export default statisticsSlice
  