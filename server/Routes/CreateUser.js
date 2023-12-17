const express = require("express")
const router = express.Router()
const BlogPost = require("../models/BlogPost")


// Routes

// Route 1: Post the blog
router.post("/createuser", async (req, res) => {
    try {
        let blog=await BlogPost.create({
            title: req.body.title,
            description: req.body.title,
        })
        res.json({ success: true ,blog})
    }
    catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})

module.exports = router;