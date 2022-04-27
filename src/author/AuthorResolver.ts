import {Document, ObjectId} from 'mongodb';
import AuthorService from './AuthorService';

export class AuthorResover {

    private authorService : AuthorService

    constructor(authorService : AuthorService) {
        this.authorService = authorService
    }

    public nameResolver= async(parent: Document|undefined, args:Object|undefined) : Promise<String>  => {
        console.log('aa', parent)
        const posts = await this.authorService.getName(parent)
        return (posts)
    }

    public getResolver(field : string) {
        return {
            name : this.nameResolver
        }
    }
}

