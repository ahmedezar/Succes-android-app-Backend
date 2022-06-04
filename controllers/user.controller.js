const { query } = require('express');
const jwt = require("jsonwebtoken");

const {User} = require('../models/user.model')

const nodemailer = require("nodemailer");


const updateProfile =  async(req,res)=>{
   try{
 
 
     const {email,name}= req.body
 
     let user = await User.findOneAndUpdate (
       {},
       {
         $set: {
           name : name
         }
 
       }
     )
 res.send({user});
  
 }catch(error){
  console.log(error)
 }
 
 }


const forgotPassword = async(req,res)=>   { 


   const resetCode = req.body.resetCode
    const user = await User.findOne({ "email": req.body.email });

    if (user) {
        // token creation
        const token = jwt.sign({ _id: user._id, email: user.email }, "Secret", {
            expiresIn: "3600000", // in Milliseconds (3600000 = 1 hour)
        });

        sendMail(req.body.email, token, resetCode);

        res.status(200).send({ "message": "Reset email has been sent to " + user.email })
    } else {
        res.status(404).send({ "message": "User not found" })
    }

 }





const sendMail = (email, token , resetCode) =>{
   let transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
           user: 'ahmed.kalaiezzar@esprit.tn',
           pass: '203JMT1535'
       }
   });

   transporter.verify(function (error, success) {
       if (error) {
           console.log(error);
           console.log("Server not ready");
       } else {
           console.log("Server is ready to take our messages");
       }
   });

   
   const mailOptions = {
       from: 'ahmed.kalaiezzar@esprit.tn',
       to: email,
       subject: 'Reset your password',
       html: "<h2>Use this as your reset code : 693178</h2>"
   };

   transporter.sendMail(mailOptions, function (error, info) {
       if (error) {
           console.log('ooooooooooooooooooooooppppppppppppppppppppp' +error);
       } else {
           console.log('Email sent: ' + info.response);
       }
   }); }



const register = async(req,res)=>{


    const user = new User({
 
     ...req.body
        
    });



 if (req.file) {

   user.image = req.file.filename;
}


await user.save();

res.json(user)




}

const login = async(req,res)=>{

  

   try{


      const {email,password}= req.body
 

    const user = await User.findOne({email,password})

    if(user){


      res.status(200).send(user)

    }else {


      res.status(404).end()
    }

    console.log(user)



      
   
  
   
}catch(error){


   console.log(error)
}





}


const list = async(req,res)=>{


   const users = await User.find()


   res.status(200).send(users)




}




module.exports = { 
     register,login,list,forgotPassword, updateProfile
}