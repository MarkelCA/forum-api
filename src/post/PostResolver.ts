import {Document, ObjectId} from 'mongodb';
import PostService from './PostService';

export class PostResolver {

    private postService : PostService

    constructor(postService : PostService) {
        this.postService = postService
    }

    public postResolver = async(parent: Document|undefined, args:Object|undefined) : Promise<Document> => {
        const posts = await this.postService.getPosts()
       console.log(posts)
        return (posts)
    }

    public getResolver() {
        return {
            posts : this.postResolver
        }
    }
}

