import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { NextRequest } from 'next/server';

// Import type definitions from ./schemas
import { typeDefs } from './schemas';
// import resolvers from './resolvers';
import { resolvers } from './resolvers';


// Create the Apollo Server
const apolloServer = new ApolloServer({ typeDefs, resolvers });

// Create the Next.js API handler
const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer, {
  context: async req => ({ req }),
});

export  { handler as GET, handler as POST };