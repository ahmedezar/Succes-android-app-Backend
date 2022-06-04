const express = require("express");

const router = express.Router();

const newsController = require("../controllers/news.controller");

const upload = require("../middleware/storage");




router.post("/create",upload.single('image'),newsController.createNews);

router.get('/all',newsController.getAllNews);




module.exports = router;