// Make apollo provider to wrap the app with apollo client and accessible globally
"use client";
import { ApolloProvider } from '@apollo/client';
import apolloClient from './apolloClient';

const ApolloProviderWrapper = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  );
};

export default ApolloProviderWrapper;