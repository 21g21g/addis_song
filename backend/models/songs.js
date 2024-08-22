const mongoose=require("mongoose")


const songsSchema=new mongoose.Schema({
    title:{
        type:[String],
        require:true,
    },
    artist:{
        name:{
            type:String,
            },
        about:{
            type:String,

        },
        artistImage:{
            public_id:{
                type:String,
            require:true

            },
            url:{
                type:String,
                require:true
            }
           
        }
    },
    album:{
        name:{
            type:String,
            require:true,
        },
        albumImage:{
            public_id:{
                type:String,
            require:true

            },
            url:{
                type:String,
                require:true
            }
        }
    },
    genre:{
        type:String,
        enum:['Rock','Pop','Trap','Jazz','Rap'],
        default:"Rock"
    }

})

Songs=mongoose.model("Songs",songsSchema)

module.exports=Songs