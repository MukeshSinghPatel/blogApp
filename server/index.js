const express = require("express");
const cors = require("cors");
const { connectDb } = require("./connection");

const BlogPost = require("./models/BlogPost");

const app = express();
const port = 5000;

// Connect Database

connectDb();

// MiddlewareS

app.use(express.json());
app.use(cors());

// ▶️ Other Method to Connect with MongoDb Atlas

// app.use('/api',require("./Routes/CreateUser"))
// app.use('/api',require("./Routes/DeleteUser"))
// app.use('/api',require("./Routes/UpdateUser"))
// app.use('/api',require("./Routes/GetUser"))


// // Routes

// Route 1: Post the blog
app.post("/post-blog", async(req, res) => {
    let blog = new BlogPost({
        title: req.body.title,
        description: req.body.description,
    });

    await blog.save();

    res.json({ message: "Blog Post Saved Successfully", blog });
})

// // Route 2: Get the blog

app.get("/get-blogs", async(req,res) => {
    let blogs=await BlogPost.find();
    if(!blogs){
        res.status(404).json({ message: "No blogs found"});
    }
    res.json({blogs});
})

// // Route 3: Delete the blog

app.delete("/delete-blog/:id", async(req,res)=>{
    let blog=await BlogPost.findByIdAndDelete(req.params.id);
    if(!blog){
        res.status(404).json({message: "No blog found"});
    }
    res.status(200).json({message: "Blog deleted successfully"});
})

// // Route 4: Update the blog

app.put("/update-blog/:id", async(req, res)=>{
    let blog=await BlogPost.findByIdAndUpdate(req.params.id);
    if(!blog){
        res.status(404).json({messsage: "No blog found"});
    }
    if(!req.body.title && !req.body.description){
        res.json({message: "Please Enter Title or Description"});
    }
    else if(!req.body.title){
        blog.description=req.body.description;
    }
    else if(!req.body.description){
        blog.title=req.body.title;
    }
    else{
    blog.title=req.body.title;
    blog.description=req.body.description;
    }
    await blog.save();
    res.status(200).json({message: "Blog Update Successfully", blog});
})

// Listen Server

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

