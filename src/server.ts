import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import http from 'http';
import typeDefs from './type-defs'
import resolvers from './resolvers.js';
import { PostResolver } from './post/PostResolver';
import { AuthorResover } from './author/AuthorResolver';

//import {MongoClient, ObjectId} from 'mongodb'
import connect from './connection'
import PostService from './post/PostService';
import {DocumentNode} from 'graphql';
import AuthorService from './author/AuthorService';

connect.then((db) => {
    const postService : PostService = new PostService(db, "posts")
    const postResolver : PostResolver = new PostResolver(postService)


    const authorService : AuthorService = new AuthorService(db, "posts")
    const authorResolver : AuthorResover = new AuthorResover(authorService)

    const resolvers = {
        Query : postResolver.getResolver(),
        Author : {
            name : authorResolver.getResolver('name')
        }
    }



    const Post = db.collection('posts')
    const Author = db.collection('authors')

    startApolloServer(typeDefs, resolvers)

    async function startApolloServer(typeDefs : DocumentNode, resolvers ) {
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


})

