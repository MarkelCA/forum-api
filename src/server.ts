import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import typeDefs from './type-defs.js'
import resolvers from './resolvers.js';

//import {MongoClient, ObjectId} from 'mongodb'
import connect from './connection'

connect.then((db) => {
    console.log(db)
})

//export const Post = db.collection('posts')
//export const Author = db.collection('authors')

//startApolloServer(typeDefs, resolvers)

//async function startApolloServer(typeDefs, resolvers) {
  //const app = express();
  //const httpServer = http.createServer(app);

  //const server = new ApolloServer({
    //typeDefs,
    //resolvers,
    //plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  //});

  //await server.start();

  //server.applyMiddleware({ app });

  //await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));

  //console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
//}


