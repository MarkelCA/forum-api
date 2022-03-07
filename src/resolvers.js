import posts from './model.js'
import { db } from './server.js';
export default {
  Query: {
      posts: async(parent, args) => {
        const postTable = db.collection('posts')
        const posts = await postTable.find(args).toArray()
        return (posts)
    }
  },
};
