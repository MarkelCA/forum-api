import {Collection, Db, Document} from "mongodb";

export default class PostService {
    collection : Collection
    constructor(db:Db, tableName:string) {
        this.collection = db.collection(tableName)
    }

    getPosts = async() : Promise<Document> => {
        return this.collection.find().toArray()
    }

}
