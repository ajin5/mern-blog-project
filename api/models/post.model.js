import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId:{
            type : String,
            required : true,
        },
        content:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
            unique:true,
        },
        image:{
            type:String,
            default:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fsample%2F&psig=AOvVaw168oDW8KF3B5K8V2Acds1T&ust=1731467445080000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNC69oHp1YkDFQAAAAAdAAAAABAE'

        },
        category:{
            type:String,
            default:'uncategorized',
        },
        slug:{
            type:String,
            required:true,
            unique:true,
        },
        
    
        
        
    },
    {timestamps:true}
)

const Post = mongoose.model('Post', postSchema)
export default Post