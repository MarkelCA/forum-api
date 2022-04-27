import {Collection, Db, Document} from "mongodb";

export default class AuthorService {
    collection : Collection
    constructor(db:Db, tableName:string) {
        this.collection = db.collection(tableName)
    }

    getAuthors = async() : Promise<Document> => {
        return this.collection.find().toArray()
    }

    getName = async(author) : Promise<string>  => {
       const aut = await this.collection.findOne({_id : author._id})
       if(aut != null)
           return aut.name
       else
           return "test"
    }

}
