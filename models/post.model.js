const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");



const commentSchema = mongoose.Schema({
    
    user: {        
        type: mongoose.Schema.Types.ObjectId, required: false, ref: "user"
    },
    comment: {

        type: String,
    }
 
});

const likeSchema = mongoose.Schema({
    
    user: {        
        type: mongoose.Schema.Types.ObjectId, required: false, ref: "user"
    }
    
});


const postSchema = mongoose.Schema(
    {
        description: String,
        image: String,
        
       comments:{

        type:[commentSchema],
         
        required : false


       },
       likes:{

        type:[likeSchema],
        required:false

       }, 
       creator :{

        type: mongoose.Schema.Types.ObjectId, required: false, ref: "user"

       }



    
    }




);

const Post = mongoose.model("post", postSchema);

const Comment = mongoose.model("comment",commentSchema)

const Like = mongoose.model("like",likeSchema)

module.exports = { Post ,Comment,Like}