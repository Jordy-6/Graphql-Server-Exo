import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './resolvers.js';
import { typeDefs } from './schema.js';
import TrackAPI from './datasources/TrackAPI.js';
import { FilmAPI } from './datasources/FilmAPI.js';
import { getUser } from './modules/auth.js';
import db from './datasources/db.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
 
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({req}) => {
    const authorization = (req.headers.authorization)?.split('Bearer ')?.[1]
    const user = authorization ? getUser(authorization) : null;
    const {cache} = server
    return {
      dataSources: {
        trackAPI: new TrackAPI({cache}),
        filmAPI: new FilmAPI({cache}),
        db
      }, 
      user,
    }
  }
});
 
console.log(`🚀  Server ready at: ${url}`);
