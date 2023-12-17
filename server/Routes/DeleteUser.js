const express = require("express")
const router = express.Router()
const BlogDelete = require("../models/BlogPost")


// Routes

// Route 1: Delete the blog
router.delete("/deleteuser", async (req, res) => {
    try {
        await BlogDelete.deleteOne({
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