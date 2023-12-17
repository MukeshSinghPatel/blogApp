const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://mnraghuvanshi2000:mp12ns34@cluster0.wa66kvy.mongodb.net/Blogs?retryWrites=true&w=majority"
const connectDb = async () => {

    //     const connection=await mongoose.connect(MONGO_URL);
    //     if(connection){
    //         console.log("Database Connectd");
    //     }
    //     else{
    //         console.log("Database Connection Failed");
    //     }
    // }


    const connection = await mongoose.connect(MONGO_URL);
    if (!connection) {
        console.log("Database Connection Failed");
    }
    else {
        console.log("Database Connected");

        const BlogPost = mongoose.model("blogposts", new mongoose.Schema({}));

        const data = await BlogPost.find({}).exec();
        // console.log(data)
    }
}

module.exports = { connectDb }