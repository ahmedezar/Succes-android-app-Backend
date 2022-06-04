

const {Cours} = require('../models/news.model')




const createNews = async(req,res)=>{


    const cours = new Cours({
 
     ...req.body
        
    });



 if (req.file) {

   cours.image = req.file.filename;
}


await cours.save();

res.json(cours)




}




const getAllNews = async(req,res)=>{


   const cours = await Cours.find()


   res.status(200).send(cours)




}


module.exports = { 
     createNews,getAllNews
}