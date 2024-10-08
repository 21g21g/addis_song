const express=require("express")
const mongoose=require("mongoose")
const bodyParser = require("body-parser");
const songRoutes=require("./routes/songRoutes")
const stasticsRoute=require("./routes/stasticsRoute")
require("dotenv").config()
const cors=require("cors")

//create app with express
const app=express()

//middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
//avoid conflic for the back and frontend
app.use(cors({
    origin: 'https://addisfrontend-jfcdhp4zr-21g21gs-projects.vercel.app',
  }));

app.use("/api/songs",songRoutes)
app.use("/api/stastics",stasticsRoute)

const uri = process.env.MONGO_URI;
const port = process.env.PORT || 3000;
mongoose.connect(uri,{ useNewUrlParser: false, useUnifiedTopology: false })
    .then(() => {
        console.log("MongoDB connected successfully");
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    })
    .catch(err => {
        console.error("Could not connect to MongoDB...", err);
    });
    // apply for start up companies