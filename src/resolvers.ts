import {Document, ObjectId} from 'mongodb';
import PostService from './post/PostService';


//const getPosts = async (author) => {
//}

//const getAuthor = async (post) => {
    //post.author = await Author.findOne({_id : post.author})
    //return post
//}

export default {
    Query: {
        posts: async(parent: Document|undefined, args:Object|undefined) => {
            console.log(parent, args)
            //const posts = (await Post.find({}).toArray())
            //return (posts)
        },
        //post: async(parent, {id}) => {
            //const post = await Post.findOne({_id : ObjectId(id)})
            //return (post)
        //},
        //author: async(parent, {_id}) => {
            //const author = await Author.findOne({_id : ObjectId(_id)})
            //return (author)
        //},
        //authors : async () => {
            //const authors = (await Author.find().toArray())
            //return  authors

        //},
    //},
   //Author : {
       //name: async (author) => {
           //const aut = await Author.findOne({_id : author._id})
           //return aut.name
       //},
       //posts: async(author) => {
           //const posts = await Post.find({author : author._id }).toArray()
            //return posts
       //}
    //},
    //Post : {
     //author : async(post) => {
         //return await Author.findOne({_id : post.author});
     //}
    }
};
