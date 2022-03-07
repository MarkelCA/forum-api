import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import typeDefs from './type-defs.js'
import resolvers from './resolvers.js';

import {MongoClient} from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()
const { FULL_DB_URL } = process.env

//const client = new MongoClient(FULL_DB_URL)
const client = await MongoClient.connect(FULL_DB_URL)
export const db = client.db()

const collection = db.collection("posts")

startApolloServer(typeDefs, resolvers)



async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}


