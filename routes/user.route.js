const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.controller");

const upload = require("../middleware/storage");




router.post("/register",upload.single('image'),userController.register);

router.post('/login',userController.login);

router.get('/users',userController.list);
router.post('/forgetpass' ,userController.forgotPassword);
router.post('/update' ,userController.updateProfile);


module.exports = router;