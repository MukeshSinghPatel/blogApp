const express = require("express")
const router = express.Router()
const BlogUpdate = require("../models/BlogPost")


// Routes

// Route 1: Update the blog
router.put("/updateuser/:id", async (req, res) => {
    try {
        await BlogUpdate.findByIdAndUpdate(req.params.id)({
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