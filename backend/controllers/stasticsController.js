const Songs=require("../models/songs")

exports.countSongs=async(req,res)=>{

    try{
        const songs=await Songs.find()
        if(!songs){
            res.status(404).json({message:"songs is does not exist"})

        }
       
        const totalSongs=await Songs.countDocuments()
        const totalArtists=await Songs.aggregate([
                        {
                            $group:{
                                _id:'$artist.name',
                                // count:{$sum:1},
            
                            }
                        },
                       { $count:"totalArtists"}
                    ])
                    const totalAlbums=await Songs.aggregate([
                                    {
                                        $group:
                                        {
                                           _id:'$album.name',
                                            // count:{$sum:1}
                                        },
                                        
                                        
                                    },
                                    {$count:"totalAlbum"}
                        
                                ])
                     const totalGenres=await Songs.aggregate([{
                                          $group:{
                                                    _id:'$genre',
                                                    // count:{$sum:1}
                                                }
                                            },
                                            {$count:"totalGeners"}])
                   res.status(200).json({totalSongs,totalArtists,totalAlbums,totalGenres})

    }catch(error){
        console.log(error)
        res.status(500).json({message:"internal server error"})
    }

}

exports.totalNumberofSonginGener=async(req,res)=>{

    try{
        
        const countTotalSonginGenre=await Songs.aggregate([
            {
                $group:{
                    _id:'$genre',
                    count:{$sum:{$size:"$title"}}
                }
            }
        ])
        res.status(200).json(countTotalSonginGenre)

    }catch(error){
        console.log(error)
        res.status(500).json({message:"internal server error"})
    }


}
//total number of songs in each Album

exports.totalNumberofSonginAlbum=async(req,res)=>{

    try{
        const countTotalSonginAlbum=await Songs.aggregate([{
            $group:{
                _id:"$album.name",
                totalSongsinAlbum:{$sum:{$size:"$title"}}
            }
        }])
        const countTotalAlbuminArtist = await Songs.aggregate([
            {
                $group: {
                    _id: "$artist.name",
                    //addToSet methode is used only adds unique values to the array
                    albums: { $addToSet: "$album.name" } 
                }
            },
            {//projection methode is used to create new feilds,change field name etc for below it used to add new field _id
                $project: {
                    _id: 1,
                    totalAlbuminArtist: { $size: "$albums" } 
                }
            }
        ]);
        const countTotalSonginArtist=await Songs.aggregate([{
            $group:{
                _id:"$artist.name",
                totalSongsinArtist:{$sum:{$size:"$title"}}
                
            }
        }])
        res.status(200).json({countTotalSonginAlbum,countTotalSonginArtist,countTotalAlbuminArtist})

    }catch(error){
        console.log(error)
        res.status(500).json({message:"internal server error"})
    }
}
