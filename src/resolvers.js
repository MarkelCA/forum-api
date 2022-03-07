import {ObjectId} from 'mongodb';
import { db } from './server.js';

const prepare = (o) => {
  o._id = o._id.toString()
  return o
}

export default {
  Query: {
      posts: async(parent, args) => {
        const postTable = db.collection('posts')
        const posts = await postTable.find(args).toArray()
        return (posts)
    },
      post: async(parent, {id}) => {
        const postTable = db.collection('posts')
          const post = await postTable.findOne({_id : ObjectId(id)})
          console.log(post)
        return (post)
      },
      author: async(parent, {id}) => {
        const authorsTable = db.collection('authors')
        const postTable = db.collection('posts')
        const author = await authorsTable.findOne({_id : ObjectId(id)})

        return (author)
      },
      authors : async () => {
        const authorsTable = db.collection('authors')
          const authors = (await authorsTable.find().toArray()).map(prepare)
          console.log(authors)
          return  authors

      }
  },
};
