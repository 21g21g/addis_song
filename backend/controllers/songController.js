const Songs=require("../models/songs");
const cloudinary=require("../utils/cloudinary")
exports.createSongs = async (req, res) => {
    console.log("Request Body:", req.body); // Log the body to debug

    const { title, artist, album, genre } = req.body;

    try {
        // Upload artist image to Cloudinary
        let resultArtistImage = null;
        if (artist.artistImage && typeof artist.artistImage === 'object') {
            // Extract base64 string from the object or handle the file accordingly
            const { url, public_id } = artist.artistImage;

            // If the object already contains a URL, use it directly.
            if (url) {
                resultArtistImage = { public_id, url };
            } else {
                // If it's a file or base64 string, upload it
                resultArtistImage = await cloudinary.uploader.upload(artist.artistImage.path, {
                    folder: "artistImage"
                });
            }
        }

        // Upload album image to Cloudinary
        let resultAlbumImage = null;
        if (album.albumImage && typeof album.albumImage === 'object') {
            const { url, public_id } = album.albumImage;

            if (url) {
                resultAlbumImage = { public_id, url };
            } else {
                resultAlbumImage = await cloudinary.uploader.upload(album.albumImage.path, {
                    folder: "albumImage"
                });
            }
        }

        // Create new song document
        const song = new Songs({
            title,
            artist: {
                name: artist.name,
                about: artist.about,
                artistImage: resultArtistImage
                    ? {
                          public_id: resultArtistImage.public_id,
                          url: resultArtistImage.secure_url || resultArtistImage.url,
                      }
                    : {},
            },
            album: {
                name: album.name,
                albumImage: resultAlbumImage
                    ? {
                          public_id: resultAlbumImage.public_id,
                          url: resultAlbumImage.secure_url || resultAlbumImage.url,
                      }
                    : {},
            },
            genre,
        });

        // Save the song to the database
        await song.save();
        res.status(201).json(song);
    } catch (error) {
        console.error('Error creating song:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
exports.getAllsongs=async (req,res)=>{
    try{
        const allSongs=await Songs.find()
        res.status(200).json(allSongs)
        
    //tommorow i will finish the backend part image upload cloudinary using
    }catch(error){
        console.log(error)
        res.status(500).json({message:"server error"})
    }
}
exports.getSinglesong=async(req,res)=>{
    const {id}=req.params


    try{

        const getsingleSong=await Songs.findById(id)
        if(!getsingleSong){
            res.status(400).json({message:"song is not found"})

        }
        res.status(200).json(getsingleSong)

    }catch(error){
        console.log(error)
        res.status(500).json({message:"server error"})
    }
}
exports.deleteSong=async(req,res)=>{
    const {id}=req.params
    try{

  const song= await Songs.findByIdAndDelete(id)
  if(!song){
    res.status(400).json({message:"song is not found"})
  }
    res.status(200).json({message:"you delete the song successfully"})

    }
    catch(error){
        console.log(error)
        res.status(500).json({message:"internal server error"})
    }

}
exports.updateSingleSong = async (req, res) => {
    const { id } = req.params;
    const { title, artist, album, genre } = req.body;

    try {
        // Initialize variables for the artist and album images
        let resultArtistImage = null;
        let resultAlbumImage = null;

        if (artist.artistImage) {
            if (typeof artist.artistImage === 'object' && artist.artistImage.url) {
                // Use existing URL
                resultArtistImage = artist.artistImage;
            } else {
                // Upload new image
                resultArtistImage = await cloudinary.uploader.upload(artist.artistImage.path || artist.artistImage, {
                    folder: "artistImage"
                });
            }
        }

        if (album.albumImage) {
            if (typeof album.albumImage === 'object' && album.albumImage.url) {
                // Use existing URL
                resultAlbumImage = album.albumImage;
            } else {
                // Upload new image
                resultAlbumImage = await cloudinary.uploader.upload(album.albumImage.path || album.albumImage, {
                    folder: "albumImage"
                });
            }
        }

        // Update the song in the database
        const updateSongs = await Songs.findByIdAndUpdate(
            id,
            {
                title,
                artist: {
                    name: artist.name,
                    about: artist.about,
                    artistImage: resultArtistImage
                        ? {
                              public_id: resultArtistImage.public_id,
                              url: resultArtistImage.secure_url || resultArtistImage.url,
                          }
                        : undefined,
                },
                album: {
                    name: album.name,
                    albumImage: resultAlbumImage
                        ? {
                              public_id: resultAlbumImage.public_id,
                              url: resultAlbumImage.secure_url || resultAlbumImage.url,
                          }
                        : undefined,
                },
                genre,
            },
            { new: true }
        );

        if (!updateSongs) {
            return res.status(404).json({ message: "Song not found" });
        }

        res.status(200).json(updateSongs);
    } catch (error) {
        console.error('Error updating song:', error);
        res.status(500).json({ message: "Internal server error" });
    }
};