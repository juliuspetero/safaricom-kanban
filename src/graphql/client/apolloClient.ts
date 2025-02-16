// Code for creating an Apollo Client instance
import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
    uri: '/api/graphql',
    cache: new InMemoryCache()
});

export default apolloClient;