const path = require('path')

function getPost(req, res){
    res.sendFile(path.join(__dirname, "..", "public", "images", "kbk.png"))
    // res.send('<div><h1>Post Title</h1><p>This is a post</p></div>')
}

module.exports = {
    getPost
}