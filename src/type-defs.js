import { gql } from 'apollo-server-express';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export default gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Post" type defines the queryable fields for every book in our data source.
  type Post {
      _id : ID
    title: String
    author: Author!
  }

  type Author{
      _id : ID!
      name : String!
      born_year : Int
      posts: [Post]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "posts" query returns an array of zero or more Posts (defined above).
  type Query {
    posts(title : String, author : String): [Post],
    post(_id: ID!): Post
    author(_id: ID!) : Author
    authors : [Author]
  }
`
