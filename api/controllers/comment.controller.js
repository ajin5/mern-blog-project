
import Comment from '../models/comment.model.js';
import { errorHandler } from "../utils/error.js"

export const createComment = async (req, res, next)=>{
try{
    console.log("Authenticated User ID:", req.userId);
    const {content, postId, userId} = req.body;
    console.log(req.user)

    // if (userId !== req.userId) {
    //     return next(
    //       errorHandler(403, 'You are not allowed to create this comment')
    //     );
    //   }
    const newComment = new Comment({
        content,
        postId,
        userId
    })
    await newComment.save()
    res.status(200).json(newComment)
}catch(err){
    next(err)

}

} 

export const getComment = async (req, res, next)=>{
    
    try{
        
        const comments = await Comment.find({postId: req.params.postId}).sort({createdAt: -1})
        res.status(200).json(comments)


    }catch(err){
        next(err)

    }

}

export const comme = async(req, res, next)=>{
    try{
        const com = await Comment.findById(req.params.userId)
        const {password, ...rest} = com._doc
        res.status(200).json(rest)

    }catch(err){
        next(err.message)
    }
}