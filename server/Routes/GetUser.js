const express = require("express")
const router = express.Router()
const BlogGet = require("../models/BlogPost")


// Routes

// Route 1: Read the blog
router.get("/getuser", async (req, res) => {
    try {
        await BlogGet.find({
            title: req.body.title,
            description: req.body.title,
        })
        res.json({ success: true })
    }
    catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})

module.exports = router;