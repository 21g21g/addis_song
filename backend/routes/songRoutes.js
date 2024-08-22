const express=require("express")
const songController=require("../controllers/songController")


const router=express.Router()

//a route to create songs
router.post("/createSongs",songController.createSongs)
// a route get all songs
router.get("/getAllsong",songController.getAllsongs)
// to create to get a song by id
router.get("/:id",songController.getSinglesong)
// a route to update songs
router.put("/:id",songController.updateSingleSong)
// a route inorder to delete a song
router.delete("/:id",songController.deleteSong)

module.exports=router