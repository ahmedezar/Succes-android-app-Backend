

const {Trainigs} = require('../models/training.model')




const createTran = async(req,res)=>{


    const training = new Trainigs({
 
     ...req.body
        
    });



 


await training.save();

res.json(training)




}




const getAlltr = async(req,res)=>{


   const training = await Trainigs.find()


   res.status(200).send(training)




}


module.exports = { 
     createTran,getAlltr
}