const express = require("express");

const router = express.Router();

const trController = require("../controllers/Training.controller");

const upload = require("../middleware/storage");




router.post("/create",upload.single('image'),trController.createTran);

router.get('/all',trController.getAlltr);




module.exports = router;