const express = require("express");

const router = express.Router();

const postController = require("../controllers/post.controller");

const upload = require("../middleware/storage");




router.post("/create",upload.single('image'),postController.createPost);

router.post('/addcomment',postController.addComment)


router.get('/all',postController.getAllPosts)

router.get('/post/comments/:id',postController.getCommentsByNews)





module.exports = router;