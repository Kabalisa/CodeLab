import React from 'react';
import Routes from './src/components/routes';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const token = process.env.GITHUB_TOKEN;
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: token
  }
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
};

export default App;
