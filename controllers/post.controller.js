

const {Post,Comment,Like} = require('../models/post.model')




const createPost = async(req,res)=>{


    const post = new Post({
 
     ...req.body
        
    });



 if (req.file) {

   post.image = req.file.filename;
}


await post.save();

res.json(post)




}





const addComment = async(req,res)=>{


  Post.findOne({_id:req.body.idpost}).then(post=>{

    console.log(post)
    
    let cmt = new Comment({

      user:req.body.iduser,
      comment:req.body.comment

    })
  
    post.comments.push(cmt)
    post.save().then(newPost=>{

      res.status(200).end();

    }).catch(errCmt =>{

      res.status(404).end();

    })

  }).catch(err=>{

    res.status(404).end();

  })

}



const getAllPosts = async(req,res)=>{

   
    

     const posts= await Post.find().populate('creator').populate('comments.user').populate('likes.user')
    
      
    if(posts){

       

        res.status(200).send(posts)
    }
  



}

const getCommentsByNews = async(req,res)=>{

  Post.findOne({_id:req.params.id}).populate('comments.user').then(post=>{

    res.status(200).send(post.comments);

  }).catch(err=>{

    res.status(404).end();

  })

}




module.exports = { 
     createPost,addComment,getAllPosts,getCommentsByNews
}