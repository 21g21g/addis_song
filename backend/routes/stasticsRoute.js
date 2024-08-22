const express=require("express")
const stasticsController=require("../controllers/stasticsController")
const router=express()
// a route to get total number of songs
router.get("/numberSong",stasticsController.countSongs)

// a route to get total number of songs i a genres
router.get("/totalSongGenres",stasticsController.totalNumberofSonginGener)
// a route to get total songs in an album
router.get("/totalSonginAlbum",stasticsController.totalNumberofSonginAlbum)
// a route to get total songs in an artist
// a route to get total number of artists in an album
// router.get("/totalAlbumInArtist",stasticsController.totalNumberofArtistsAlbums)
module.exports=router

