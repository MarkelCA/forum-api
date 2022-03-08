import dotenv from 'dotenv'
import {Db, MongoClient} from 'mongodb'


async function connect() : Promise<Db> {
   dotenv.config()

    const { DB_CONN_STRING, DB_USER, PASSWORD, DB_NAME, DB_HOST } = process.env

    const conn_string = DB_CONN_STRING ? DB_CONN_STRING : `mongodb+srv://${DB_USER}:${PASSWORD}@${DB_HOST}}`

   const client: MongoClient = new MongoClient(conn_string);
           
   await client.connect();
       
   const db: Db = client.db(DB_NAME);

   return db;
}

export default connect();
