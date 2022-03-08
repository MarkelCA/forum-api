import {Collection, Db} from "mongodb";

export default class PostModel {
    collection : Collection;

    constructor(db: Db) {
        this.collection = db.collection('posts')
    }
}
